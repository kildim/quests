import {ThunkAction} from '@reduxjs/toolkit';
import {RootState} from '../../index';
import {RootReducerActions} from '../../store/redusers/root-reducer';
import {loadQuests, setIsQuestsLoading} from '../../store/redusers/quests-reducer/quests-actions';
import {checkResponse} from '../../helpers/check-response';
import {API_URL} from '../../constants/urls';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const fetchQuests = (): ThunkAction<void, RootState, unknown, RootReducerActions> => (dispatch, _getState) => {
  dispatch(setIsQuestsLoading(true));
  fetch(`${API_URL}/quests`)
    .then(checkResponse)
    .then((res) => {
      dispatch(loadQuests(res))
      dispatch(setIsQuestsLoading(false))
    })
    .catch((error) => {
      toast.error(`При попытке загрузки квестов возникла ошибка ${error.status} ${error.statusText}`, {
        position: toast.POSITION.TOP_CENTER
      })
    })
    .finally(() => dispatch(setIsQuestsLoading(false)))
}
