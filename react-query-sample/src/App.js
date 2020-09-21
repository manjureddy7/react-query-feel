import React from 'react';

// Setup React-Query
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools'

import Movies from './QueryComps/Movies';

const queryCache = new QueryCache();

function App() {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Movies />
      <ReactQueryDevtools initialIsOpen={false} />
    </ReactQueryCacheProvider>
  );
}

export default App;
