
import React, { useState } from 'react';
import AnimateIn from '../components/ui/AnimateIn';

const HelpCenter = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "How long does shipping take?", a: "Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available at checkout for an additional fee." },
    { q: "What is your return policy?", a: "We offer free 30-day returns on all items. Items must be in their original condition with tags attached." },
    { q: "Do you ship internationally?", a: "Yes, we ship to over 50 countries. International rates and shipping times vary by destination." },
    { q: "How can I track my order?", a: "Once your order ships, you will receive an email with a tracking number and a link to follow its progress." },
    { q: "Are your products ethically sourced?", a: "Absolutely. We conduct rigorous audits of all manufacturing partners to ensure fair wages and safe working conditions." }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
      <AnimateIn direction="up">
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-4 dark:text-white">Help Center</h1>
        <p className="text-lg text-slate-500 font-medium mb-12">Everything you need to know about shopping with ShopFlow.</p>
      </AnimateIn>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <AnimateIn key={i} delay={i * 0.05}>
            <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl overflow-hidden transition-all shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-slate-900 dark:text-white">{faq.q}</span>
                <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-primary' : 'text-slate-400'}`}>
                  expand_more
                </span>
              </button>
              <div className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 pb-6 text-slate-500 font-medium text-sm leading-relaxed border-t border-slate-50 dark:border-slate-800 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>

      <AnimateIn delay={0.4}>
        <div className="mt-16 p-8 bg-primary rounded-3xl text-white text-center shadow-2xl shadow-primary/20">
          <h3 className="text-xl font-black mb-2">Still need help?</h3>
          <p className="opacity-80 mb-6">Our support team is available 24/7 to assist you.</p>
          <button className="bg-white text-primary px-8 py-3 rounded-xl font-black hover:bg-slate-50 transition-colors">Contact Support</button>
        </div>
      </AnimateIn>
    </div>
  );
};

export default HelpCenter;
