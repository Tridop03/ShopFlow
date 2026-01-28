
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../../App';
import Button from '../ui/Button';

const Header = () => {
  const { cart, wishlist, user } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Changed to count unique line items instead of total quantity
  const cartCount = cart.length;

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/90 dark:bg-bg-dark/90 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800' : 'bg-white dark:bg-bg-dark border-b border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between gap-4">
        
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden p-2 -ml-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
        >
          <span className="material-symbols-outlined text-slate-700 dark:text-slate-300 text-2xl">menu</span>
        </button>

        <Link to="/" className="flex items-center gap-2 shrink-0 group">
          <span className="material-symbols-outlined text-primary text-3xl font-black transition-transform group-hover:scale-110">shopping_bag</span>
          <h1 className="text-xl md:text-2xl font-black tracking-tight dark:text-white">ShopFlow</h1>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/shop" className={`text-sm font-bold transition-colors ${location.pathname === '/shop' ? 'text-primary' : 'text-slate-600 dark:text-slate-400 hover:text-primary'}`}>All Products</Link>
          <Link to="/shop?cat=Men" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary">Men</Link>
          <Link to="/shop?cat=Women" className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-primary">Women</Link>
          <Link to="/shop?sale=true" className="text-sm font-black text-red-500 hover:text-red-600">Sale</Link>
        </nav>

        <div className="flex items-center gap-1 sm:gap-4">
          <Link to="/account" className="hidden sm:block">
            <Button variant="ghost" size="icon" className="relative">
              <span className="material-symbols-outlined">favorite</span>
              {wishlist.length > 0 && <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-bg-dark"></span>}
            </Button>
          </Link>
          
          <div className="relative group/cart">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <span className="material-symbols-outlined">shopping_cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white dark:border-bg-dark min-w-[1.25rem] text-center">
                    {cartCount}
                  </span>
                )}
              </Button>
            </Link>
            
            <div className="absolute top-full right-0 w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl p-4 transition-all duration-200 opacity-0 invisible translate-y-2 group-hover/cart:opacity-100 group-hover/cart:visible group-hover/cart:translate-y-0 hidden lg:block">
              {cart.length > 0 ? (
                <>
                  <div className="max-h-60 overflow-y-auto space-y-3 scrollbar-hide">
                    {cart.map(item => (
                      <div key={item.id} className="flex gap-3">
                        <img src={item.image} className="w-14 h-14 object-cover rounded-lg" alt="" />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold truncate dark:text-white">{item.name}</p>
                          <p className="text-[10px] text-slate-500 font-medium">{item.quantity} x ${item.price.toFixed(2)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <div className="flex justify-between font-black text-sm mb-4 dark:text-white uppercase tracking-wider">
                      <span>Total</span>
                      <span>${cart.reduce((acc, i) => acc + i.price * i.quantity, 0).toFixed(2)}</span>
                    </div>
                    <Link to="/checkout" className="block w-full">
                      <Button className="w-full">Go to Checkout</Button>
                    </Link>
                  </div>
                </>
              ) : (
                <div className="text-center py-6 text-slate-400 font-bold text-sm">Your cart is empty</div>
              )}
            </div>
          </div>

          <Link to="/account">
            {user ? (
              <img src={`https://ui-avatars.com/api/?name=${user.name}&background=137fec&color=fff`} className="w-9 h-9 rounded-full border-2 border-slate-100 dark:border-slate-800" alt="Profile" />
            ) : (
              <Button variant="ghost" size="icon">
                <span className="material-symbols-outlined">account_circle</span>
              </Button>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[100] transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className={`absolute top-0 left-0 bottom-0 w-[280px] bg-white dark:bg-bg-dark shadow-2xl transition-transform duration-300 ease-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col h-full">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-2xl font-black">shopping_bag</span>
                <span className="text-xl font-black dark:text-white">ShopFlow</span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2">
                <span className="material-symbols-outlined text-slate-500">close</span>
              </button>
            </div>
            
            <nav className="flex-1 px-4 py-8">
              <div className="space-y-1">
                <Link to="/shop" className="flex items-center gap-4 px-4 py-4 rounded-2xl text-lg font-black dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800">
                  <span className="material-symbols-outlined text-primary">grid_view</span>
                  All Products
                </Link>
                <Link to="/shop?cat=Men" className="flex items-center gap-4 px-4 py-4 rounded-2xl text-lg font-bold text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined">man</span>
                  Men's Fashion
                </Link>
                <Link to="/shop?cat=Women" className="flex items-center gap-4 px-4 py-4 rounded-2xl text-lg font-bold text-slate-600 dark:text-slate-400">
                  <span className="material-symbols-outlined">woman</span>
                  Women's Fashion
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
