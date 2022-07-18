import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { EventsResultsPage } from "./components/EventResultsPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <header>
          <p>hello</p>
        </header>
          <EventsResultsPage />
      </div>
    </QueryClientProvider>
  );
};

export default App;
