
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'danger' | 'success' | 'warning' | 'slate';
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary' }) => {
  const variants = {
    primary: "bg-primary text-white",
    danger: "bg-red-500 text-white",
    success: "bg-emerald-500 text-white",
    warning: "bg-amber-500 text-white",
    slate: "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
  };

  return (
    <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded-md ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;
