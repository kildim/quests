import { createReducer } from '@reduxjs/toolkit';
import {Quest} from '../../../types/quest';
import {loadQuests, setFilter, setIsQuestsLoading} from './quests-actions';
import {Filter} from '../../../types/filter';
import {getFilterByValue} from '../../../helpers/get-filter-by-value';
import {Filters} from '../../../constants/filters';

type QuestsReducer = {
  quests: Quest [],
  isQuestsLoading: boolean,
  filter: Filter;
}

const initialState: QuestsReducer = {
  quests: [],
  isQuestsLoading: true,
  filter: getFilterByValue(Filters.all),
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
