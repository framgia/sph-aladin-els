import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import useAuth from "../utils/useAuth";

export default function PrivateRoute({ children }: any) {
  const auth = useAuth();
  return auth ? children : <Navigate to="/signup" />;
}
