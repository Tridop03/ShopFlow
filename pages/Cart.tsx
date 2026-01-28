
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../App';
import PriceSummary from '../components/PriceSummary';
import Button from '../components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

const CartPage = () => {
  const { cart, removeFromCart, removeManyFromCart, updateQuantity } = useApp();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleSelect = (id: string) => {
    setSelectedIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === cart.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(cart.map(i => i.id));
    }
  };

  const handleRemoveSelected = () => {
    removeManyFromCart(selectedIds);
    setSelectedIds([]);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <span className="material-symbols-outlined text-6xl text-slate-200 mb-4">shopping_cart_off</span>
        <h1 className="text-3xl font-black mb-4 dark:text-white">Your cart is empty</h1>
        <p className="text-slate-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/shop">
          <Button variant="primary" size="lg">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight dark:text-white">Shopping Cart</h1>
          <p className="text-sm text-slate-400 font-bold uppercase tracking-widest mt-1">Manage your selected items</p>
        </div>
        
        <AnimatePresence>
          {selectedIds.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="flex items-center gap-4 bg-white dark:bg-slate-900 px-4 py-2 rounded-2xl border border-red-100 dark:border-red-900/30 shadow-lg shadow-red-500/5"
            >
              <span className="text-xs font-black text-red-500 uppercase tracking-widest">{selectedIds.length} Selected</span>
              <Button 
                variant="danger" 
                size="sm" 
                onClick={handleRemoveSelected}
                className="rounded-xl px-4"
              >
                Remove Selected
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        <div className="lg:col-span-8 space-y-6">
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-800 text-slate-400 font-bold uppercase tracking-widest text-[10px]">
                <tr>
                  <th className="px-6 py-4 w-12">
                    <input 
                      type="checkbox" 
                      className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary w-5 h-5 cursor-pointer"
                      checked={selectedIds.length === cart.length && cart.length > 0}
                      onChange={toggleSelectAll}
                    />
                  </th>
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4 text-center">Quantity</th>
                  <th className="px-6 py-4 text-right">Price</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {cart.map(item => (
                  <tr key={item.id} className={`group transition-colors ${selectedIds.includes(item.id) ? 'bg-primary/5' : ''}`}>
                    <td className="px-6 py-6">
                      <input 
                        type="checkbox" 
                        className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary w-5 h-5 cursor-pointer"
                        checked={selectedIds.includes(item.id)}
                        onChange={() => toggleSelect(item.id)}
                      />
                    </td>
                    <td className="px-6 py-6">
                      <div className="flex gap-4">
                        <img src={item.image} className="w-20 h-20 object-cover rounded-xl" alt={item.name} />
                        <div className="flex flex-col justify-between py-1">
                          <div>
                            <h3 className="font-bold text-slate-900 dark:text-white line-clamp-1">{item.name}</h3>
                            <div className="flex flex-wrap gap-2 mt-1">
                              {Object.entries(item.selectedVariants).map(([k, v]) => (
                                <span key={k} className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-500 font-bold uppercase">{v}</span>
                              ))}
                            </div>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 hover:text-red-500 transition-colors uppercase"
                          >
                            <span className="material-symbols-outlined text-sm">delete</span> Remove
                          </button>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 align-middle">
                      <div className="flex items-center justify-center">
                        <div className="flex items-center border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-800 p-1">
                          <button onClick={() => updateQuantity(item.id, -1)} className="size-8 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-500"><span className="material-symbols-outlined text-sm">remove</span></button>
                          <input type="text" readOnly className="w-8 text-center border-none bg-transparent focus:ring-0 text-sm font-black p-0 dark:text-white" value={item.quantity} />
                          <button onClick={() => updateQuantity(item.id, 1)} className="size-8 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-500"><span className="material-symbols-outlined text-sm">add</span></button>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-right align-middle font-black text-lg text-slate-900 dark:text-white whitespace-nowrap">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            <div className="flex items-center gap-2 mb-2 px-1">
              <input 
                type="checkbox" 
                className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary w-5 h-5"
                checked={selectedIds.length === cart.length && cart.length > 0}
                onChange={toggleSelectAll}
                id="mobile-select-all"
              />
              <label htmlFor="mobile-select-all" className="text-xs font-black uppercase text-slate-400 tracking-widest">Select All Items</label>
            </div>
            
            {cart.map(item => (
              <div key={item.id} className={`bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm flex gap-4 transition-all ${selectedIds.includes(item.id) ? 'ring-2 ring-primary ring-inset bg-primary/5' : ''}`}>
                <div className="flex flex-col gap-4">
                  <input 
                    type="checkbox" 
                    className="rounded border-slate-300 dark:border-slate-700 text-primary focus:ring-primary w-5 h-5 mt-1"
                    checked={selectedIds.includes(item.id)}
                    onChange={() => toggleSelect(item.id)}
                  />
                  <img src={item.image} className="w-20 h-20 object-cover rounded-xl shrink-0" alt={item.name} />
                </div>
                
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white truncate text-sm">{item.name}</h3>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {Object.entries(item.selectedVariants).map(([k, v]) => (
                        <span key={k} className="text-[10px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-slate-500 font-bold uppercase">{v}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-slate-200 dark:border-slate-800 rounded-lg bg-slate-50 dark:bg-slate-800 p-0.5">
                      <button onClick={() => updateQuantity(item.id, -1)} className="size-6 flex items-center justify-center text-slate-500"><span className="material-symbols-outlined text-xs">remove</span></button>
                      <span className="w-6 text-center text-xs font-black dark:text-white">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="size-6 flex items-center justify-center text-slate-500"><span className="material-symbols-outlined text-xs">add</span></button>
                    </div>
                    <span className="font-black text-primary text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-[10px] font-bold text-red-500 mt-2 self-start uppercase flex items-center gap-1"
                  >
                    <span className="material-symbols-outlined text-xs">delete</span> Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-black text-primary hover:translate-x-[-4px] transition-transform">
            <span className="material-symbols-outlined">arrow_back</span> Continue Shopping
          </Link>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <PriceSummary items={cart} showCheckoutButton={true} />
            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20 flex gap-4 items-start">
              <span className="material-symbols-outlined text-primary shrink-0">verified</span>
              <div>
                <p className="font-black text-sm dark:text-white">ShopFlow Guarantee</p>
                <p className="text-xs text-slate-500 mt-1 font-medium leading-relaxed">Free 30-day returns and secure payments guaranteed.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
