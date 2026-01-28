
import { Product } from '../types';

const generateMockProducts = (): Product[] => {
  return [
    // Men's Category
    {
      id: 'prod-1',
      name: 'Classic Oxford Button-Down Shirt',
      category: 'Men',
      subCategory: 'Shirts',
      brand: 'Nordic Step',
      price: 89,
      originalPrice: 120,
      rating: 4.5,
      reviewsCount: 234,
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Timeless oxford shirt crafted from 100% premium cotton. Features a classic button-down collar, chest pocket, and tailored fit. Perfect for both office and casual occasions.',
      isHot: true,
      isNew: false,
      stock: 45,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: 'S', stock: 10 }, { value: 'M', stock: 15 }, { value: 'L', stock: 12 }, { value: 'XL', stock: 8 }] },
        { id: 'v2', name: 'Color', options: [{ value: 'White', stock: 15 }, { value: 'Light Blue', stock: 20 }, { value: 'Pink', stock: 10 }] }
      ]
    },
    {
      id: 'prod-2',
      name: 'Slim Fit Chino Pants',
      category: 'Men',
      subCategory: 'Pants',
      brand: 'Urban Shell',
      price: 79,
      rating: 4.3,
      reviewsCount: 189,
      image: 'https://i.pinimg.com/1200x/59/80/d5/5980d59a6a2353a3a8221f2a3f4fea77.jpg',
      images: [
        'https://i.pinimg.com/1200x/59/80/d5/5980d59a6a2353a3a8221f2a3f4fea77.jpg',
        'https://i.pinimg.com/1200x/d6/4f/2c/d64f2c5be1f56056948fd57e381fe30c.jpg',
        'https://i.pinimg.com/1200x/55/4a/9a/554a9ad0c1d604941c115371ecb80412.jpg',
        'https://i.pinimg.com/1200x/15/86/5e/15865e230d6bfbbb5549d2630ca65222.jpg'
      ],
      description: 'Modern slim-fit chinos with stretch fabric for all-day comfort. Features side pockets, back welt pockets, and a sleek tapered leg. Versatile enough for work or weekend wear.',
      isHot: false,
      isNew: true,
      stock: 62,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: '30', stock: 12 }, { value: '32', stock: 18 }, { value: '34', stock: 20 }, { value: '36', stock: 12 }] }
      ]
    },
    {
      id: 'prod-3',
      name: 'Premium Wool Overcoat',
      category: 'Men',
      subCategory: 'Outerwear',
      brand: 'Ethereal',
      price: 299,
      originalPrice: 450,
      rating: 4.8,
      reviewsCount: 156,
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Luxurious double-breasted overcoat made from Italian wool blend. Features a notch lapel, inner lining, and classic silhouette. Perfect for cold weather elegance.',
      isHot: true,
      isNew: false,
      stock: 23,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: 'M', stock: 5 }, { value: 'L', stock: 10 }, { value: 'XL', stock: 8 }] }
      ]
    },
    {
      id: 'prod-4',
      name: 'Performance Running Sneakers',
      category: 'Footwear',
      subCategory: 'Sneakers',
      brand: 'Velox',
      price: 129,
      rating: 4.6,
      reviewsCount: 423,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1605408499391-6368c628ef42?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'High-performance running shoes with responsive cushioning and breathable mesh upper. Features enhanced heel support and durable rubber outsole for maximum grip.',
      isHot: true,
      isNew: true,
      stock: 78,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: '8', stock: 15 }, { value: '9', stock: 20 }, { value: '10', stock: 25 }, { value: '11', stock: 18 }] }
      ]
    },
    {
      id: 'prod-5',
      name: 'Leather Weekender Bag',
      category: 'Accessories',
      subCategory: 'Bags',
      brand: 'Nomad',
      price: 189,
      originalPrice: 250,
      rating: 4.7,
      reviewsCount: 267,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Handcrafted full-grain leather weekender with spacious main compartment and multiple interior pockets. Features adjustable shoulder strap and brass hardware detailing.',
      isHot: false,
      isNew: false,
      stock: 34,
      variants: []
    },

    // Women's Category
    {
      id: 'prod-6',
      name: 'Elegant Midi Wrap Dress',
      category: 'Women',
      subCategory: 'Dresses',
      brand: 'Ethereal',
      price: 149,
      rating: 4.6,
      reviewsCount: 312,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1612336307429-8a898d10e223?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Feminine wrap dress in flowing fabric with flutter sleeves and midi length. Features adjustable waist tie and V-neckline. Perfect for both casual and formal occasions.',
      isHot: true,
      isNew: true,
      stock: 56,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: 'XS', stock: 10 }, { value: 'S', stock: 15 }, { value: 'M', stock: 18 }, { value: 'L', stock: 13 }] }
      ]
    },
    {
      id: 'prod-7',
      name: 'Cashmere Blend Sweater',
      category: 'Women',
      subCategory: 'Knitwear',
      brand: 'Soft Touch',
      price: 119,
      originalPrice: 165,
      rating: 4.8,
      reviewsCount: 445,
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Ultra-soft cashmere blend sweater with ribbed crew neck and cuffs. Lightweight yet warm, perfect for layering. Features relaxed fit and subtle texture.',
      isHot: false,
      isNew: false,
      stock: 67,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: 'XS', stock: 15 }, { value: 'S', stock: 20 }, { value: 'M', stock: 22 }, { value: 'L', stock: 10 }] }
      ]
    },
    {
      id: 'prod-8',
      name: 'Silk Blend Camisole Top',
      category: 'Women',
      subCategory: 'Tops',
      brand: 'Aura',
      price: 69,
      rating: 4.4,
      reviewsCount: 198,
      image: 'https://i.pinimg.com/1200x/c2/be/ec/c2beeccc6a5f4ae4f96502be2cbadb07.jpg',
      images: [
        'https://i.pinimg.com/1200x/c2/be/ec/c2beeccc6a5f4ae4f96502be2cbadb07.jpg',
        'https://i.pinimg.com/736x/fe/fd/07/fefd07b00a035aac4c3903bbaa08d420.jpg',
        'https://i.pinimg.com/736x/4f/68/27/4f6827789b8debe73de006b69c043190.jpg',
        'https://i.pinimg.com/736x/de/ef/52/deef529cdcb4f9fbb3a5b56bc3f8caa0.jpg'
      ],
      description: 'Delicate silk blend camisole with adjustable straps and lace trim detailing. Versatile piece that transitions from day to night effortlessly.',
      isHot: false,
      isNew: true,
      stock: 89,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: 'XS', stock: 20 }, { value: 'S', stock: 25 }, { value: 'M', stock: 30 }, { value: 'L', stock: 14 }] }
      ]
    },
    {
      id: 'prod-9',
      name: 'High-Waist Pleated Skirt',
      category: 'Women',
      subCategory: 'Skirts',
      brand: 'Premium Line',
      price: 95,
      rating: 4.5,
      reviewsCount: 276,
      image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Elegant pleated midi skirt with high waistband and hidden side zipper. Features flowing silhouette and sophisticated drape. Pairs beautifully with blouses or sweaters.',
      isHot: true,
      isNew: false,
      stock: 41,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: 'XS', stock: 8 }, { value: 'S', stock: 12 }, { value: 'M', stock: 15 }, { value: 'L', stock: 6 }] }
      ]
    },
    {
      id: 'prod-10',
      name: 'Tailored Wool Blazer',
      category: 'Women',
      subCategory: 'Blazers',
      brand: 'Nordic Step',
      price: 229,
      originalPrice: 320,
      rating: 4.7,
      reviewsCount: 334,
      image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1614252368738-3b9e3b5f3d5f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1582619205118-eaa2a41d1c80?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Classic single-breasted blazer in premium wool blend. Features structured shoulders, notched lapels, and functional pockets. Perfect for professional and formal settings.',
      isHot: false,
      isNew: false,
      stock: 28,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: 'XS', stock: 5 }, { value: 'S', stock: 8 }, { value: 'M', stock: 10 }, { value: 'L', stock: 5 }] }
      ]
    },

    // Home Category
    {
      id: 'prod-11',
      name: 'Modern Arc Floor Lamp',
      category: 'Home',
      subCategory: 'Lighting',
      brand: 'Form & Light',
      price: 349,
      rating: 4.6,
      reviewsCount: 189,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Contemporary arc floor lamp with adjustable arm and marble base. Features LED bulb compatibility and dimmer switch. Adds elegant ambient lighting to any space.',
      isHot: true,
      isNew: true,
      stock: 15,
      variants: []
    },
    {
      id: 'prod-12',
      name: 'Ceramic Vase Set',
      category: 'Home',
      subCategory: 'Decor',
      brand: 'Ethereal',
      price: 79,
      rating: 4.3,
      reviewsCount: 223,
      image: 'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1585933646089-68be49067885?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Set of three handcrafted ceramic vases in varying heights. Features matte finish and minimalist design. Perfect for fresh or dried flower arrangements.',
      isHot: false,
      isNew: false,
      stock: 52,
      variants: []
    },
    {
      id: 'prod-13',
      name: 'Premium Scented Candle Collection',
      category: 'Home',
      subCategory: 'Lifestyle',
      brand: 'Aura',
      price: 65,
      originalPrice: 85,
      rating: 4.8,
      reviewsCount: 567,
      image: 'https://i.pinimg.com/1200x/b4/f3/51/b4f35199e3e9c80c9eb4888b16646cfe.jpg',
      images: [
        'https://i.pinimg.com/1200x/b4/f3/51/b4f35199e3e9c80c9eb4888b16646cfe.jpg',
        'https://i.pinimg.com/736x/d1/1d/3e/d11d3e9b8fc23728c6a76b5ba5325766.jpg',
        'https://i.pinimg.com/1200x/8b/05/0c/8b050cce93abafedb051349ae9d52b7a.jpg'
      ],
      description: 'Luxury soy wax candles in three signature scents: Lavender Dream, Ocean Breeze, and Vanilla Woods. Features 50+ hour burn time and elegant glass vessels.',
      isHot: true,
      isNew: false,
      stock: 94,
      variants: []
    },
    {
      id: 'prod-14',
      name: 'Mid-Century Accent Chair',
      category: 'Home',
      subCategory: 'Furniture',
      brand: 'Form & Light',
      price: 549,
      originalPrice: 699,
      rating: 4.7,
      reviewsCount: 156,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Classic mid-century modern accent chair with tapered wooden legs and button-tufted upholstery. Features dense foam cushioning and quality fabric. Statement piece for any room.',
      isHot: false,
      isNew: true,
      stock: 12,
      variants: []
    },
    {
      id: 'prod-15',
      name: 'Stainless Steel Cookware Set',
      category: 'Home',
      subCategory: 'Kitchen',
      brand: 'Premium Line',
      price: 399,
      rating: 4.9,
      reviewsCount: 712,
      image: 'https://images.unsplash.com/photo-1584990347449-39bcf321a4f3?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1584990347449-39bcf321a4f3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1565082750982-09f2a03c98bf?auto=format&fit=crop&w=800&q=80'
      ],
      description: '12-piece professional-grade stainless steel cookware set. Features tri-ply construction, stay-cool handles, and induction compatibility. Includes fry pans, sauce pans, and stock pot.',
      isHot: true,
      isNew: false,
      stock: 27,
      variants: []
    },

    // Electronics Category
    {
      id: 'prod-16',
      name: 'Wireless Noise-Cancelling Headphones',
      category: 'Electronics',
      subCategory: 'Audio',
      brand: 'Acoustic Plus',
      price: 279,
      originalPrice: 349,
      rating: 4.8,
      reviewsCount: 892,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1545127398-14699f92334b?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Premium over-ear headphones with active noise cancellation and 30-hour battery life. Features adaptive sound control, quick charging, and plush memory foam ear cushions.',
      isHot: true,
      isNew: true,
      stock: 67,
      variants: []
    },
    {
      id: 'prod-17',
      name: 'Smart Fitness Watch',
      category: 'Electronics',
      subCategory: 'Wearables',
      brand: 'Chronos',
      price: 199,
      rating: 4.5,
      reviewsCount: 534,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Advanced fitness tracker with heart rate monitoring, GPS, and sleep tracking. Features water resistance, 7-day battery life, and smartphone notifications.',
      isHot: false,
      isNew: false,
      stock: 83,
      variants: []
    },
    {
      id: 'prod-18',
      name: 'Ultra-Slim Laptop 15"',
      category: 'Electronics',
      subCategory: 'Laptops',
      brand: 'GreenTech',
      price: 1299,
      originalPrice: 1599,
      rating: 4.7,
      reviewsCount: 445,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Powerful 15-inch laptop with Intel Core i7, 16GB RAM, and 512GB SSD. Features Full HD display, backlit keyboard, and all-day battery life. Perfect for work and creativity.',
      isHot: true,
      isNew: true,
      stock: 19,
      variants: []
    },
    {
      id: 'prod-19',
      name: 'Wireless Gaming Mouse',
      category: 'Electronics',
      subCategory: 'Gaming',
      brand: 'Velox',
      price: 89,
      rating: 4.6,
      reviewsCount: 678,
      image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'High-precision wireless gaming mouse with 16,000 DPI sensor and customizable RGB lighting. Features programmable buttons, ergonomic design, and 70-hour battery life.',
      isHot: false,
      isNew: false,
      stock: 125,
      variants: []
    },
    {
      id: 'prod-20',
      name: 'Smart Home Hub',
      category: 'Electronics',
      subCategory: 'Smart Home',
      brand: 'GreenTech',
      price: 129,
      originalPrice: 179,
      rating: 4.4,
      reviewsCount: 356,
      image: 'https://images.unsplash.com/photo-1558089687-e5c7d3fd0f7e?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1558089687-e5c7d3fd0f7e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1592921870789-04563d55041c?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Central control hub for all your smart home devices. Features voice assistant integration, touchscreen display, and supports 100+ compatible devices.',
      isHot: true,
      isNew: true,
      stock: 44,
      variants: []
    },

    // Footwear Category
    {
      id: 'prod-21',
      name: 'Classic Leather Loafers',
      category: 'Footwear',
      subCategory: 'Shoes',
      brand: 'Nordic Step',
      price: 159,
      rating: 4.5,
      reviewsCount: 289,
      image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1614252368770-5a1d4f7d61a4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1478186014654-d0c7a04c663b?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Handcrafted genuine leather loafers with cushioned insole and rubber sole. Features timeless penny loafer design. Perfect for business casual or smart casual occasions.',
      isHot: false,
      isNew: false,
      stock: 58,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: '7', stock: 10 }, { value: '8', stock: 15 }, { value: '9', stock: 18 }, { value: '10', stock: 15 }] }
      ]
    },
    {
      id: 'prod-22',
      name: 'Chelsea Ankle Boots',
      category: 'Footwear',
      subCategory: 'Boots',
      brand: 'Urban Shell',
      price: 189,
      originalPrice: 245,
      rating: 4.7,
      reviewsCount: 412,
      image: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1605733513597-a72b5fa50e3d?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Premium suede Chelsea boots with elastic side panels and pull tabs. Features durable leather lining and non-slip sole. Versatile style that elevates any outfit.',
      isHot: true,
      isNew: true,
      stock: 36,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: '7', stock: 8 }, { value: '8', stock: 10 }, { value: '9', stock: 12 }, { value: '10', stock: 6 }] }
      ]
    },
    {
      id: 'prod-23',
      name: 'Strappy Summer Sandals',
      category: 'Footwear',
      subCategory: 'Sandals',
      brand: 'Aura',
      price: 69,
      rating: 4.3,
      reviewsCount: 234,
      image: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1596702812652-b1e0b1e8b543?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Elegant strappy sandals with adjustable ankle strap and cushioned footbed. Features metallic finish and low heel. Perfect for warm weather and summer occasions.',
      isHot: false,
      isNew: false,
      stock: 76,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: '6', stock: 18 }, { value: '7', stock: 20 }, { value: '8', stock: 22 }, { value: '9', stock: 16 }] }
      ]
    },
    {
      id: 'prod-24',
      name: 'Retro Basketball Sneakers',
      category: 'Footwear',
      subCategory: 'Sneakers',
      brand: 'Velox',
      price: 145,
      rating: 4.6,
      reviewsCount: 589,
      image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Classic high-top basketball sneakers with premium leather upper and iconic colorway. Features ankle support, padded collar, and vintage-inspired design.',
      isHot: true,
      isNew: false,
      stock: 91,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: '8', stock: 20 }, { value: '9', stock: 25 }, { value: '10', stock: 28 }, { value: '11', stock: 18 }] }
      ]
    },

    // Accessories Category
    {
      id: 'prod-25',
      name: 'Minimalist Crossbody Bag',
      category: 'Accessories',
      subCategory: 'Bags',
      brand: 'Nomad',
      price: 119,
      originalPrice: 155,
      rating: 4.6,
      reviewsCount: 367,
      image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1564422170194-896b89110ef8?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Sleek leather crossbody bag with adjustable strap and magnetic closure. Features multiple compartments and gold-tone hardware. Perfect size for everyday essentials.',
      isHot: false,
      isNew: true,
      stock: 64,
      variants: []
    },
    {
      id: 'prod-26',
      name: 'Gold Layered Necklace Set',
      category: 'Accessories',
      subCategory: 'Jewelry',
      brand: 'Ethereal',
      price: 49,
      rating: 4.4,
      reviewsCount: 445,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Delicate 3-piece layered necklace set in 18k gold plating. Features varying chain lengths with pendant details. Hypoallergenic and tarnish-resistant.',
      isHot: true,
      isNew: false,
      stock: 112,
      variants: []
    },
    {
      id: 'prod-27',
      name: 'Wide Brim Fedora Hat',
      category: 'Accessories',
      subCategory: 'Hats',
      brand: 'Urban Shell',
      price: 59,
      rating: 4.2,
      reviewsCount: 178,
      image: 'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Wool felt fedora with wide brim and grosgrain ribbon band. Features water-resistant finish and adjustable inner band. Adds sophistication to any outfit.',
      isHot: false,
      isNew: false,
      stock: 47,
      variants: []
    },
    {
      id: 'prod-28',
      name: 'Automatic Mechanical Watch',
      category: 'Accessories',
      subCategory: 'Watches',
      brand: 'Chronos',
      price: 449,
      originalPrice: 599,
      rating: 4.8,
      reviewsCount: 523,
      image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1587836374062-d60746f6c6bc?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Swiss-inspired automatic watch with exhibition case back and sapphire crystal. Features stainless steel case, leather strap, and 42mm diameter. Water resistant to 50m.',
      isHot: true,
      isNew: true,
      stock: 23,
      variants: []
    },
    {
      id: 'prod-29',
      name: 'Leather Card Holder Wallet',
      category: 'Accessories',
      subCategory: 'Bags',
      brand: 'Nomad',
      price: 45,
      rating: 4.5,
      reviewsCount: 612,
      image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Slim genuine leather card holder with RFID blocking technology. Features 6 card slots and center cash pocket. Compact design fits perfectly in any pocket.',
      isHot: false,
      isNew: false,
      stock: 134,
      variants: []
    },

    // Additional Products
    {
      id: 'prod-30',
      name: 'Merino Wool Base Layer',
      category: 'Men',
      subCategory: 'Basics',
      brand: 'Soft Touch',
      price: 75,
      rating: 4.7,
      reviewsCount: 298,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1594938384831-4c0d8c0c8cf7?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Ultra-soft merino wool base layer with moisture-wicking properties. Features flatlock seams and odor-resistant fabric. Perfect for layering in cold weather or outdoor activities.',
      isHot: false,
      isNew: false,
      stock: 87,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: 'S', stock: 20 }, { value: 'M', stock: 30 }, { value: 'L', stock: 25 }, { value: 'XL', stock: 12 }] }
      ]
    },
    {
      id: 'prod-31',
      name: 'Performance Yoga Leggings',
      category: 'Men',
      subCategory: 'Activewear',
      brand: 'Velox',
      price: 68,
      originalPrice: 89,
      rating: 4.6,
      reviewsCount: 756,
      image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'High-waisted compression leggings with four-way stretch fabric. Features moisture-wicking technology, hidden pocket, and squat-proof material. Perfect for yoga, running, or gym.',
      isHot: true,
      isNew: true,
      stock: 103,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: 'XS', stock: 20 }, { value: 'S', stock: 30 }, { value: 'M', stock: 35 }, { value: 'L', stock: 18 }] }
      ]
    },
    {
      id: 'prod-32',
      name: 'Bamboo Bedding Set',
      category: 'Home',
      subCategory: 'Lifestyle',
      brand: 'GreenTech',
      price: 159,
      rating: 4.8,
      reviewsCount: 434,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1615800098779-1be32e60cca3?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Eco-friendly bamboo bed sheet set including fitted sheet, flat sheet, and two pillowcases. Features silky-soft texture, breathable fabric, and temperature regulation properties.',
      isHot: false,
      isNew: false,
      stock: 71,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: 'Queen', stock: 35 }, { value: 'King', stock: 36 }] }
      ]
    },
    {
      id: 'prod-33',
      name: 'Portable Bluetooth Speaker',
      category: 'Electronics',
      subCategory: 'Audio',
      brand: 'Acoustic Plus',
      price: 89,
      rating: 4.5,
      reviewsCount: 821,
      image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Waterproof portable speaker with 360-degree sound and 20-hour battery life. Features USB-C charging, built-in microphone, and durable rubberized exterior. Perfect for outdoor adventures.',
      isHot: true,
      isNew: false,
      stock: 142,
      variants: []
    },
    {
      id: 'prod-34',
      name: 'Polarized Aviator Sunglasses',
      category: 'Accessories',
      subCategory: 'Jewelry',
      brand: 'Premium Line',
      price: 129,
      originalPrice: 189,
      rating: 4.6,
      reviewsCount: 389,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Classic aviator sunglasses with polarized lenses and metal frame. Features 100% UV protection, spring hinges, and includes protective case. Timeless style for any face shape.',
      isHot: false,
      isNew: true,
      stock: 96,
      variants: []
    },
    {
      id: 'prod-35',
      name: 'Insulated Water Bottle',
      category: 'Accessories',
      subCategory: 'Bags',
      brand: 'GreenTech',
      price: 35,
      rating: 4.7,
      reviewsCount: 1023,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1603774619791-0a5360f07780?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Double-wall vacuum insulated stainless steel water bottle keeps drinks cold for 24 hours or hot for 12 hours. Features leak-proof lid, wide mouth opening, and BPA-free materials.',
      isHot: true,
      isNew: false,
      stock: 187,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: '18oz', stock: 60 }, { value: '24oz', stock: 80 }, { value: '32oz', stock: 47 }] }
      ]
    },

    // Additional 15 Products
    {
      id: 'prod-36',
      name: 'Quilted Puffer Jacket',
      category: 'Women',
      subCategory: 'Outerwear',
      brand: 'Urban Shell',
      price: 199,
      originalPrice: 275,
      rating: 4.7,
      reviewsCount: 345,
      image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Lightweight quilted puffer jacket with water-resistant finish and adjustable hood. Features side zip pockets, elastic cuffs, and premium down-alternative fill for warmth without bulk.',
      isHot: true,
      isNew: true,
      stock: 48,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: 'XS', stock: 10 }, { value: 'S', stock: 15 }, { value: 'M', stock: 15 }, { value: 'L', stock: 8 }] }
      ]
    },
    {
      id: 'prod-37',
      name: 'Mechanical Gaming Keyboard',
      category: 'Electronics',
      subCategory: 'Gaming',
      brand: 'Velox',
      price: 149,
      rating: 4.8,
      reviewsCount: 892,
      image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1560762484-813fc97650a0?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'RGB mechanical gaming keyboard with hot-swappable switches and programmable keys. Features aircraft-grade aluminum frame, detachable USB-C cable, and customizable per-key lighting.',
      isHot: true,
      isNew: false,
      stock: 67,
      variants: []
    },
    {
      id: 'prod-38',
      name: 'Ceramic Non-Stick Pan Set',
      category: 'Home',
      subCategory: 'Kitchen',
      brand: 'Premium Line',
      price: 129,
      originalPrice: 179,
      rating: 4.6,
      reviewsCount: 523,
      image: 'https://images.unsplash.com/photo-1565082750982-09f2a03c98bf?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1565082750982-09f2a03c98bf?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Three-piece ceramic non-stick frying pan set in 8", 10", and 12" sizes. Features eco-friendly coating, ergonomic soft-grip handles, and oven-safe up to 350°F. PFOA and PTFE free.',
      isHot: false,
      isNew: true,
      stock: 54,
      variants: []
    },
    {
      id: 'prod-39',
      name: 'Leather Belt with Silver Buckle',
      category: 'Men',
      subCategory: 'Accessories',
      brand: 'Nordic Step',
      price: 55,
      rating: 4.4,
      reviewsCount: 267,
      image: 'https://images.unsplash.com/photo-1624222247344-550fb60583dd?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1624222247344-550fb60583dd?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Full-grain leather dress belt with polished silver buckle. Features 1.5" width, single prong closure, and reinforced stitching. Available in multiple waist sizes for perfect fit.',
      isHot: false,
      isNew: false,
      stock: 94,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: '32', stock: 20 }, { value: '34', stock: 25 }, { value: '36', stock: 30 }, { value: '38', stock: 19 }] }
      ]
    },
    {
      id: 'prod-40',
      name: 'Velvet Throw Pillows Set',
      category: 'Home',
      subCategory: 'Decor',
      brand: 'Ethereal',
      price: 59,
      rating: 4.5,
      reviewsCount: 412,
      image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1601122994968-47e76cd8d129?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Set of two luxury velvet throw pillows with hidden zipper and plush down-alternative fill. Available in rich jewel tones. Adds instant elegance to any sofa or bed.',
      isHot: true,
      isNew: false,
      stock: 78,
      variants: []
    },
    {
      id: 'prod-41',
      name: 'Wireless Earbuds Pro',
      category: 'Electronics',
      subCategory: 'Audio',
      brand: 'Acoustic Plus',
      price: 179,
      originalPrice: 229,
      rating: 4.7,
      reviewsCount: 1245,
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1598331668826-20cecc596b86?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'True wireless earbuds with active noise cancellation and transparency mode. Features 6-hour battery life, wireless charging case, and IPX4 water resistance. Crystal-clear call quality.',
      isHot: true,
      isNew: true,
      stock: 103,
      variants: []
    },
    {
      id: 'prod-42',
      name: 'Yoga Mat with Carrying Strap',
      category: 'Men',
      subCategory: 'Activewear',
      brand: 'Velox',
      price: 45,
      rating: 4.6,
      reviewsCount: 678,
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Premium 6mm thick yoga mat with non-slip surface and alignment markers. Made from eco-friendly TPE material. Includes adjustable carrying strap and storage bag.',
      isHot: false,
      isNew: false,
      stock: 127,
      variants: []
    },
    {
      id: 'prod-43',
      name: 'Designer Sunglasses - Cat Eye',
      category: 'Women',
      subCategory: 'Accessories',
      brand: 'Aura',
      price: 139,
      rating: 4.5,
      reviewsCount: 289,
      image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Retro-inspired cat eye sunglasses with gradient lenses and acetate frames. Features UV400 protection, spring hinges, and includes premium hard case and cleaning cloth.',
      isHot: false,
      isNew: true,
      stock: 61,
      variants: []
    },
    {
      id: 'prod-44',
      name: 'Stainless Steel French Press',
      category: 'Home',
      subCategory: 'Kitchen',
      brand: 'Form & Light',
      price: 49,
      originalPrice: 69,
      rating: 4.7,
      reviewsCount: 834,
      image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Double-wall insulated French press coffee maker with 4-level filtration system. Keeps coffee hot for hours. 34oz capacity brews 4 cups. Dishwasher safe and rust-resistant.',
      isHot: true,
      isNew: false,
      stock: 86,
      variants: []
    },
    {
      id: 'prod-45',
      name: 'Slim Fit Polo Shirt',
      category: 'Men',
      subCategory: 'Shirts',
      brand: 'Premium Line',
      price: 65,
      rating: 4.4,
      reviewsCount: 456,
      image: 'https://images.unsplash.com/photo-1626497764746-6dc36546b388?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1626497764746-6dc36546b388?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1618886614638-80e3c103d31a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1598032895188-80e8be8eaa7a?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Classic slim-fit polo shirt in breathable pique cotton. Features ribbed collar, three-button placket, and short sleeves. Perfect for smart casual occasions or golf.',
      isHot: false,
      isNew: false,
      stock: 112,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: 'S', stock: 25 }, { value: 'M', stock: 35 }, { value: 'L', stock: 30 }, { value: 'XL', stock: 22 }] }
      ]
    },
    {
      id: 'prod-46',
      name: 'Minimalist Wall Clock',
      category: 'Home',
      subCategory: 'Decor',
      brand: 'Form & Light',
      price: 89,
      rating: 4.6,
      reviewsCount: 234,
      image: 'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1616628188540-925618b98318?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1509663954872-2973e8d7279f?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Scandinavian-inspired wall clock with silent sweep movement and wooden frame. Features contrasting hands and minimalist dial. 12-inch diameter adds modern touch to any room.',
      isHot: false,
      isNew: true,
      stock: 43,
      variants: []
    },
    {
      id: 'prod-47',
      name: 'Smart LED Light Bulbs 4-Pack',
      category: 'Electronics',
      subCategory: 'Smart Home',
      brand: 'GreenTech',
      price: 69,
      originalPrice: 95,
      rating: 4.5,
      reviewsCount: 923,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'WiFi-enabled smart LED bulbs with 16 million color options and voice control compatibility. Features scheduling, dimming, and energy monitoring. Works with Alexa and Google Home.',
      isHot: true,
      isNew: true,
      stock: 156,
      variants: []
    },
    {
      id: 'prod-48',
      name: 'Ankle Strap Block Heels',
      category: 'Footwear',
      subCategory: 'Shoes',
      brand: 'Aura',
      price: 99,
      rating: 4.4,
      reviewsCount: 378,
      image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1596702812652-b1e0b1e8b543?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Elegant ankle strap heels with 3-inch block heel and cushioned insole. Features adjustable buckle closure and pointed toe. Versatile style perfect for office or evening wear.',
      isHot: false,
      isNew: false,
      stock: 68,
      variants: [
        { id: 'v1', name: 'Size', options: [{ value: '6', stock: 15 }, { value: '7', stock: 18 }, { value: '8', stock: 20 }, { value: '9', stock: 15 }] }
      ]
    },
    {
      id: 'prod-49',
      name: 'Canvas Tote Bag',
      category: 'Accessories',
      subCategory: 'Bags',
      brand: 'Nomad',
      price: 39,
      rating: 4.3,
      reviewsCount: 612,
      image: 'https://images.unsplash.com/photo-1590393294468-f45ef6b4977a?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1590393294468-f45ef6b4977a?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1564422170194-896b89110ef8?auto=format&fit=crop&w=800&q=80'
      ],
      description: 'Spacious canvas tote bag with leather handles and interior zip pocket. Made from durable heavyweight cotton canvas. Perfect for shopping, beach trips, or everyday use.',
      isHot: false,
      isNew: false,
      stock: 145,
      variants: []
    },
    {
      id: 'prod-50',
      name: '4K Webcam with Ring Light',
      category: 'Electronics',
      subCategory: 'Laptops',
      brand: 'GreenTech',
      price: 119,
      originalPrice: 159,
      rating: 4.7,
      reviewsCount: 567,
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80',
      images: [
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1529335764857-3ebf888f57cc?auto=format&fit=crop&w=800&q=80'
      ],
      description: '4K ultra HD webcam with built-in adjustable ring light and dual microphones. Features autofocus, wide-angle lens, and plug-and-play USB connectivity. Perfect for streaming and video calls.',
      isHot: true,
      isNew: true,
      stock: 74,
      variants: []
    }
  ];
};
export const PRODUCTS = generateMockProducts();

export const CATEGORIES = [
  { name: 'Men', image: 'https://i.pinimg.com/736x/b5/a8/17/b5a817bdec915aee05890c60b9312d92.jpg' },
  { name: 'Women', image: 'https://i.pinimg.com/736x/36/4a/84/364a84292c8351fa5e9c4166c179bb63.jpg' },
  { name: 'Electronics', image: 'https://i.pinimg.com/736x/60/53/2f/60532f215514eb6e5068ec232e1428c1.jpg' },
  { name: 'Home', image: 'https://i.pinimg.com/736x/cf/c2/ab/cfc2ab7a43eb30275fd986aacc1a867b.jpg' },
  { name: 'Accessories', image: 'https://i.pinimg.com/1200x/47/f8/3f/47f83f67f63f85f216d9abb27088fa49.jpg' }
];
