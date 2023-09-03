"use client";
import AuthProvider from "./AuthProvider";
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
          <ServicesProvider>{children}</ServicesProvider>
        </AuthProvider>
      </QueryClientProvider>
    </SearchProvider>
  );
};

export default Providers;
