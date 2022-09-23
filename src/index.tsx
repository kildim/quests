import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './store/redusers/root-reducer';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {QuestsActions} from './store/redusers/quests-reducer/quests-actions';



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
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
