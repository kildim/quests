import {ThunkAction} from '@reduxjs/toolkit';
import {RootState} from '../../index';
import {RootReducerActions} from '../../store/redusers/root-reducer';
import {loadQuests, setIsQuestsLoading} from '../../store/redusers/quests-reducer/quests-actions';
import {checkResponse} from '../../helpers/check-response';
import {API_URL} from '../../config/urls';

const fetchQuests = (): ThunkAction<void, RootState, unknown, RootReducerActions> => (dispatch, _getState) => {
  dispatch(setIsQuestsLoading(true));
  fetch(`${API_URL}/quests`)
    .then(checkResponse)
    .then((res) => dispatch(loadQuests(res.data)))
    .catch((error) => {
      // dispatch(showMessage(error))
    })
    .finally(() => dispatch(setIsQuestsLoading(false)))
}