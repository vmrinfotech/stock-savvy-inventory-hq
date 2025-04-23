
import { Package } from "lucide-react";
import { Product } from "@/types/inventory";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface LowStockAlertProps {
  products: Product[];
}

const LowStockAlert = ({ products }: LowStockAlertProps) => {
  // Only show products with quantity below or equal to reorder level
  const lowStockProducts = products.filter(
    (product) => product.stockQuantity <= product.reorderLevel
  );

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium">Low Stock Alerts</CardTitle>
          <span className="bg-warning text-warning-foreground text-xs font-medium px-2.5 py-0.5 rounded">
            {lowStockProducts.length} Items
          </span>
        </div>
      </CardHeader>
      <CardContent>
        {lowStockProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-48 text-center">
            <Package className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">All products have adequate stock levels</p>
          </div>
        ) : (
          <div className="space-y-4">
            {lowStockProducts.map((product) => (
              <div key={product.id} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">SKU: {product.sku}</p>
                  </div>
                  <Button size="sm" variant="outline">
                    Reorder
                  </Button>
                </div>
                <div className="flex items-center space-x-2">
                  <Progress 
                    value={(product.stockQuantity / product.reorderLevel) * 100} 
                    max={100} 
                    className={`${
                      product.stockQuantity < product.reorderLevel / 2
                        ? "bg-destructive/20"
                        : "bg-warning/20"
                    }`}
                  />
                  <span className="text-sm font-medium">
                    {product.stockQuantity}/{product.reorderLevel}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Last reorder: {new Date(product.lastReorderDate).toLocaleDateString()}
                </p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LowStockAlert;
