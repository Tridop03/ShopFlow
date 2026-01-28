
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../data/mockData';
import { useApp } from '../App';
import ProductCard from '../components/ProductCard';
import Breadcrumbs from '../components/Breadcrumbs';
import VariantPicker from '../components/VariantPicker';
import { getSmartRecommendations } from '../utils/gemini';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useApp();
  const product = PRODUCTS.find(p => p.id === id);
  
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState('');
  const [recommendedIds, setRecommendedIds] = useState<string[]>([]);
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  useEffect(() => {
    if (product) {
      setActiveImage(product.image);
      const initial: Record<string, string> = {};
      product.variants.forEach(v => {
        if (v.options.length > 0) initial[v.name] = v.options[0].value;
      });
      setSelectedVariants(initial);
      getSmartRecommendations([product.id], PRODUCTS).then(ids => setRecommendedIds(ids));
    }
    window.scrollTo(0, 0);
  }, [product]);

  if (!product) return <div className="p-20 text-center font-bold">Product not found.</div>;

  const isOutOfStock = product.stock === 0;
  const isLowStock = product.stock > 0 && product.stock < 10;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Breadcrumbs paths={[{ label: product.category, to: `/shop?cat=${product.category}` }, { label: product.name }]} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="space-y-4">
          <div className="aspect-square bg-slate-100 dark:bg-slate-800 rounded-3xl overflow-hidden group cursor-zoom-in">
            <img src={activeImage} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={product.name} />
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {product.images.map((img, i) => (
              <button 
                key={i}
                onClick={() => setActiveImage(img)}
                className={`w-20 h-20 shrink-0 rounded-xl overflow-hidden border-2 transition-all ${activeImage === img ? 'border-primary ring-2 ring-primary/20' : 'border-transparent opacity-60 hover:opacity-100'}`}
              >
                <img src={img} className="w-full h-full object-cover" alt="" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">{product.brand}</p>
            <h1 className="text-3xl font-black dark:text-white tracking-tight mb-2">{product.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`material-symbols-outlined text-sm ${i < Math.floor(product.rating) ? 'fill-1' : ''}`}>star</span>
                ))}
                <span className="ml-2 text-slate-600 dark:text-slate-400 font-bold text-sm">{product.rating} ({product.reviewsCount} reviews)</span>
              </div>
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-4xl font-black text-primary">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-lg text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{product.description}</p>
          <hr className="border-slate-200 dark:border-slate-800" />

          <VariantPicker 
            variants={product.variants} 
            selectedVariants={selectedVariants} 
            onSelect={(name, val) => setSelectedVariants(prev => ({ ...prev, [name]: val }))}
            onShowSizeGuide={() => setShowSizeGuide(true)}
          />

          {isOutOfStock && (
            <div className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-xl text-sm font-bold flex items-center gap-2">
              <span className="material-symbols-outlined">error</span> Currently out of stock.
            </div>
          )}
          {isLowStock && (
            <div className="bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 p-3 rounded-xl text-sm font-bold flex items-center gap-2">
              <span className="material-symbols-outlined">warning</span> Only {product.stock} left in stock!
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <div className="flex items-center border-2 border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3 py-3 text-slate-500 hover:text-primary transition-colors"><span className="material-symbols-outlined">remove</span></button>
              <input type="text" readOnly value={quantity} className="w-12 text-center bg-transparent border-none focus:ring-0 font-black text-lg p-0 dark:text-white" />
              <button onClick={() => setQuantity(q => q + 1)} className="px-3 py-3 text-slate-500 hover:text-primary transition-colors"><span className="material-symbols-outlined">add</span></button>
            </div>
            <button 
              disabled={isOutOfStock}
              onClick={() => addToCart(product, quantity, selectedVariants)}
              className="flex-1 bg-primary text-white font-black py-4 px-8 rounded-xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined">shopping_bag</span> Add to Cart
            </button>
          </div>
        </div>
      </div>

      {recommendedIds.length > 0 && (
        <section className="mt-20">
          <h3 className="text-2xl font-black mb-8 tracking-tight dark:text-white">You May Also Like</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {PRODUCTS.filter(p => recommendedIds.includes(p.id) && p.id !== product.id).slice(0, 4).map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {showSizeGuide && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-bg-dark rounded-3xl w-full max-w-lg p-8 relative shadow-2xl">
            <button onClick={() => setShowSizeGuide(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-900"><span className="material-symbols-outlined">close</span></button>
            <h3 className="text-2xl font-black mb-6 dark:text-white">Size Guide</h3>
            <table className="w-full text-sm text-left">
              <thead className="text-slate-500 font-bold uppercase tracking-widest text-xs">
                <tr><th className="pb-4">Size</th><th className="pb-4">Chest (in)</th><th className="pb-4">Waist (in)</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {[['Small', '34-36', '28-30'], ['Medium', '38-40', '32-34'], ['Large', '42-44', '36-38']].map(([s, c, w]) => (
                  <tr key={s}><td className="py-3 font-bold dark:text-white">{s}</td><td className="py-3 dark:text-slate-300">{c}</td><td className="py-3 dark:text-slate-300">{w}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
