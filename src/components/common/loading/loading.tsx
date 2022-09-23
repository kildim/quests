import * as S from './loading.styled';
import {ReactComponent as IconClose} from 'assets/img/icon-close.svg';

const Loading = () => (
      <S.BlockLayer>
        <S.Modal>
          <S.ModalText>Loading ...</S.ModalText>
        </S.Modal>
      </S.BlockLayer>
);

export default Loading;
