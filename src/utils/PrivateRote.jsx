"use client";
import Spinner from "@/components/Spinners/Spinner";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const PrivateRote = ({ children }) => {
  const router = useRouter();
  const { user, loading } = useAuth();
  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return children;
  } else {
    router.replace("/login");
  }

  return;
};

export default PrivateRote;
