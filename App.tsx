
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { CartItem, Product, User } from './types';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import CartPage from './pages/Cart';
import Checkout from './pages/Checkout';
import Account from './pages/Account';
import OurStory from './pages/OurStory';
import Careers from './pages/Careers';
import HelpCenter from './pages/HelpCenter';
import ReturnPolicy from './pages/ReturnPolicy';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

interface AppContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, variants: Record<string, string>) => void;
  removeFromCart: (cartItemId: string) => void;
  removeManyFromCart: (cartItemIds: string[]) => void;
  updateQuantity: (cartItemId: string, delta: number) => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
};

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('shopflow_cart');
    return saved ? JSON.parse(saved) : [];
  });
  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('shopflow_wishlist');
    return saved ? JSON.parse(saved) : [];
  });
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('shopflow_user');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem('shopflow_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('shopflow_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    if (user) localStorage.setItem('shopflow_user', JSON.stringify(user));
    else localStorage.removeItem('shopflow_user');
  }, [user]);

  const addToCart = (product: Product, quantity: number, variants: Record<string, string>) => {
    setCart(prev => {
      const existing = prev.find(item => 
        item.productId === product.id && 
        JSON.stringify(item.selectedVariants) === JSON.stringify(variants)
      );
      if (existing) {
        return prev.map(item => item.id === existing.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, {
        id: Math.random().toString(36).substr(2, 9),
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity,
        selectedVariants: variants
      }];
    });
  };

  const removeFromCart = (id: string) => setCart(prev => prev.filter(i => i.id !== id));
  
  const removeManyFromCart = (ids: string[]) => {
    setCart(prev => prev.filter(i => !ids.includes(i.id)));
  };

  const updateQuantity = (id: string, delta: number) => setCart(prev => prev.map(i => 
    i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i
  ));

  const toggleWishlist = (id: string) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const login = (email: string) => setUser({ id: 'u1', name: email.split('@')[0], email, isPremium: true });
  const logout = () => setUser(null);

  return (
    <AppContext.Provider value={{ cart, addToCart, removeFromCart, removeManyFromCart, updateQuantity, wishlist, toggleWishlist, user, login, logout }}>
      {children}
    </AppContext.Provider>
  );
};

const App = () => {
  return (
    <AppProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col dark:bg-bg-dark selection:bg-primary/20">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/account" element={<Account />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/help-center" element={<HelpCenter />} />
              <Route path="/return-policy" element={<ReturnPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </AppProvider>
  );
};

export default App;
