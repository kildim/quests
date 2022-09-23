import {createAction} from '@reduxjs/toolkit';
import {Quest} from '../../../types/quest';
import {Filter} from '../../../types/filter';

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

export const setFilter = createAction(
  'quest/setFilter', (filter: Filter) => ({
    payload: filter
  })
)

export type QuestsActions =
  ReturnType<typeof loadQuests>
  | ReturnType<typeof setIsQuestsLoading>;
