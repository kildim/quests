import {NameSpace, RootReducerType} from '../root-reducer';

export const getIsBookingModalOpened = (state: RootReducerType): boolean =>
  state[NameSpace.AppIntegrity].isBookingModalOpened;
