import {combineReducers} from '@reduxjs/toolkit';
import {questsReducer} from './quests-reducer/quests-reducer';
import {QuestsActions} from './quests-reducer/quests-actions';
import {ordersReducer} from './orders-reducer/orders-reducer';
import {OrdersActions} from './orders-reducer/orders-actions';

export enum NameSpace {
  Quests = 'QUESTS',
  Orders = 'ORDERS'
}

export const rootReducer = combineReducers({
  [NameSpace.Quests]: questsReducer,
  [NameSpace.Orders]: ordersReducer,
});

export type RootReducerType = ReturnType<typeof rootReducer>;
export type RootReducerActions = QuestsActions | OrdersActions;
