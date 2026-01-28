
import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'rect' | 'circle' | 'text';
}

const Skeleton: React.FC<SkeletonProps> = ({ className = '', variant = 'rect' }) => {
  const baseStyles = "bg-slate-200 dark:bg-slate-800 animate-pulse";
  
  const variants = {
    rect: "rounded-xl",
    circle: "rounded-full",
    text: "rounded-md h-4 w-full"
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`} />
  );
};

export default Skeleton;
