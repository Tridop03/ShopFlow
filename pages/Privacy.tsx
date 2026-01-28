
import React from 'react';
import AnimateIn from '../components/ui/AnimateIn';

const Privacy = () => (
  <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
    <AnimateIn>
      <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-8 dark:text-white">Privacy Policy</h1>
      <div className="space-y-10 text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
        <p className="text-sm italic">Effective Date: January 1, 2025</p>
        
        <section>
          <h2 className="text-xl font-black dark:text-white mb-4">Information Collection</h2>
          <p>We collect information you provide directly to us, such as when you create an account, make a purchase, or communicate with us. The types of information we may collect include your name, email address, postal address, and payment information.</p>
        </section>

        <section className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
          <h2 className="text-xl font-black text-primary mb-4">How We Use Your Data</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To process and fulfill your orders.</li>
            <li>To provide and maintain our Service.</li>
            <li>To notify you about changes to our Service.</li>
            <li>To provide customer support.</li>
            <li>To monitor the usage of our Service.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-black dark:text-white mb-4">Data Security</h2>
          <p>The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>
        </section>

        <section>
          <h2 className="text-xl font-black dark:text-white mb-4">Your Rights</h2>
          <p>You have the right to request access to the personal data we hold about you, to request that your personal data be corrected or deleted, and to object to the processing of your personal data.</p>
        </section>
      </div>
    </AnimateIn>
  </div>
);

export default Privacy;
