import * as S from './booking-modal.styled';
import {ReactComponent as IconClose} from 'assets/img/icon-close.svg';
import React, {ChangeEvent, FormEvent, SyntheticEvent, useState} from 'react';
import {useHistory} from 'react-router-dom';

type Props = {
  closeOrderCB: () => void;
}

const BookingModal = (props: Props) => {
  const {closeOrderCB} = props;
  const [name, setName] = useState('');
  const [isLegal, setIsLegal] = useState(false);
  const [phone, setPhone] = useState('');
  const history = useHistory();

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    console.log(name);
    // evt.preventDefault();
  }
  const handleNameChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setName(target.value);
  }
  const handleCloseBtnClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    closeOrderCB();
  }

  return (
    <S.BlockLayer>
      <S.Modal>
        <S.ModalCloseBtn onClick={handleCloseBtnClick}>
          <IconClose width="16" height="16"/>
          <S.ModalCloseLabel>Закрыть окно</S.ModalCloseLabel>
        </S.ModalCloseBtn>
        <S.ModalTitle>Оставить заявку</S.ModalTitle>
        <S.BookingForm onSubmit={handleFormSubmit}
          // action="https://echo.htmlacademy.ru"
          // action="http://localhost:3001/orders"
          // method="post"
          // id="booking-form"
        >
          <S.BookingField>
            <S.BookingLabel htmlFor="booking-name">Ваше Имя</S.BookingLabel>
            <S.BookingInput
              type="text"
              id="booking-name"
              name="booking-name"
              placeholder="Имя"
              onChange={handleNameChange}
              value={name}
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
              required
            />
          </S.BookingField>
          <S.BookingSubmit type="submit">Отправить заявку</S.BookingSubmit>
          <S.BookingCheckboxWrapper>
            <S.BookingCheckboxInput
              type="checkbox"
              id="booking-legal"
              name="booking-legal"
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
