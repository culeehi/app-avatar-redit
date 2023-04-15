import { createRoot } from 'react-dom/client';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
   <Provider store={store}>
      <App />
   </Provider>,
);
// document.getElementById('root'),
