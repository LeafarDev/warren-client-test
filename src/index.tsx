import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { render } from 'react-dom';
import { persistor, store } from './core/store/configureStore';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { App } from './app';

const rootElement = document.getElementById('root');

render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ToastContainer autoClose={3000}/>
      <App/>
    </PersistGate>
  </Provider>,
  rootElement
);
