
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../App';

const Checkout = () => {
  const { cart, user } = useApp();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const subtotal = cart.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const total = subtotal + (subtotal * 0.08);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Order placed successfully! We've sent a confirmation email.");
      navigate('/account');
    }, 2000);
  };

  if (cart.length === 0) return <div>Empty cart.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7">
          <h1 className="text-3xl font-black mb-10 dark:text-white tracking-tight">Checkout</h1>
          <form onSubmit={handleSubmit} className="space-y-8">
            <section className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-black mb-6 dark:text-white uppercase tracking-wider text-xs">Contact Information</h3>
              <div className="space-y-4">
                <input 
                  type="email" 
                  defaultValue={user?.email}
                  placeholder="Email Address" 
                  required
                  className="w-full rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-950 focus:ring-primary py-3" 
                />
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="rounded border-slate-300 text-primary" />
                  <span className="text-sm text-slate-500 font-bold">Email me with news and offers</span>
                </label>
              </div>
            </section>

            <section className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-black mb-6 dark:text-white uppercase tracking-wider text-xs">Shipping Address</h3>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" required className="rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-950 p-3" />
                <input type="text" placeholder="Last Name" required className="rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-950 p-3" />
                <input type="text" placeholder="Address" required className="col-span-2 rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-950 p-3" />
                <input type="text" placeholder="City" required className="rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-950 p-3" />
                <input type="text" placeholder="ZIP Code" required className="rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-950 p-3" />
              </div>
            </section>

            <section className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-black mb-6 dark:text-white uppercase tracking-wider text-xs">Payment Method</h3>
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="bg-primary/5 p-6 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <label className="flex items-center gap-3 font-bold dark:text-white"><input type="radio" checked className="text-primary" /> Credit Card</label>
                    <span className="material-symbols-outlined text-slate-400">credit_card</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" placeholder="Card Number" className="col-span-2 rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-950 p-3" />
                    <input type="text" placeholder="MM/YY" className="rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-950 p-3" />
                    <input type="text" placeholder="CVV" className="rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-950 p-3" />
                  </div>
                </div>
                <div className="p-4 flex items-center gap-3">
                  <label className="flex items-center gap-3 font-bold text-slate-500"><input type="radio" disabled className="text-primary" /> PayPal (Unavailable)</label>
                </div>
              </div>
            </section>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary text-white font-black py-5 rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 text-lg disabled:opacity-50"
            >
              {loading ? <span className="animate-spin material-symbols-outlined">progress_activity</span> : 'Place Order Now'}
            </button>
          </form>
        </div>

        <div className="lg:col-span-5">
          <div className="sticky top-24 bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-100 dark:border-slate-800">
            <h3 className="text-lg font-black mb-8 dark:text-white tracking-tight">Order Summary</h3>
            <div className="space-y-6 mb-8 max-h-80 overflow-y-auto pr-2 scrollbar-hide">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative size-16 shrink-0">
                    <img src={item.image} className="w-full h-full object-cover rounded-xl" alt={item.name} />
                    <span className="absolute -top-2 -right-2 bg-slate-500 text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">{item.quantity}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200 truncate">{item.name}</h4>
                    <p className="text-xs text-slate-500 font-medium">Qty: {item.quantity}</p>
                  </div>
                  <span className="text-sm font-black dark:text-white">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-800 text-sm font-bold">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal</span>
                <span className="dark:text-white">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Shipping</span>
                <span className="text-green-600">FREE</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Taxes</span>
                <span className="dark:text-white">${(subtotal * 0.08).toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-800 mt-4">
                <span className="text-lg font-black dark:text-white">Total</span>
                <span className="text-2xl font-black text-primary">${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
