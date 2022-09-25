import {ThunkDispatch} from '@reduxjs/toolkit';
import {RootReducerType} from '../store/redusers/root-reducer';
import {QuestsActions} from '../store/redusers/quests-reducer/quests-actions';

export type ThunkAppDispatch = ThunkDispatch<
  RootReducerType,
  null,
  QuestsActions
  >;
