import {NameSpace, RootReducerType} from '../root-reducer';
import {Filter} from '../../../types/filter';

export const getIsQuestsLoading = (state: RootReducerType): boolean =>
  state[NameSpace.Quests].isQuestsLoading;

export const getFilter = (state: RootReducerType): Filter =>
  state[NameSpace.Quests].filter;
