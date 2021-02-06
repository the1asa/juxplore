import React from 'react';
import styled from 'styled-components';
import { ModalProvider, BaseModalBackground } from 'styled-react-modal';

import Header from '../header';
import { mediaQueries } from '../../styles/mediaQueries';

export default (props) => {
  const { children, pageName } = props;

  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <Header />
      <Container id="page-container" pageName={pageName}>{children}</Container>
    </ModalProvider>
  );
};

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  background-color: rgba(0, 0, 0, 0.85);
  transition: all 0.3s ease-in-out;
  z-index: 100;
`;

const Container = styled.div`
  margin: 3rem auto;
  max-width: 85%;

  ${mediaQueries('xsm')` max-width: 85%; `};
  ${mediaQueries('med')` max-width: 75%; `};
  ${mediaQueries('lg')` max-width: 45%; `};
  ${mediaQueries('xlg')` max-width: 45%; `};


  ${props => props.pageName === 'about'
  && `
    max-width: 85%;
    ${mediaQueries('lg')` max-width: 55%; `};
    ${mediaQueries('xlg')` max-width: 55%; `};
  `};
`;
