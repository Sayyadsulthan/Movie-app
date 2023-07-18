import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, applyMiddleware } from "redux";

import App from "./components/App";
import rootReducer from "./reducers";

// funtion logger(obj, next, action)
// logger(obj)(next)(action)
//obj = { dispatch: (), getState:()}
/*
const logger = function logger({ dispatch, getState }) {
  return function (next) {
    return function (action) {
      console.log("ACTION TYPE = ", action.type);
      // console.log("ACTION =", action);
      next(action);
    };
  };
};
*/

const logger = ({ dispatch, getState }) =>(next) =>(action) => {
  // logger code
    console.log("ACTION_TYPE = ", action.type);
    next(action);
  };

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("store", store);
console.log("BEFORE state", store.getState());

// store.dispatch({
//   type: "Add_Movie",
//   movies: [{ title: "sayyad" }],
// });

// console.log("AFTER state", store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>
);
