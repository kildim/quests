import {NameSpace, RootReducerType} from '../root-reducer';

export const getIsQuestsLoading = (state: RootReducerType): boolean =>
  state[NameSpace.Quests].isQuestsLoading;
