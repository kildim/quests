import { createReducer } from '@reduxjs/toolkit';
import {Quest} from '../../../types/quest';
import {loadQuests, setFilter, setIsQuestsLoading} from './quests-actions';
import {Filter} from '../../../types/filter';
import {Filters} from '../../../constants/filters';

type QuestsReducer = {
  quests: Quest [],
  isQuestsLoading: boolean,
  filter: Filter;
}

console.log(Filters['all']);

const initialState: QuestsReducer = {
  quests: [],
  isQuestsLoading: true,
  filter: Filters['all'],
};

export const questsReducer = createReducer<QuestsReducer>(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(setIsQuestsLoading, (state, action) => {
      state.isQuestsLoading = action.payload;
    })
    .addCase(setFilter, (state, action) => {
      state.filter = action.payload;
    })
})
