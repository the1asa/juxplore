import React, { Fragment } from 'react';
import styled from 'styled-components';
import Header from '../header';
import { mediaQueries } from '../../styles/mediaQueries';

export default (props) => {
  const { children, pageName } = props;

  return (
    <Fragment>
      <Header />
      <Container pageName={pageName}>{children}</Container>
    </Fragment>
  );
};

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
