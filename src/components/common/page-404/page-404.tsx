import * as S from './page-404.styled';

const Page404 = () => (
      <S.BlockLayer>
        <S.Modal>
          <S.ModalText>404</S.ModalText>
          <S.ModalText>страница не найдена</S.ModalText>
          <S.Link to="/">
             На Главную страницу
          </S.Link>
        </S.Modal>
      </S.BlockLayer>
);

export default Page404;
