import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";
import { AppContextProvider } from "./context/AppContext";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://instagrampet-api.vercel.app/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <AppContextProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AppContextProvider>,
  document.querySelector("#root")
);
