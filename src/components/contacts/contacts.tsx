import {MainLayout, PageTitle, PageSubtext} from 'components/common/common';
import * as S from './contacts.styled';
import {YMaps, Map, ZoomControl, Placemark} from 'react-yandex-maps';

const Contacts = () => (
  <MainLayout>
    <S.Main>
      <S.ContentWrapper>
        <S.PageHeading>
          <PageTitle>Контакты</PageTitle>
          <PageSubtext>квесты в Санкт-Петербурге</PageSubtext>
        </S.PageHeading>

        <S.Contacts>
          <S.ContactsList>
            <S.ContactTitle>Адрес</S.ContactTitle>
            <S.ContactValue>
              <S.ContactAddress>
                Санкт-Петербург,
                <br/>
                Набережная реки Карповка, д 5
              </S.ContactAddress>
            </S.ContactValue>

            <S.ContactTitle>Режим работы</S.ContactTitle>
            <S.ContactValue>Ежедневно, с 9:00 до 20:00</S.ContactValue>

            <S.ContactTitle>Телефон</S.ContactTitle>
            <S.ContactValue>
              <S.ContactLink href="tel:8 (800) 333-55-99">
                8 (800) 333-55-99
              </S.ContactLink>
            </S.ContactValue>

            <S.ContactTitle>E-mail</S.ContactTitle>
            <S.ContactValue>
              <S.ContactLink href="mailto:info@escape-room.ru">
                info@escape-room.ru
              </S.ContactLink>
            </S.ContactValue>
          </S.ContactsList>
          <S.ContactsMap>
            <YMaps>
              <Map defaultState={{center: [59.968137, 30.316272], zoom: 16,}} style={{width: '649px', height: '336px'}}>
                <ZoomControl />
                <Placemark
                  geometry={[59.968137, 30.316272]}
                  options= {{
                    iconLayout: 'default#image',
                    iconImageHref: 'img/marker.png',
                    iconImageSize: [48, 61],
                    iconImageOffset: [0, -61]
                  }}
                />
              </Map>
            </YMaps>
          </S.ContactsMap>

        </S.Contacts>
      </S.ContentWrapper>
    </S.Main>
  </MainLayout>
);

export default Contacts;
