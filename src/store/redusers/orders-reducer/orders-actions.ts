import {createAction} from '@reduxjs/toolkit';

export const setIsOrderFetching = createAction(
  'orders/setIsQuestsLoading', (isOrderFetching: boolean) => ({
    payload: isOrderFetching,
  })
)

export type OrdersActions =
  ReturnType<typeof setIsOrderFetching>
