
import { TrendingUp } from "lucide-react";
import { Product } from "@/types/inventory";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TopSellingProductsProps {
  products: Product[];
}

const TopSellingProducts = ({ products }: TopSellingProductsProps) => {
  // Sort products by salesCount in descending order and take top 5
  const topProducts = [...products]
    .sort((a, b) => b.salesCount - a.salesCount)
    .slice(0, 5);

  // Calculate highest sales count for relative bar sizing
  const maxSales = Math.max(...topProducts.map(p => p.salesCount));

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Top Selling Products</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topProducts.map((product) => (
            <div key={product.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <h3 className="font-medium">{product.name}</h3>
                <span className="text-sm font-medium">{product.salesCount} sold</span>
              </div>
              <div className="w-full bg-secondary h-2 rounded-full">
                <div
                  className="bg-primary h-2 rounded-full"
                  style={{ width: `${(product.salesCount / maxSales) * 100}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Price: ${product.price.toFixed(2)}</span>
                <span>Stock: {product.stockQuantity}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopSellingProducts;
