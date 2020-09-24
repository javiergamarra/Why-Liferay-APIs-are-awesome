import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8080/o/graphql',
  cache: new InMemoryCache(),
  headers: {"Authorization": "Basic dGVzdEBsaWZlcmF5LmNvbTp0ZXN0"}
});

ReactDOM.render(
  <ApolloProvider client={client}><App/></ApolloProvider>,
  document.getElementById('root'),
);
