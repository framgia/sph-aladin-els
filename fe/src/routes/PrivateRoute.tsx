import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import useAuth from "../utils/useAuth";

export default function PrivateRoute({ children }: any) {
<<<<<<< HEAD
  const auth = useSelector((state: RootState) => state.user.isSignedIn);
  console.log(auth);
  return auth ? children : <Navigate to="/login" />;
=======
  const auth = useAuth();
  return auth ? children : <Navigate to="/signup" />;
>>>>>>> 1738d8b (Fix/file structure (#12))
}
