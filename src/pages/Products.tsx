
import { useState, useMemo } from "react";
import MainLayout from "@/components/layout/MainLayout";
import ProductCard from "@/components/products/ProductCard";
import ProductFilters from "@/components/products/ProductFilters";
import { Button } from "@/components/ui/button";
import { Package, Plus } from "lucide-react";
import { products } from "@/data/mockData";
import { Product } from "@/types/inventory";

const Products = () => {
  const [filters, setFilters] = useState({
    category: "All",
    supplier: "All",
    searchQuery: "",
    stockStatus: "all" as "all" | "in-stock" | "low-stock" | "out-of-stock"
  });

  // Filter products based on current filter settings
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Filter by search query
      if (
        filters.searchQuery &&
        !product.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
        !product.sku.toLowerCase().includes(filters.searchQuery.toLowerCase())
      ) {
        return false;
      }

      // Filter by category
      if (filters.category !== "All" && product.category !== filters.category) {
        return false;
      }

      // Filter by supplier
      if (filters.supplier !== "All" && product.supplier !== filters.supplier) {
        return false;
      }

      // Filter by stock status
      if (filters.stockStatus === "in-stock" && product.stockQuantity <= 0) {
        return false;
      }
      if (filters.stockStatus === "low-stock" && product.stockQuantity > product.reorderLevel) {
        return false;
      }
      if (filters.stockStatus === "out-of-stock" && product.stockQuantity > 0) {
        return false;
      }

      return true;
    });
  }, [filters]);

  // Calculate inventory value for filtered products
  const inventoryValue = useMemo(() => {
    return filteredProducts.reduce(
      (total, product) => total + product.stockQuantity * product.cost,
      0
    );
  }, [filteredProducts]);

  const handleFilterChange = (newFilters: {
    category: string;
    supplier: string;
    searchQuery: string;
    stockStatus: "all" | "in-stock" | "low-stock" | "out-of-stock";
  }) => {
    setFilters(newFilters);
  };

  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-muted-foreground">
            Manage your inventory products
          </p>
        </div>
        <Button className="mt-4 md:mt-0">
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/4">
          <ProductFilters onFilterChange={handleFilterChange} />
        </div>

        <div className="w-full lg:w-3/4">
          <div className="bg-white p-4 rounded-lg border shadow-sm mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <Package className="h-5 w-5 text-muted-foreground" />
                <span>
                  Showing <strong>{filteredProducts.length}</strong> products
                </span>
              </div>
              <div className="text-sm">
                Total Inventory Value:{" "}
                <span className="font-medium">
                  ${inventoryValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center bg-white p-8 rounded-lg border shadow-sm text-center">
              <Package className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No Products Found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your filters or add a new product
              </p>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Product
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Products;
