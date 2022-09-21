import { ReactNode } from 'react';
import * as S from './page-title.styled';

interface Props {
  children?: ReactNode
}

const PageTitle = ({ children, ...props }: Props) => (
  <S.PageTitle {...props}>{children}</S.PageTitle>
);

export default PageTitle;
