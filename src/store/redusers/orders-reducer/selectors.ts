import {NameSpace, RootReducerType} from '../root-reducer';
import {Filter} from '../../../types/filter';
import {Quest} from '../../../types/quest';

export const getIsOrderFetching = (state: RootReducerType): boolean =>
  state[NameSpace.Orders].isOrderFetching;
