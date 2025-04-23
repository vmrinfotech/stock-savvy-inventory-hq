
import { Navigate } from "react-router-dom";

// Redirect to Dashboard by default
const Index = () => {
  return <Navigate to="/dashboard" replace />;
};

export default Index;
