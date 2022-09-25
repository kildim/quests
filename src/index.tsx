import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './store/redusers/root-reducer';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {ToastContainer, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export type RootState = ReturnType<typeof store.getState>;

render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer transition={Zoom}/>
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
