import React from "react";
import { QueryClient, QueryClientProvider, setLogger } from "react-query";

export const withQueryProvider = (component: React.ReactNode) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false
      }
    }
  });

  return <QueryClientProvider client={queryClient}>{component}</QueryClientProvider>;
};
