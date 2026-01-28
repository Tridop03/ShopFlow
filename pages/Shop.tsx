
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import ProductCardSkeleton from '../components/ui/ProductCardSkeleton';
import AnimateIn from '../components/ui/AnimateIn';

const ITEMS_PER_PAGE = 12;

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const categoryFilter = searchParams.get('cat') || 'All';
  const sort = searchParams.get('sort') || 'newest';
  const saleFilter = searchParams.get('sale') === 'true';
  const maxPriceParam = searchParams.get('maxPrice');
  const initialMaxPrice = maxPriceParam ? parseInt(maxPriceParam) : 1000;
  
  const currentPage = parseInt(searchParams.get('page') || '1');

  // Simulated loading when parameters change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, [categoryFilter, sort, saleFilter, initialMaxPrice, currentPage]);

  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];
    if (categoryFilter !== 'All') {
      result = result.filter(p => p.category === categoryFilter || p.name.includes(categoryFilter));
    }
    if (saleFilter) {
      result = result.filter(p => p.originalPrice);
    }
    result = result.filter(p => p.price <= initialMaxPrice);
    if (sort === 'price-asc') result.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') result.sort((a, b) => b.price - a.price);
    if (sort === 'newest') result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    return result;
  }, [categoryFilter, sort, saleFilter, initialMaxPrice]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      updateParam('page', '1');
    }
  }, [filteredProducts, totalPages, currentPage]);

  const pagedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const updateParam = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All' || !value || (key === 'page' && value === '1')) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const handlePageChange = (pageNum: number) => {
    updateParam('page', pageNum.toString());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const FiltersContent = () => (
    <div className="space-y-8">
      <div>
        <h3 className="font-black text-xs uppercase tracking-widest mb-5 dark:text-white">Product Categories</h3>
        <div className="flex flex-wrap lg:flex-col gap-2">
          {['All', 'Men', 'Women', 'Footwear', 'Accessories', 'Electronics', 'Home'].map(cat => (
            <button 
              key={cat}
              onClick={() => { updateParam('cat', cat); setIsMobileFiltersOpen(false); }}
              className={`text-xs sm:text-sm py-2 px-4 lg:px-3 rounded-xl transition-all border lg:border-none ${categoryFilter === cat ? 'bg-primary text-white font-black border-primary shadow-lg shadow-primary/20' : 'bg-white dark:bg-slate-900 lg:bg-transparent text-slate-500 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-black text-xs uppercase tracking-widest dark:text-white">Max Budget</h3>
          <span className="text-xs font-black text-primary bg-primary/10 px-2 py-0.5 rounded-lg">${initialMaxPrice}</span>
        </div>
        <input 
          type="range" 
          className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary" 
          min="0" 
          max="1000" 
          step="10"
          value={initialMaxPrice}
          onChange={(e) => updateParam('maxPrice', e.target.value)}
        />
      </div>

      <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-4">
        <label className="flex items-center gap-3 cursor-pointer group">
          <input 
            type="checkbox" 
            checked={saleFilter} 
            onChange={(e) => updateParam('sale', e.target.checked ? 'true' : '')}
            className="rounded-md border-slate-300 text-primary focus:ring-primary w-5 h-5 transition-all"
          />
          <span className="text-sm font-bold text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">On Sale Only</span>
        </label>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <aside className="hidden lg:block w-64 shrink-0 lg:sticky lg:top-24 lg:self-start">
          <FiltersContent />
        </aside>

        <div className="flex-1">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
            <div className="text-center sm:text-left w-full sm:w-auto">
              <h1 className="text-2xl sm:text-3xl font-black dark:text-white tracking-tight leading-none mb-1">{categoryFilter} Shop</h1>
              <p className="text-xs sm:text-sm text-slate-400 font-bold uppercase tracking-widest">Found {filteredProducts.length} items</p>
            </div>
          </div>

          <div className={`grid gap-4 sm:gap-8 ${viewMode === 'grid' ? 'grid-cols-2 md:grid-cols-3 xl:grid-cols-3' : 'grid-cols-1'}`}>
            {isLoading ? (
              Array.from({ length: 6 }).map((_, i) => <ProductCardSkeleton key={i} />)
            ) : (
              pagedProducts.map((p, i) => (
                <AnimateIn key={p.id} delay={i * 0.05} direction="up">
                  <ProductCard product={p} />
                </AnimateIn>
              ))
            )}
          </div>
          
          {!isLoading && totalPages > 1 && (
            <div className="mt-16 flex items-center justify-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
              <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className="size-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"><span className="material-symbols-outlined">chevron_left</span></button>
              <div className="flex gap-1">
                {[...Array(totalPages)].map((_, i) => {
                  const pageNum = i + 1;
                  return (
                    <button key={pageNum} onClick={() => handlePageChange(pageNum)} className={`size-10 shrink-0 rounded-xl font-black transition-all ${currentPage === pageNum ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-110' : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}`}>{pageNum}</button>
                  );
                })}
              </div>
              <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} className="size-10 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all"><span className="material-symbols-outlined">chevron_right</span></button>
            </div>
          )}
        </div>
      </div>

      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setIsMobileFiltersOpen(false)} />
          <div className="absolute bottom-0 inset-x-0 bg-white dark:bg-bg-dark rounded-t-[2.5rem] p-8 pb-12 shadow-2xl animate-in slide-in-from-bottom duration-300">
            <FiltersContent />
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
