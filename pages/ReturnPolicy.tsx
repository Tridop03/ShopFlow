
import React from 'react';
import AnimateIn from '../components/ui/AnimateIn';

const ReturnPolicy = () => (
  <div className="max-w-3xl mx-auto px-4 py-16 sm:py-24">
    <AnimateIn>
      <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-8 dark:text-white">Return Policy</h1>
      <div className="prose dark:prose-invert max-w-none space-y-8 text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
        <section>
          <h2 className="text-2xl font-black dark:text-white uppercase tracking-wider text-sm mb-4">30-Day Happiness Guarantee</h2>
          <p>If you're not completely satisfied with your purchase, we're here to help. You have 30 calendar days to return an item from the date you received it.</p>
        </section>

        <section className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800">
          <h3 className="text-lg font-black dark:text-white mb-4">Eligibility for Returns</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Item must be unused and in the same condition that you received it.</li>
            <li>Item must be in the original packaging.</li>
            <li>Item needs to have the receipt or proof of purchase.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-black dark:text-white uppercase tracking-wider text-sm mb-4">Refunds</h2>
          <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.</p>
        </section>

        <section>
          <h2 className="text-2xl font-black dark:text-white uppercase tracking-wider text-sm mb-4">Shipping Costs</h2>
          <p>ShopFlow covers the shipping costs for returning your item if you use our provided return label. Original shipping costs are non‑refundable.</p>
        </section>
      </div>
    </AnimateIn>
  </div>
);

export default ReturnPolicy;
