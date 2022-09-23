import {combineReducers} from '@reduxjs/toolkit';
import {questsReducer} from './quests-reducer/quests-reducer';

export enum NameSpace {
  Quests = 'QUESTS',
}

export const rootReducer = combineReducers({
  [NameSpace.Quests]: questsReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
