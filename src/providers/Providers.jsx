"use client";
import AuthProvider from "./AuthProvider";
import CartProvider from "./CartProvider";
import SearchProvider from "./SearchProvider";
import ServicesProvider from "./ServicesProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

const Providers = ({ children }) => {
  return (
    <SearchProvider>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <CartProvider>
          <ServicesProvider>{children}</ServicesProvider>
          </CartProvider>
        </AuthProvider>
      </QueryClientProvider>
    </SearchProvider>
  );
};

export default Providers;
