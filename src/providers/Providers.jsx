"use client";

const { default: AuthProvider } = require("./AuthProvider");

const Providers = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
