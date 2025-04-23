
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { suppliers } from "@/data/mockData";

const Suppliers = () => {
  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold">Suppliers</h1>
          <p className="text-muted-foreground">
            Manage your product suppliers
          </p>
        </div>
        <Button className="mt-4 md:mt-0">
          <Plus className="mr-2 h-4 w-4" /> Add Supplier
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {suppliers.map((supplier) => (
          <Card key={supplier.id}>
            <CardHeader>
              <CardTitle>{supplier.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {supplier.contactName && (
                  <div>
                    <span className="text-sm text-muted-foreground">Contact:</span>{" "}
                    <span>{supplier.contactName}</span>
                  </div>
                )}
                {supplier.email && (
                  <div>
                    <span className="text-sm text-muted-foreground">Email:</span>{" "}
                    <span>{supplier.email}</span>
                  </div>
                )}
                {supplier.phone && (
                  <div>
                    <span className="text-sm text-muted-foreground">Phone:</span>{" "}
                    <span>{supplier.phone}</span>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex justify-end space-x-2 w-full">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="secondary" size="sm">
                  Order
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </MainLayout>
  );
};

export default Suppliers;
