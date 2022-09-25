import {ThunkAction} from '@reduxjs/toolkit';
import {RootState} from '../../index';
import {RootReducerActions} from '../../store/redusers/root-reducer';
import {loadQuests, setIsQuestsLoading} from '../../store/redusers/quests-reducer/quests-actions';
import {API_URL} from '../../constants/urls';
import {checkResponse} from '../../helpers/check-response';
import {setIsOrderFetching} from '../../store/redusers/orders-reducer/orders-actions';
import {Order} from '../../types/order';

export const fetchOrder = (order: Order): ThunkAction<void, RootState, unknown, RootReducerActions> => (dispatch, _getState) => {
  dispatch(setIsOrderFetching(true));

  const options = {
    method: 'POST',
    body: JSON.stringify(order),
    headers: {
      'Content-Type': "application/json;charset=utf-8"
    }
  };
  fetch(`${API_URL}/orders`, options)
    .then(checkResponse)
    .then((res) => {
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => dispatch(setIsOrderFetching(false)))
}
