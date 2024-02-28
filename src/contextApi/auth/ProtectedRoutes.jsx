import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "./AuthContext";

const ProtectedRoutes = () => {
  const { authToken } = useAuthContext();

  return authToken ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;
