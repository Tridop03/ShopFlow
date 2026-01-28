
import React from 'react';
import { Variant } from '../types';

interface VariantPickerProps {
  variants: Variant[];
  selectedVariants: Record<string, string>;
  onSelect: (name: string, value: string) => void;
  onShowSizeGuide?: () => void;
}

const VariantPicker: React.FC<VariantPickerProps> = ({ variants, selectedVariants, onSelect, onShowSizeGuide }) => {
  return (
    <div className="space-y-6">
      {variants.map(variant => (
        <div key={variant.id}>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-black dark:text-white uppercase tracking-wider">{variant.name}</span>
            {variant.name === 'Size' && onShowSizeGuide && (
              <button onClick={onShowSizeGuide} className="text-xs text-primary font-bold hover:underline">Size Guide</button>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {variant.options.map(opt => (
              <button 
                key={opt.value}
                onClick={() => onSelect(variant.name, opt.value)}
                className={`px-4 py-2 text-xs font-bold rounded-xl border-2 transition-all ${selectedVariants[variant.name] === opt.value ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:text-slate-300'}`}
              >
                {opt.value}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VariantPicker;
