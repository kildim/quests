import {createAction} from '@reduxjs/toolkit';
import {Quest} from '../../../types/quest';

export const loadQuests = createAction(
  'quests/loadQuests', (quests: Quest []) => ({
    payload: {
      films: quests,
    },
  }),
);
