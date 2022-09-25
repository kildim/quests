import logo from 'assets/img/logo.svg';
import * as S from './header.styled';
import {useLocation, useRouteMatch} from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  console.log(location);

  return (
  <S.StyledHeader>
    <S.HeaderWrapper>
      <S.Logo>
        <S.Image src={logo} alt="Логотип Escape Room" width="134" height="50" />
      </S.Logo>

      <S.Navigation>
        <S.Links>
          <S.LinkItem>
            <S.Link $isActiveLink={/^\/$/.test(location.pathname)} to="/">
              Квесты
            </S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link $isActiveLink={/^\/novice/.test(location.pathname)} to="/novice">Новичкам</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link $isActiveLink={/^\/feedback/.test(location.pathname)} to="/feedback">Отзывы</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link $isActiveLink={/^\/promotion/.test(location.pathname)} to="/promotion">Акции</S.Link>
          </S.LinkItem>

          <S.LinkItem>
            <S.Link $isActiveLink={/^\/contacts/.test(location.pathname)} to="/contacts">Контакты</S.Link>
          </S.LinkItem>
        </S.Links>
      </S.Navigation>
      <S.Phone href="tel:88003335599">8 (800) 333-55-99</S.Phone>
    </S.HeaderWrapper>
  </S.StyledHeader>
)};

export default Header;
