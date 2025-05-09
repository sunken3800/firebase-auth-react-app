import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading auth state...</div>;
  return user ? children : <Navigate to="/login" />;
}
export default PrivateRoute;
