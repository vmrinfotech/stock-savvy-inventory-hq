
import { useState } from "react";
import { Filter } from "lucide-react";
import { categories, suppliers } from "@/data/mockData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface ProductFiltersProps {
  onFilterChange: (filters: {
    category: string;
    supplier: string;
    searchQuery: string;
    stockStatus: "all" | "in-stock" | "low-stock" | "out-of-stock";
  }) => void;
}

const ProductFilters = ({ onFilterChange }: ProductFiltersProps) => {
  const [category, setCategory] = useState<string>("All");
  const [supplier, setSupplier] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [stockStatus, setStockStatus] = useState<"all" | "in-stock" | "low-stock" | "out-of-stock">("all");

  const handleFilterChange = () => {
    onFilterChange({
      category,
      supplier,
      searchQuery,
      stockStatus,
    });
  };

  const handleReset = () => {
    setCategory("All");
    setSupplier("All");
    setSearchQuery("");
    setStockStatus("all");
    onFilterChange({
      category: "All",
      supplier: "All",
      searchQuery: "",
      stockStatus: "all",
    });
  };

  return (
    <div className="space-y-4 bg-white p-4 rounded-lg border shadow-sm">
      <div className="flex items-center gap-2 pb-2 border-b">
        <Filter className="h-5 w-5" />
        <h2 className="font-medium">Filter Products</h2>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="search">Search</Label>
          <Input
            id="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select
            value={category}
            onValueChange={(value) => setCategory(value)}
          >
            <SelectTrigger id="category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Categories</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.name}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="supplier">Supplier</Label>
          <Select
            value={supplier}
            onValueChange={(value) => setSupplier(value)}
          >
            <SelectTrigger id="supplier">
              <SelectValue placeholder="Select supplier" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Suppliers</SelectItem>
              {suppliers.map((supp) => (
                <SelectItem key={supp.id} value={supp.name}>
                  {supp.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Stock Status</Label>
          <RadioGroup
            value={stockStatus}
            onValueChange={(value: "all" | "in-stock" | "low-stock" | "out-of-stock") => 
              setStockStatus(value)
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="in-stock" id="in-stock" />
              <Label htmlFor="in-stock">In Stock</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="low-stock" id="low-stock" />
              <Label htmlFor="low-stock">Low Stock</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="out-of-stock" id="out-of-stock" />
              <Label htmlFor="out-of-stock">Out of Stock</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <Button onClick={handleFilterChange}>Apply Filters</Button>
          <Button variant="outline" onClick={handleReset}>
            Reset Filters
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
