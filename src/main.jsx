import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "./components/Store/app/store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AnimatePresence mode="wait">
      <Provider store={store}>
        <App />
      </Provider>
    </AnimatePresence>
  </React.StrictMode>
);
