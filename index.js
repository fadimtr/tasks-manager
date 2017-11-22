import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducers from './src/redux/reducers/index';
import App from "./src/app";

let store = createStore(appReducers)

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,document.body
);