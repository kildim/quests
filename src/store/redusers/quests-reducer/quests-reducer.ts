import { createReducer } from '@reduxjs/toolkit';
import {Quest} from '../../../types/quest';
import {loadQuests, setIsQuestsLoading} from './quests-actions';

type QuestsReducer = {
  quests: Quest [],
  isQuestsLoading: boolean,
}

const initialState: QuestsReducer = {
  quests: [],
  isQuestsLoading: true,
};

export const questsReducer = createReducer<QuestsReducer>(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload;
    })
    .addCase(setIsQuestsLoading, (state, action) => {
      state.isQuestsLoading = action.payload
    })
})
