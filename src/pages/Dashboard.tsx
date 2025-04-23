
import { ChartBar, Package, PackagePlus, TrendingUp } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import StatsCard from "@/components/dashboard/StatsCard";
import LowStockAlert from "@/components/dashboard/LowStockAlert";
import TopSellingProducts from "@/components/dashboard/TopSellingProducts";
import { getInventorySummary, getLowStockProducts, getTopSellingProducts, products } from "@/data/mockData";

const Dashboard = () => {
  const summary = getInventorySummary();
  const lowStockProducts = getLowStockProducts();
  const topSelling = getTopSellingProducts();

  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Inventory Dashboard</h1>
        <p className="text-muted-foreground">
          Overview of your inventory status and key metrics
        </p>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Products"
          value={summary.totalProducts}
          icon={<Package />}
          change={{ value: 5, trend: "up" }}
        />
        <StatsCard
          title="Inventory Value"
          value={summary.totalValue}
          icon={<ChartBar />}
          change={{ value: 8, trend: "up" }}
        />
        <StatsCard
          title="Low Stock Items"
          value={summary.lowStockCount}
          icon={<PackagePlus />}
          description="Products below reorder level"
          change={{ value: 2, trend: "down" }}
        />
        <StatsCard
          title="Top Seller"
          value={topSelling[0]?.name || "N/A"}
          icon={<TrendingUp />}
          description={`${topSelling[0]?.salesCount || 0} units sold`}
        />
      </div>

      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <LowStockAlert products={products} />
        <TopSellingProducts products={products} />
      </div>
    </MainLayout>
  );
};

export default Dashboard;
