import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './store/redusers/root-reducer';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';



const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
