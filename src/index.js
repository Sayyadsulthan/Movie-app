import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";

import App from "./components/App";
import movie from "./reducers";

const store = createStore(movie);
console.log("store", store);
console.log("BEFORE state", store.getState());

store.dispatch({
  type: "Add_Movie",
  movies: [{ title: "sayyad" }],
});

console.log("AFTER state", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
