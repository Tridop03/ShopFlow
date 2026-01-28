
import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';

interface PriceSummaryProps {
  items: CartItem[];
  showCheckoutButton?: boolean;
}

const PriceSummary: React.FC<PriceSummaryProps> = ({ items, showCheckoutButton = false }) => {
  const subtotal = items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const shipping = subtotal > 200 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-sm">
      <h2 className="text-2xl font-black mb-8 dark:text-white tracking-tight">Summary</h2>
      <div className="space-y-4 mb-8">
        <div className="flex justify-between text-slate-500 font-medium">
          <span>Subtotal</span>
          <span className="font-bold text-slate-900 dark:text-white">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-slate-500 font-medium">
          <span>Shipping</span>
          <span className={shipping === 0 ? 'text-green-600 font-black' : 'font-bold text-slate-900 dark:text-white'}>
            {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between text-slate-500 font-medium">
          <span>Tax (8%)</span>
          <span className="font-bold text-slate-900 dark:text-white">${tax.toFixed(2)}</span>
        </div>
      </div>
      <div className="pt-6 border-t border-slate-100 dark:border-slate-800 mb-8">
        <div className="flex justify-between items-baseline">
          <span className="text-lg font-black dark:text-white">Total</span>
          <span className="text-3xl font-black text-primary">${total.toFixed(2)}</span>
        </div>
      </div>
      
      {showCheckoutButton && (
        <Link to="/checkout" className="block w-full bg-primary hover:bg-primary-dark text-white font-black py-4 rounded-xl text-center text-lg shadow-xl shadow-primary/20 transition-all flex items-center justify-center gap-2">
          Checkout
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      )}
    </div>
  );
};

export default PriceSummary;
