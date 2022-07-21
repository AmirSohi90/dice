import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { EventsResultsPage } from './components/EventResultsPage';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <header></header>
      <EventsResultsPage />
    </QueryClientProvider>
  );
};

export default App;
