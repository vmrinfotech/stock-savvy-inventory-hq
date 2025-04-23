
import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  description?: string;
  change?: {
    value: number;
    trend: "up" | "down" | "neutral";
  };
}

const StatsCard = ({ title, value, icon, description, change }: StatsCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-5 w-5 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {typeof value === "number" && title.includes("Value") 
            ? `$${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` 
            : value}
        </div>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        {change && (
          <div className="flex items-center mt-1">
            <span
              className={`text-xs ${
                change.trend === "up"
                  ? "text-success"
                  : change.trend === "down"
                  ? "text-destructive"
                  : "text-muted-foreground"
              }`}
            >
              {change.trend === "up" ? "↑" : change.trend === "down" ? "↓" : "→"}{" "}
              {change.value}%
            </span>
            <span className="text-xs text-muted-foreground ml-1">from last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
