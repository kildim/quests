import {createAction} from '@reduxjs/toolkit';

export const setIsBookingModalOpened = createAction(
  'orders/setIsBookingModalOpened', (isBookingModalOpened: boolean) => ({
    payload: isBookingModalOpened,
  })
)

export type AppIntegrityActions =
  ReturnType<typeof setIsBookingModalOpened>
