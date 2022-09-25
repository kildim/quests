import * as S from './booking-modal.styled';
import {ReactComponent as IconClose} from 'assets/img/icon-close.svg';
import React, {ChangeEvent, FormEvent, SyntheticEvent, useState} from 'react';
import {useDispatch, useStore} from 'react-redux';
import {fetchOrder} from '../../../../services/api/orders-api';
import {ThunkAppDispatch} from '../../../../types/thunk-app-dispatch';
import {setIsBookingModalOpened} from '../../../../store/redusers/app-integrity-reducer/app-integrity-actions';

const BookingModal = () => {
  const store = useStore();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [isLegal, setIsLegal] = useState(false);
  const [phone, setPhone] = useState('');
  const [people, setPeople] = useState('');

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    (store.dispatch as ThunkAppDispatch) (fetchOrder(
      {
        name: name,
        peopleCount: parseInt(people),
        phone: phone,
        isLegal: isLegal,
      }
    ));
    evt.preventDefault();
  }
  const handleNameChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setName(target.value);
  }
  const handlePhoneChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setPhone(target.value);
  }
  const handlePeopleChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setPeople(target.value);
  }
  const handleConsentChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setIsLegal(target.value === 'on')
  }
  const handleCloseBtnClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    dispatch(setIsBookingModalOpened(false));
  }

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={handleCloseBtnClick}>
          <IconClose width="16" height="16"/>
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm onSubmit={handleFormSubmit}>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              onChange={handleNameChange}
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-phone">
              Контактный телефон
            </S.BookingLabel>
            <S.BookingInput
              type="tel"
              id="booking-phone"
              name="booking-phone"
              placeholder="Телефон"
              onChange={handlePhoneChange}
              pattern="^[0-9]{10}$"
              required
            />
          </S.BookingField>
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-people">
              Количество участников
            </S.BookingLabel>
            <S.BookingInput
              type="number"
              id="booking-people"
              name="booking-people"
              placeholder="Количество участников"
              onChange={handlePeopleChange}
              min="1"
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
              onChange={handleConsentChange}
              required
            />
            <S.BookingCheckboxLabel
              className="checkbox-label"
              htmlFor="booking-legal"
            >
              <S.BookingCheckboxText>
                Я согласен с{' '}
                <S.BookingLegalLink href="#">
                  правилами обработки персональных данных и пользовательским
                  соглашением
                </S.BookingLegalLink>
              </S.BookingCheckboxText>
            </S.BookingCheckboxLabel>
          </S.BookingCheckboxWrapper>
        </S.BookingForm>
      </S.Modal>
    </S.BlockLayer>
  );
}

export default BookingModal;
