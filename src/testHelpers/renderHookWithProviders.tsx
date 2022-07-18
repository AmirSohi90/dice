import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

export const renderHookWithProviders = (children: React.ReactNode) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
