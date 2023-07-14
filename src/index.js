import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

import App from "./components/App";
import movie from "./reducers";

const store = createStore(movie);
console.log("store",store)
console.log("state",store.getState())

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
