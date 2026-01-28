
export interface Product {
  id: string;
  name: string;
  category: string;
  subCategory: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  images: string[];
  description: string;
  isHot?: boolean;
  isNew?: boolean;
  variants: Variant[];
  stock: number;
}

export interface Variant {
  id: string;
  name: string; // e.g., "Size", "Color"
  options: {
    value: string;
    stock: number;
    colorCode?: string;
  }[];
}

export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  selectedVariants: Record<string, string>;
}

export interface User {
  id: string;
  name: string;
  email: string;
  isPremium?: boolean;
  avatar?: string;
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: 'Shipped' | 'Delivered' | 'Processing';
  items: CartItem[];
}
