import {createReducer} from '@reduxjs/toolkit';
import {setIsOrderFetching} from './orders-actions';

type OrdersReducer = {
  isOrderFetching: boolean,
}

const initialState = {
  isOrderFetching: false
}

export const ordersReducer = createReducer<OrdersReducer>(initialState, (builder) => {
  builder
    .addCase(setIsOrderFetching, (state, action) => {
      state.isOrderFetching = action.payload;
    })
})
