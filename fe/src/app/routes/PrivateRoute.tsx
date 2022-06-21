import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import useAuth from "../utils/useAuth";

export default function PrivateRoute({ children }: any) {
  const auth = useSelector((state: RootState) => state.user.isSignedIn);
  console.log(auth);
  return auth ? children : <Navigate to="/login" />;
}
