import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  url: "https://instagrampet.vercel.app/graphql",
});
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.querySelector("#root")
);

// {
//   "version": 2,
//   "alias": ["petgram-api-rest"],
//   "builds": [
//     {
//       "use": "@vercel/static-build",
//       "src": "package.json"
//     }
//   ],
//   "routes": [
//     {
//       "src": "(.*).js",
//       "dest": "/$1.js"
//     },
//     {
//       "src": "(.*).json",
//       "dest": "/$1.json"
//     },
//     {
//       "src": "/.*",
//       "dest": "./index.html"
//     }
//   ]
// }
