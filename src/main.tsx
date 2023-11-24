import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {ThemeProvider} from 'styled-components'
import { Provider } from "react-redux";

import "@/styles/index.less";

import store from "@/store";
import App from "./App.tsx";

import theme from "@/mixin/theme";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
