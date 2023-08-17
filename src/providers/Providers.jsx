"use client";
import AuthProvider from "./AuthProvider";
import ServicesProvider from "./ServicesProvider";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <ServicesProvider>{children}</ServicesProvider>
    </AuthProvider>
  );
};

export default Providers;
