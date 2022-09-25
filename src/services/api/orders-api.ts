import {ThunkAction} from '@reduxjs/toolkit';
import {RootState} from '../../index';
import {RootReducerActions} from '../../store/redusers/root-reducer';
import {API_URL} from '../../constants/urls';
import {checkResponse} from '../../helpers/check-response';
import {setIsOrderFetching} from '../../store/redusers/orders-reducer/orders-actions';
import {Order} from '../../types/order';
import {toast} from 'react-toastify';

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
    .then(() => {
      dispatch(setIsOrderFetching(false));
      toast.success(`Заказ успешно отправлен. Перезвоним в ближайшее время`, {
        position: toast.POSITION.TOP_CENTER
      })
    })
    .catch((error) => {
      toast.error(`При попытке загрузки квестов возникла ошибка ${error.status} ${error.statusText}`, {
        position: toast.POSITION.TOP_CENTER
      })
    })
    .finally(() => dispatch(setIsOrderFetching(false)))
}
