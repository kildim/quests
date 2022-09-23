import { createReducer } from '@reduxjs/toolkit';
import {Quest} from '../../../types/quest';
import {loadQuests} from './quests-actions';

type QuestsReducer = {
  quests: Quest [],
}

const initialState: QuestsReducer = {
  quests: [],
};

export const questsReducer = createReducer<QuestsReducer>(initialState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
      state.quests = action.payload.films;
    })
})
