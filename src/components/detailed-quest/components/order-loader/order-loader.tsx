import * as S from './order-loader.styled';
import React from 'react';
import {useDispatch} from 'react-redux';
import {setIsOrderFetching} from '../../../../store/redusers/orders-reducer/orders-actions';

const OrderLoader = () => {
  const dispatch = useDispatch();
  const handleCancelFetchingClick = () => {
    dispatch(setIsOrderFetching(false))
  }

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalText>Отправка заявки ...</S.ModalText>
        <S.CancelFetching type="button" onClick={handleCancelFetchingClick}>Отменить</S.CancelFetching>
      </S.Modal>
    </S.BlockLayer>
  )
};

export default OrderLoader;
