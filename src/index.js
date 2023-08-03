import React, { createContext } from "react";
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

const logger =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    // logger code
    console.log("ACTION_TYPE = ", action.type);
    if (typeof action === "function") {
      // then call the function and pass `dispatch` and `getState` as arguments
      return action(dispatch, getState);
    }
    return next(action);
  };

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("store", store);
console.log("BEFORE state", store.getState());

// store.dispatch({
//   type: "Add_Movie",
//   movies: [{ title: "sayyad" }],
// });

// console.log("AFTER state", store.getState());

// CREATED THE PRIVATE PROVIDER CLASS
class Provider extends React.Component {
  render() {
    const { store } = this.props;
    return (
      <StoreContext.Provider value={store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

export const StoreContext = createContext();

// const connectedAppComponent = connect(callback)(App);

export function connect(callback) {
  return function (Component) {
    class ConnectedCpmponent extends React.Component {
      constructor(props) {
        super(props);
        this.unSubscribe = this.props.store.subscribe(() => this.forceUpdate());
      }

      componentWillUnmount() {
        this.unSubscribe();
      }
      render() {
        // the store will be getting from the ConnectedCpmponentWrapper
        const { store } = this.props;
        const state = store.getState();
        const dataToBeStored = callback(state); //callback returns the required state props
        return (
          // {...dataToBeStored} will work like movies = state.movie, search = state.search
          <Component {...dataToBeStored} dispatch={store.dispatch} />
        );
      }
    }

    class ConnectedCpmponentWrapper extends React.Component {
      render() {
        return (
          <StoreContext.Consumer>
            {(store) => <ConnectedCpmponent store={store} />}
          </StoreContext.Consumer>
        );
      }
    }

    return ConnectedCpmponentWrapper;
  };
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
