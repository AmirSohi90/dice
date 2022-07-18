import React from 'react';
import apis from './apis/apis';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  const res = apis.getEventsByVenue('Public Records');
  console.log(res.then((res) => res));

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
