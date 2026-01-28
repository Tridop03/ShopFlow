
import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
  paths: { label: string; to?: string }[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ paths }) => {
  return (
    <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-medium">
      <Link to="/" className="hover:text-primary transition-colors">Home</Link>
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          {path.to ? (
            <Link to={path.to} className="hover:text-primary transition-colors">{path.label}</Link>
          ) : (
            <span className="text-slate-900 dark:text-white font-bold">{path.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
