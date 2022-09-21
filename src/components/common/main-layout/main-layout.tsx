import { Footer, Header } from 'components/common/common';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode,
}

const MainLayout = ({ children }: Props) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default MainLayout;
