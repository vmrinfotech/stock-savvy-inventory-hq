
import { useState } from "react";
import { Link } from "react-router-dom";
import { Bell, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { getLowStockProducts } from "@/data/mockData";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lowStockItems = getLowStockProducts();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-primary">Stock Savvy</span>
            </Link>
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                to="/"
                className="text-gray-900 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Dashboard
              </Link>
              <Link
                to="/products"
                className="text-gray-500 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Products
              </Link>
              <Link
                to="/categories"
                className="text-gray-500 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Categories
              </Link>
              <Link
                to="/suppliers"
                className="text-gray-500 hover:text-primary inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                Suppliers
              </Link>
            </nav>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  {lowStockItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {lowStockItems.length}
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72">
                <div className="py-2 px-4 font-medium border-b">
                  Alerts ({lowStockItems.length})
                </div>
                {lowStockItems.length === 0 ? (
                  <DropdownMenuItem className="py-2">
                    No alerts at this time
                  </DropdownMenuItem>
                ) : (
                  lowStockItems.map((item) => (
                    <DropdownMenuItem key={item.id} className="py-2">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Stock: {item.stockQuantity} (below reorder level of {item.reorderLevel})
                        </p>
                      </div>
                    </DropdownMenuItem>
                  ))
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="bg-primary-50 border-primary-500 text-primary-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/products"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/categories"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              to="/suppliers"
              className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Suppliers
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
