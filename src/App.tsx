import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <header>
          <p>hello</p>
        </header>
      </div>
    </QueryClientProvider>
  );
};

export default App;
