import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import React from "react";

function useAuth() {
  const email = useSelector((state: RootState) => state.user.email);

  if (email.length > 0) {
    return true;
  } else {
    return false;
  }
}

export default useAuth;
