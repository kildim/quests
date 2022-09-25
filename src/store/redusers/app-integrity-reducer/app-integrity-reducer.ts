import {createReducer} from '@reduxjs/toolkit';
import {setIsBookingModalOpened} from './app-integrity-actions';


type OrdersReducer = {
  isBookingModalOpened: boolean,
}

const initialState = {
  isBookingModalOpened: false
}

export const appIntegrityReducer = createReducer<OrdersReducer>(initialState, (builder) => {
  builder
    .addCase(setIsBookingModalOpened, (state, action) => {
      state.isBookingModalOpened = action.payload;
    })
})
