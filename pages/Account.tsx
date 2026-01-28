
import React, { useState } from 'react';
import { useApp } from '../App';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/mockData';

const Account = () => {
  const { user, login, logout, wishlist } = useApp();
  const [email, setEmail] = useState('');

  if (!user) {
    return (
      <div className="max-w-md mx-auto py-20 px-4">
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8 shadow-xl">
          <h1 className="text-3xl font-black mb-2 dark:text-white tracking-tight">Welcome Back</h1>
          <p className="text-slate-500 mb-8 font-medium">Sign in to your account to manage orders.</p>
          <form onSubmit={(e) => { e.preventDefault(); login(email); }} className="space-y-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-950 p-3" 
            />
            <button type="submit" className="w-full bg-primary text-white font-black py-4 rounded-xl hover:bg-primary-dark transition-all">Sign In</button>
          </form>
          <p className="mt-6 text-center text-xs text-slate-400 font-bold uppercase tracking-widest">Or continue as a guest</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-10">
        <aside className="w-full md:w-64 space-y-6">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <img src={`https://ui-avatars.com/api/?name=${user.name}&background=137fec&color=fff`} className="size-12 rounded-full ring-2 ring-primary ring-offset-2" alt="" />
              <div>
                <h3 className="font-black text-lg dark:text-white">{user.name}</h3>
                <p className="text-xs text-primary font-bold">Premium Member</p>
              </div>
            </div>
            <nav className="space-y-1">
              {['Dashboard', 'Orders', 'Wishlist', 'Address Book', 'Settings'].map(item => (
                <button key={item} className={`w-full text-left px-4 py-2 rounded-xl text-sm font-bold transition-colors ${item === 'Dashboard' ? 'bg-primary/10 text-primary' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'}`}>
                  {item}
                </button>
              ))}
            </nav>
            <button onClick={logout} className="w-full mt-6 py-3 rounded-xl bg-red-50 text-red-600 text-xs font-black uppercase tracking-widest hover:bg-red-100 transition-colors">Logout</button>
          </div>
        </aside>

        <main className="flex-1 space-y-8">
          <section>
            <h2 className="text-3xl font-black mb-6 tracking-tight dark:text-white">Recent Orders</h2>
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  <tr>
                    <th className="px-6 py-4">Order ID</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {[
                    { id: '#SF-90210', date: 'Oct 24, 2023', status: 'Shipped', total: '$345.99' },
                    { id: '#SF-89112', date: 'Oct 12, 2023', status: 'Delivered', total: '$129.00' }
                  ].map(order => (
                    <tr key={order.id} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                      <td className="px-6 py-4 text-sm font-bold dark:text-white">{order.id}</td>
                      <td className="px-6 py-4 text-sm text-slate-500 font-medium">{order.date}</td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tight ${order.status === 'Shipped' ? 'bg-primary/10 text-primary' : 'bg-emerald-100 text-emerald-600'}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-black text-right dark:text-white">{order.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-black mb-6 tracking-tight dark:text-white">Wishlist</h2>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlist.length === 0 ? (
                <div className="col-span-full py-12 text-center bg-slate-50 dark:bg-slate-900 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
                  <p className="text-slate-500 font-bold">Your wishlist is empty.</p>
                  <Link to="/shop" className="text-primary font-bold hover:underline">Go shopping</Link>
                </div>
              ) : (
                wishlist.map(id => {
                  // PRODUCTS is now imported from mockData to fix the 'Cannot find name' error
                  const p = PRODUCTS.find(prod => prod.id === id);
                  return p ? (
                    <div key={id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-3xl flex items-center gap-4 group">
                      <img src={p.image} className="size-16 object-cover rounded-xl" alt="" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold dark:text-white truncate">{p.name}</p>
                        <p className="text-xs text-primary font-black">${p.price}</p>
                      </div>
                      <Link to={`/product/${p.id}`} className="p-2 text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">visibility</span></Link>
                    </div>
                  ) : null;
                })
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Account;
