import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureStore from './src/redux/store/storeConfig';
import App from "./src/app";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,document.getElementById("App")
);