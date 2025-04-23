
import { Product, Category, Supplier } from '../types/inventory';

// Categories
export const categories: Category[] = [
  { id: '1', name: 'Electronics', description: 'Electronic devices and accessories' },
  { id: '2', name: 'Office Supplies', description: 'Office supplies and accessories' },
  { id: '3', name: 'Furniture', description: 'Office and home furniture' },
  { id: '4', name: 'Kitchen', description: 'Kitchen appliances and accessories' },
  { id: '5', name: 'Clothing', description: 'Apparel and fashion items' },
];

// Suppliers
export const suppliers: Supplier[] = [
  { id: '1', name: 'TechSupply Inc.', contactName: 'John Smith', email: 'john@techsupply.com', phone: '555-1234' },
  { id: '2', name: 'Office World', contactName: 'Sarah Johnson', email: 'sarah@officeworld.com', phone: '555-5678' },
  { id: '3', name: 'Furniture Plus', contactName: 'Mark Davis', email: 'mark@furnitureplus.com', phone: '555-9012' },
  { id: '4', name: 'Kitchen Essentials', contactName: 'Emily Wilson', email: 'emily@kitchenessentials.com', phone: '555-3456' },
  { id: '5', name: 'Fashion Unlimited', contactName: 'Alex Rodriguez', email: 'alex@fashionunltd.com', phone: '555-7890' },
];

// Products
export const products: Product[] = [
  {
    id: '1',
    name: 'Laptop Pro 15',
    sku: 'LP-001',
    category: 'Electronics',
    supplier: 'TechSupply Inc.',
    price: 1299.99,
    cost: 899.99,
    stockQuantity: 15,
    reorderLevel: 5,
    lastReorderDate: '2023-02-15',
    location: 'Warehouse A',
    salesCount: 42,
    imageUrl: 'https://placehold.co/100x100?text=Laptop',
    description: 'High-performance laptop with 15" display',
  },
  {
    id: '2',
    name: 'Wireless Mouse',
    sku: 'WM-002',
    category: 'Electronics',
    supplier: 'TechSupply Inc.',
    price: 24.99,
    cost: 12.50,
    stockQuantity: 35,
    reorderLevel: 10,
    lastReorderDate: '2023-03-10',
    location: 'Warehouse A',
    salesCount: 87,
    imageUrl: 'https://placehold.co/100x100?text=Mouse',
    description: 'Ergonomic wireless mouse',
  },
  {
    id: '3',
    name: 'Office Chair Deluxe',
    sku: 'OC-003',
    category: 'Furniture',
    supplier: 'Furniture Plus',
    price: 199.99,
    cost: 120.00,
    stockQuantity: 8,
    reorderLevel: 5,
    lastReorderDate: '2023-01-25',
    location: 'Warehouse B',
    salesCount: 12,
    imageUrl: 'https://placehold.co/100x100?text=Chair',
    description: 'Adjustable office chair with lumbar support',
  },
  {
    id: '4',
    name: 'Standing Desk',
    sku: 'SD-004',
    category: 'Furniture',
    supplier: 'Furniture Plus',
    price: 349.99,
    cost: 220.00,
    stockQuantity: 3,
    reorderLevel: 5,
    lastReorderDate: '2023-02-20',
    location: 'Warehouse B',
    salesCount: 8,
    imageUrl: 'https://placehold.co/100x100?text=Desk',
    description: 'Electric adjustable standing desk',
  },
  {
    id: '5',
    name: 'Premium Notebook',
    sku: 'PN-005',
    category: 'Office Supplies',
    supplier: 'Office World',
    price: 12.99,
    cost: 5.25,
    stockQuantity: 150,
    reorderLevel: 50,
    lastReorderDate: '2023-04-05',
    location: 'Warehouse A',
    salesCount: 210,
    imageUrl: 'https://placehold.co/100x100?text=Notebook',
    description: 'Premium quality hardcover notebook',
  },
  {
    id: '6',
    name: 'Wireless Keyboard',
    sku: 'WK-006',
    category: 'Electronics',
    supplier: 'TechSupply Inc.',
    price: 49.99,
    cost: 25.00,
    stockQuantity: 22,
    reorderLevel: 8,
    lastReorderDate: '2023-03-15',
    location: 'Warehouse A',
    salesCount: 54,
    imageUrl: 'https://placehold.co/100x100?text=Keyboard',
    description: 'Mechanical wireless keyboard',
  },
  {
    id: '7',
    name: 'Espresso Machine',
    sku: 'EM-007',
    category: 'Kitchen',
    supplier: 'Kitchen Essentials',
    price: 299.99,
    cost: 175.00,
    stockQuantity: 7,
    reorderLevel: 3,
    lastReorderDate: '2023-04-10',
    location: 'Warehouse C',
    salesCount: 19,
    imageUrl: 'https://placehold.co/100x100?text=Espresso',
    description: 'Semi-automatic espresso machine',
  },
  {
    id: '8',
    name: 'Business Suit',
    sku: 'BS-008',
    category: 'Clothing',
    supplier: 'Fashion Unlimited',
    price: 249.99,
    cost: 120.00,
    stockQuantity: 12,
    reorderLevel: 4,
    lastReorderDate: '2023-03-25',
    location: 'Warehouse D',
    salesCount: 15,
    imageUrl: 'https://placehold.co/100x100?text=Suit',
    description: 'Professional business suit',
  },
  {
    id: '9',
    name: 'Whiteboard',
    sku: 'WB-009',
    category: 'Office Supplies',
    supplier: 'Office World',
    price: 79.99,
    cost: 40.00,
    stockQuantity: 14,
    reorderLevel: 5,
    lastReorderDate: '2023-02-28',
    location: 'Warehouse B',
    salesCount: 28,
    imageUrl: 'https://placehold.co/100x100?text=Whiteboard',
    description: 'Large magnetic whiteboard',
  },
  {
    id: '10',
    name: 'Monitor 27"',
    sku: 'MN-010',
    category: 'Electronics',
    supplier: 'TechSupply Inc.',
    price: 249.99,
    cost: 150.00,
    stockQuantity: 4,
    reorderLevel: 5,
    lastReorderDate: '2023-04-02',
    location: 'Warehouse A',
    salesCount: 32,
    imageUrl: 'https://placehold.co/100x100?text=Monitor',
    description: '27-inch 4K monitor',
  },
  {
    id: '11',
    name: 'Coffee Table',
    sku: 'CT-011',
    category: 'Furniture',
    supplier: 'Furniture Plus',
    price: 149.99,
    cost: 85.00,
    stockQuantity: 6,
    reorderLevel: 3,
    lastReorderDate: '2023-03-20',
    location: 'Warehouse B',
    salesCount: 9,
    imageUrl: 'https://placehold.co/100x100?text=Table',
    description: 'Modern glass coffee table',
  },
  {
    id: '12',
    name: 'Stainless Water Bottle',
    sku: 'SWB-012',
    category: 'Kitchen',
    supplier: 'Kitchen Essentials',
    price: 24.99,
    cost: 10.00,
    stockQuantity: 45,
    reorderLevel: 15,
    lastReorderDate: '2023-04-15',
    location: 'Warehouse C',
    salesCount: 76,
    imageUrl: 'https://placehold.co/100x100?text=Bottle',
    description: 'Insulated stainless steel water bottle',
  },
];

// Helper functions to get inventory data
export const getInventorySummary = () => {
  const totalProducts = products.length;
  const totalValue = products.reduce((acc, product) => acc + (product.stockQuantity * product.cost), 0);
  const lowStockCount = products.filter(p => p.stockQuantity <= p.reorderLevel).length;
  const topSellingItems = [...products].sort((a, b) => b.salesCount - a.salesCount).slice(0, 5);
  const totalCategories = categories.length;
  const totalSuppliers = suppliers.length;

  return {
    totalProducts,
    totalValue,
    lowStockCount,
    topSellingItems,
    totalCategories,
    totalSuppliers
  };
};

export const getLowStockProducts = () => {
  return products.filter(p => p.stockQuantity <= p.reorderLevel);
};

export const getTopSellingProducts = (limit = 5) => {
  return [...products].sort((a, b) => b.salesCount - a.salesCount).slice(0, limit);
};

export const getProductsByCategory = (categoryName: string) => {
  return categoryName === 'All' 
    ? products 
    : products.filter(p => p.category === categoryName);
};

export const getProductsBySupplier = (supplierName: string) => {
  return supplierName === 'All' 
    ? products 
    : products.filter(p => p.supplier === supplierName);
};
