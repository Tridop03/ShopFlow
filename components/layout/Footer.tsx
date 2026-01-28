
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-white dark:bg-bg-dark border-t border-slate-200 dark:border-slate-800 pt-16 pb-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
      <div className="sm:col-span-2">
        <Link to="/" className="flex items-center gap-2 mb-6">
          <span className="material-symbols-outlined text-3xl text-primary font-black">shopping_bag</span>
          <h1 className="text-xl font-black tracking-tight dark:text-white">ShopFlow</h1>
        </Link>
        <p className="text-slate-500 max-w-xs mb-8 font-medium leading-relaxed">Elevating your daily essentials with premium materials and modern design. Shop the future of lifestyle commerce.</p>
      </div>
      <div>
        <h4 className="font-black text-sm uppercase tracking-widest mb-6 dark:text-white">Shopping</h4>
        <ul className="flex flex-col gap-4 text-sm text-slate-500 font-bold">
          <li><Link to="/shop" className="hover:text-primary">New Arrivals</Link></li>
          <li><Link to="/shop" className="hover:text-primary">Best Sellers</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-black text-sm uppercase tracking-widest mb-6 dark:text-white">Company</h4>
        <ul className="flex flex-col gap-4 text-sm text-slate-500 font-bold">
          <li><Link to="/our-story" className="hover:text-primary">Our Story</Link></li>
          <li><Link to="/careers" className="hover:text-primary">Careers</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-black text-sm uppercase tracking-widest mb-6 dark:text-white">Support</h4>
        <ul className="flex flex-col gap-4 text-sm text-slate-500 font-bold">
          <li><Link to="/help-center" className="hover:text-primary">Help Center</Link></li>
          <li><Link to="/return-policy" className="hover:text-primary">Return Policy</Link></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
      <p>© 2025 ShopFlow Global Ltd.</p>
      <div className="flex gap-8">
        <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
