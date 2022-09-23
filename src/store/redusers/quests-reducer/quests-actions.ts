import {createAction} from '@reduxjs/toolkit';
import {Quest} from '../../../types/quest';

export const loadQuests = createAction(
  'quests/loadQuests', (quests: Quest []) => ({
    payload: quests,
  }),
);

export const setIsQuestsLoading = createAction(
  'quests/setIsQuestsLoading', (isLoading: boolean) => ({
    payload: isLoading,
  })
)

export type QuestsActions =
  ReturnType<typeof loadQuests>
  | ReturnType<typeof setIsQuestsLoading>;
