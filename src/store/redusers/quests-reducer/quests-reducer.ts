import { createReducer } from '@reduxjs/toolkit';
import {Quest} from '../../../types/quest';
import {loadQuests, setFilter, setIsQuestsLoading} from './quests-actions';
import {Filters} from '../../../constants/filters';
import {FilterTitle} from '../../../types/filtersTitle';

type QuestsReducer = {
  quests: Quest [],
  isQuestsLoading: boolean,
  filter: FilterTitle;
}

const initialState: QuestsReducer = {
  quests: [],
  isQuestsLoading: true,
  filter: Filters.all,
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
