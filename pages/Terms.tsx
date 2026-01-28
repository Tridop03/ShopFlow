
import React from 'react';
import AnimateIn from '../components/ui/AnimateIn';

const Terms = () => (
  <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
    <AnimateIn>
      <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-8 dark:text-white">Terms of Service</h1>
      <div className="space-y-10 text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
        <p className="text-sm italic">Last Updated: January 1, 2025</p>
        
        <section>
          <h2 className="text-xl font-black dark:text-white mb-4">1. Agreement to Terms</h2>
          <p>By accessing or using ShopFlow, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
        </section>

        <section>
          <h2 className="text-xl font-black dark:text-white mb-4">2. Intellectual Property</h2>
          <p>The Service and its original content, features, and functionality are and will remain the exclusive property of ShopFlow and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of ShopFlow.</p>
        </section>

        <section>
          <h2 className="text-xl font-black dark:text-white mb-4">3. User Accounts</h2>
          <p>When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
        </section>

        <section>
          <h2 className="text-xl font-black dark:text-white mb-4">4. Limitation of Liability</h2>
          <p>In no event shall ShopFlow, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
        </section>
      </div>
    </AnimateIn>
  </div>
);

export default Terms;
