import {combineReducers} from '@reduxjs/toolkit';
import {questsReducer} from './quests-reducer/quests-reducer';
import {QuestsActions} from './quests-reducer/quests-actions';
import {ordersReducer} from './orders-reducer/orders-reducer';
import {OrdersActions} from './orders-reducer/orders-actions';
import {appIntegrityReducer} from './app-integrity-reducer/app-integrity-reducer';
import {AppIntegrityActions} from './app-integrity-reducer/app-integrity-actions';

export enum NameSpace {
  Quests = 'QUESTS',
  Orders = 'ORDERS',
  AppIntegrity = 'APP_INTEGRITY'
}

export const rootReducer = combineReducers({
  [NameSpace.Quests]: questsReducer,
  [NameSpace.Orders]: ordersReducer,
  [NameSpace.AppIntegrity]: appIntegrityReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
export type RootReducerActions = QuestsActions | OrdersActions | AppIntegrityActions;
