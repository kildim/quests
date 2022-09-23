import {combineReducers} from '@reduxjs/toolkit';
import {questsReducer} from './quests-reducer/quests-reducer';
import {QuestsActions} from './quests-reducer/quests-actions';

export enum NameSpace {
  Quests = 'QUESTS',
}

export const rootReducer = combineReducers({
  [NameSpace.Quests]: questsReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
export type RootReducerActions = QuestsActions;
