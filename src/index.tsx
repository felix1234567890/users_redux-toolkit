import React from "react";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./store";
import { I18nextProvider } from "react-i18next";
import { createRoot } from 'react-dom/client';
import i18n from "./i18n";

const domNode = document.getElementById('root') 
if (!domNode) throw new Error('Failed to find the root element');
const root = createRoot(domNode)
root.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <App />
    </Provider>
  </I18nextProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
