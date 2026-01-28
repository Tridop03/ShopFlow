
import React from 'react';
import AnimateIn from '../components/ui/AnimateIn';
import AnimatedText from '../components/ui/AnimatedText';

const OurStory = () => (
  <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24">
    <AnimateIn direction="up">
      <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-8 dark:text-white">
        <AnimatedText text="Our Journey to Conscious Commerce" />
      </h1>
    </AnimateIn>

    <div className="space-y-12 text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-lg">
      <AnimateIn delay={0.2}>
        <div className="aspect-video rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80" alt="Design studio" className="w-full h-full object-cover" />
        </div>
      </AnimateIn>

      <AnimateIn delay={0.3}>
        <p>Founded in 2022, ShopFlow was born out of a simple realization: the gap between high-end design and everyday accessibility was widening. We set out to create a platform that doesn't just sell products, but curates experiences for the modern minimalist.</p>
      </AnimateIn>

      <AnimateIn delay={0.4}>
        <h2 className="text-2xl font-black dark:text-white uppercase tracking-wider mb-4">The Philosophy</h2>
        <p>We believe that less is more, but "less" should be exceptional. Every brand in our catalog is vetted for three non-negotiables: craftsmanship, ethical manufacturing, and timeless aesthetic. We don't follow trends; we support the pieces that will stay in your home and wardrobe for years.</p>
      </AnimateIn>

      <AnimateIn delay={0.5}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-8">
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">eco</span>
            <h3 className="text-xl font-black dark:text-white mb-2">Sustainable Roots</h3>
            <p className="text-sm">90% of our packaging is biodegradable, and we're aiming for 100% by the end of 2025.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">workspace_premium</span>
            <h3 className="text-xl font-black dark:text-white mb-2">Direct Excellence</h3>
            <p className="text-sm">By cutting the middleman, we ensure artisans get fair pay and you get premium quality at direct prices.</p>
          </div>
        </div>
      </AnimateIn>

      <AnimateIn delay={0.6}>
        <p>Today, ShopFlow serves over 100,000 customers globally, but our mission remains the same: to elevate the everyday. Welcome to the flow.</p>
      </AnimateIn>
    </div>
  </div>
);

export default OurStory;
