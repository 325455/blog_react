import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "normalize.css";
import "./assets/css/reset.less";
import "highlight.js/styles/default.min.css";
import store from "./store/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>

  // </React.StrictMode>
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);
