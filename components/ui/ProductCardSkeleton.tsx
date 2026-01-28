
import React from 'react';
import Skeleton from './Skeleton';

const ProductCardSkeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <Skeleton className="aspect-[4/5] w-full" />
      <div className="space-y-2 px-1">
        <Skeleton variant="text" className="w-1/4 h-3" />
        <Skeleton variant="text" className="w-3/4 h-5" />
        <Skeleton variant="text" className="w-1/3 h-6" />
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
