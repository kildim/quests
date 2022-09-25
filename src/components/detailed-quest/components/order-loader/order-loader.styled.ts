import styled from 'styled-components';
import {Button} from '../../../common/common';

const BlockLayer = styled.div`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: ${({ theme }) => theme.color.eclipse};
`;

const Modal = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;

  max-height: 100%;
  width: 480px;
  padding: 32px;
  padding-bottom: 50px;
  overflow-y: auto;
  overflow-x: hidden;

  background-color: ${({ theme }) => theme.color.nero2};
  transform: translateX(-50%) translateY(-50%);
  border-radius: 3px;
`;

const ModalText = styled.p`
   @keyframes load {
     0%{
         opacity: 0.08;
         filter: blur(5px);
         letter-spacing: 3px;
     }
     100%{
     }
  }
  text-align: center;
  font-size: ${({ theme }) => theme.font.formsHeading};
  line-height: 120%;
  font-weight: 800;
  color: ${({ theme }) => theme.color.tangerine};
  animation: load 1.2s infinite 0s ease-in-out;
  animation-direction: alternate;
  text-shadow: 0 0 1px white;
`;

const CancelFetching = styled(Button).attrs({ type: 'button' })`
  margin: 0 auto;
  margin-top: 55px;
  margin-bottom: 21px;
  padding-top: 15px;
  padding-right: 34px;
  padding-bottom: 16px;
  padding-left: 34px;

  font-size: ${({ theme }) => theme.font.semibase};
  line-height: 16px;
  letter-spacing: 0.03em;
  background-color: ${({ theme }) => theme.color.pinkSwan};

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.color.gray};
  }
`;

export {
  BlockLayer,
  Modal,
  ModalText,
  CancelFetching,
};
