
import React from 'react';
import AnimateIn from '../components/ui/AnimateIn';
import Button from '../components/ui/Button';

const Careers = () => (
  <div className="max-w-5xl mx-auto px-4 py-16 sm:py-24">
    <AnimateIn>
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight mb-6 dark:text-white">Join the Flow.</h1>
        <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto">We're building the future of shopping. We're looking for thinkers, builders, and dreamers.</p>
      </div>
    </AnimateIn>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
      {[
        { icon: 'bolt', title: 'Fast Growth', desc: 'Join a startup that doubled its size in just 12 months.' },
        { icon: 'public', title: 'Remote First', desc: 'Work from anywhere. We value results over office chairs.' },
        { icon: 'volunteer_activism', title: 'Full Benefits', desc: 'Health, dental, and unlimited PTO. We care about you.' }
      ].map((perk, i) => (
        <AnimateIn key={i} delay={i * 0.1}>
          <div className="text-center p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
            <span className="material-symbols-outlined text-primary text-4xl mb-4">{perk.icon}</span>
            <h3 className="text-lg font-black dark:text-white mb-2">{perk.title}</h3>
            <p className="text-sm text-slate-500 font-medium">{perk.desc}</p>
          </div>
        </AnimateIn>
      ))}
    </div>

    <AnimateIn>
      <h2 className="text-2xl font-black mb-10 dark:text-white tracking-tight">Open Positions</h2>
      <div className="space-y-4">
        {[
          { title: 'Senior Frontend Engineer', dept: 'Engineering', type: 'Full-time' },
          { title: 'Product Designer', dept: 'Design', type: 'Full-time' },
          { title: 'Customer Experience Lead', dept: 'Support', type: 'Remote' },
          { title: 'Logistics Manager', dept: 'Operations', type: 'Hybrid' }
        ].map((job, i) => (
          <div key={i} className="group p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-xl hover:border-primary/20 transition-all cursor-pointer">
            <div>
              <h3 className="text-lg font-black dark:text-white group-hover:text-primary transition-colors">{job.title}</h3>
              <div className="flex gap-4 mt-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{job.dept}</span>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">• {job.type}</span>
              </div>
            </div>
            <Button variant="ghost" className="sm:w-auto">Apply Now</Button>
          </div>
        ))}
      </div>
    </AnimateIn>
  </div>
);

export default Careers;
