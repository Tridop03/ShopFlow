
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Product } from '../types';
import { useApp } from '../App';
import Button from './ui/Button';
import Badge from './ui/Badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleWishlist, wishlist, addToCart } = useApp();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative flex flex-col gap-2 sm:gap-3"
    >
      <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            src={product.image} 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
            alt={product.name} 
          />
        </Link>
        
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3 flex flex-col gap-1">
          {product.isHot && <Badge variant="danger">HOT</Badge>}
          {product.isNew && <Badge variant="primary">NEW</Badge>}
        </div>

        <button 
          onClick={() => toggleWishlist(product.id)}
          className={`absolute top-2 sm:top-3 right-2 sm:right-3 p-1.5 sm:p-2 rounded-full shadow-sm transition-all ${isWishlisted ? 'bg-red-500 text-white' : 'bg-white/80 hover:bg-white text-slate-700'}`}
        >
          <span className={`material-symbols-outlined text-lg sm:text-xl ${isWishlisted ? 'fill-1' : ''}`}>favorite</span>
        </button>

        <div className="absolute inset-x-2 sm:inset-x-3 bottom-2 sm:bottom-3 translate-y-12 group-hover:translate-y-0 transition-transform duration-300 hidden sm:block">
          <Button 
            variant="secondary"
            className="w-full py-2.5 text-xs font-black"
            disabled={product.stock === 0}
            onClick={() => addToCart(product, 1, {})}
          >
            {product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </Button>
        </div>
      </div>
      
      <div className="px-1">
        <p className="text-slate-400 text-[9px] sm:text-[10px] uppercase font-black tracking-widest">{product.brand}</p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white truncate group-hover:text-primary transition-colors">{product.name}</h3>
        </Link>
        <div className="flex items-center gap-2 mt-0.5 sm:mt-1">
          <span className="font-black text-primary text-base sm:text-lg">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-slate-400 line-through text-xs sm:text-sm">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
