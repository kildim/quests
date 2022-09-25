import {NameSpace, RootReducerType} from '../root-reducer';

export const getIsOrderFetching = (state: RootReducerType): boolean =>
  state[NameSpace.Orders].isOrderFetching;
