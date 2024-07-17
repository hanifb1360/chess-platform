import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import AppRoutes from "./Routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  </ApolloProvider>
);

export default App;
