import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import client from "./apollo/client";
import store from "./redux/store";
import theme from "./theme";
import Routes from "./Routes";

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  </ApolloProvider>
);

export default App;
