
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PRODUCTS, CATEGORIES } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import AnimateIn from '../components/ui/AnimateIn';
import AnimatedText from '../components/ui/AnimatedText';

const SectionHeader: React.FC<{ title: string; link?: string }> = ({ title, link }) => (
  <AnimateIn className="flex items-center justify-between mb-8 sm:mb-10 px-1">
    <h2 className="text-2xl sm:text-3xl font-black tracking-tight dark:text-white">{title}</h2>
    {link && (
      <Link to={link} className="text-primary font-bold flex items-center gap-1.5 hover:translate-x-1 transition-transform group">
        <span className="text-sm">View All</span> 
        <span className="material-symbols-outlined text-xl">trending_flat</span>
      </Link>
    )}
  </AnimateIn>
);

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-[2rem] sm:rounded-3xl bg-slate-900 min-h-[75vh] sm:min-h-0 sm:aspect-video lg:aspect-[21/9] flex items-center mb-16 sm:mb-24 group">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.4) 100%), url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1920&q=80')` }} 
        />
        
        <div className="relative w-full h-full px-6 sm:px-12 md:px-16 flex flex-col justify-end sm:justify-center pb-12 sm:pb-0 text-white max-w-2xl space-y-4 sm:space-y-6">
          <AnimateIn delay={0.2}>
            <Badge variant="primary">New Arrival 2025</Badge>
          </AnimateIn>
          
          <AnimatedText 
            text="Define Your Own Space" 
            className="text-[2.5rem] sm:text-5xl md:text-7xl font-black leading-[1.05] tracking-tighter"
            delay={0.4}
          />
          
          <AnimateIn delay={0.8} direction="up">
            <p className="text-sm sm:text-lg md:text-xl opacity-90 font-medium max-w-md leading-relaxed">
              Our newest collection combines minimalist aesthetics with maximum comfort for your everyday life.
            </p>
          </AnimateIn>
          
          <AnimateIn delay={1} direction="up" className="pt-4 flex flex-col sm:flex-row gap-3">
            <Link to="/shop" className="w-full sm:w-auto">
              <Button size="lg" className="w-full">Shop Now</Button>
            </Link>
            <Link to="/shop?sale=true" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                View Lookbook
              </Button>
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="mb-20 sm:mb-28">
        <SectionHeader title="Explore Categories" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
          {CATEGORIES.map((cat, i) => (
            <AnimateIn key={cat.name} delay={i * 0.1} direction="up">
              <Link to={`/shop?cat=${cat.name}`} className="group relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-[3/4] cursor-pointer shadow-sm hover:shadow-xl transition-all block">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                  style={{ backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%), url('${cat.image}')` }}
                />
                <div className="absolute inset-0 flex items-end p-4 sm:p-6">
                  <div className="w-full flex justify-between items-center text-white">
                    <span className="text-sm sm:text-lg font-black tracking-tight">{cat.name}</span>
                    <span className="material-symbols-outlined transform group-hover:translate-x-2 transition-transform text-lg sm:text-2xl">arrow_forward</span>
                  </div>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="mb-20 sm:mb-28">
        <SectionHeader title="New Arrivals" link="/shop" />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {PRODUCTS.filter(p => p.isNew).slice(0, 4).map((p, i) => (
            <AnimateIn key={p.id} delay={i * 0.1} direction="up">
              <ProductCard product={p} />
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* Flash Sale Banner */}
      <AnimateIn direction="none" className="mb-20 sm:mb-28 px-1">
        <div className="bg-primary rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
          <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          />
          <div className="relative z-10 space-y-4 sm:space-y-6">
            <Badge variant="slate" className="bg-white/20 text-white">Limited Time</Badge>
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight leading-none">FLASH SALE</h2>
            <p className="max-w-xl mx-auto text-sm sm:text-lg opacity-80 font-medium">Refresh your wardrobe with our signature pieces at an unbeatable price point.</p>
            <div className="pt-4">
              <Link to="/shop?sale=true">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-slate-50">
                  Shop Exclusive Offers
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </AnimateIn>
    </div>
  );
};

export default Home;
