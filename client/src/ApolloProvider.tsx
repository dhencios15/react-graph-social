import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import App from './App';

const cache: InMemoryCache = new InMemoryCache({});

const client = new ApolloClient({
  cache,
  uri: 'http://localhost:5000/',
  // headers: {
  //   authorization: localStorage.getItem('token') || '',
  //   'client-name': 'react-graph',
  //   'client-version': '1.0.0',
  // },
  connectToDevTools: true,
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
