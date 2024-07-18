import React from "react";
import { RelayEnvironmentProvider } from "react-relay";
import RelayEnvironment from "./RelayEnvironment";
import AppRoutes from "./Routes";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

const App: React.FC = () => (
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  </RelayEnvironmentProvider>
);

export default App;
