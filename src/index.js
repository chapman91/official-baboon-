// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./components/common/WalletButton/Context.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Render application using the root instance
// The subsequent code between the render method says what should be rendered
// Browser router keeps track of routes in application
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Context>
      <App />
      </Context>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
