import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = () => {
  const user = useSelector((state) => state.user);
  return user.isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
