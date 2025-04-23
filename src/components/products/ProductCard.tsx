
import { Product } from "@/types/inventory";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // Calculate if the product is low on stock
  const isLowStock = product.stockQuantity <= product.reorderLevel;

  return (
    <Card className="h-full flex flex-col">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={product.imageUrl || "https://placehold.co/300x300?text=No+Image"}
          alt={product.name}
          className="object-cover w-full h-full"
        />
        {isLowStock && (
          <Badge className="absolute top-2 right-2 bg-destructive">Low Stock</Badge>
        )}
      </div>
      <CardContent className="pt-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-lg">{product.name}</h3>
          <span className="text-sm font-medium">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-2">SKU: {product.sku}</p>
        <div className="flex flex-wrap gap-1 mb-2">
          <Badge variant="outline">{product.category}</Badge>
          <Badge variant="secondary">{product.supplier}</Badge>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-muted-foreground">Stock</p>
            <p className={`font-medium ${isLowStock ? "text-destructive" : ""}`}>
              {product.stockQuantity}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground">Reorder At</p>
            <p className="font-medium">{product.reorderLevel}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex justify-between w-full">
          <Button variant="outline" size="sm">Edit</Button>
          {isLowStock && <Button size="sm">Reorder</Button>}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
