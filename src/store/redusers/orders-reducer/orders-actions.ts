import {createAction} from '@reduxjs/toolkit';
import {Order} from '../../../types/order';

export const setIsOrderFetching = createAction(
  'orders/setIsQuestsLoading', (isOrderFetching: boolean) => ({
    payload: isOrderFetching,
  })
)
//
// export const fetchOrder = createAction(
//   'orders/fetchOrder', (order: Order) => ({
//     payload: order,
//   }),
// );

export type OrdersActions =
  ReturnType<typeof setIsOrderFetching>
  // | ReturnType<typeof fetchOrder>
