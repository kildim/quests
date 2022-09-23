import {NameSpace, RootReducerType} from '../root-reducer';
import {Filter} from '../../../types/filter';
import {Quest} from '../../../types/quest';

export const getIsQuestsLoading = (state: RootReducerType): boolean =>
  state[NameSpace.Quests].isQuestsLoading;

export const getFilter = (state: RootReducerType): Filter =>
  state[NameSpace.Quests].filter;

export const getQuests = (state: RootReducerType): Quest [] =>
  state[NameSpace.Quests].quests;
