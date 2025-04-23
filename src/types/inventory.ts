
export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  supplier: string;
  price: number;
  cost: number;
  stockQuantity: number;
  reorderLevel: number;
  lastReorderDate: string;
  location: string;
  salesCount: number;
  imageUrl?: string;
  description?: string;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
}

export interface Supplier {
  id: string;
  name: string;
  contactName?: string;
  email?: string;
  phone?: string;
}

export interface InventorySummary {
  totalProducts: number;
  totalValue: number;
  lowStockCount: number;
  topSellingItems: Product[];
  totalCategories: number;
  totalSuppliers: number;
}
