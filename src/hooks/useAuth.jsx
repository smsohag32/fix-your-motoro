import AuthContext from "@/context/AuthContext";
import { useContext } from "react";

const useAuth = () => {
  const auth = useContext(AuthContext);
  const isClient = typeof window === "undefined";

  if (!isClient && !auth) return {};

  if (!auth) {
    throw new Error("You must warp your ");
  }

  return auth;
};

export default useAuth;
