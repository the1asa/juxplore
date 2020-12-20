import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PageContainer from '../components/pageContainer';

export default () => (
  <PageContainer pageName="about">
    <Title><b>Impractical Curiosity</b></Title>
    <p>
      <i>
        &quot;People say: idle curiosity. The one thing that curiosity cannot be is idle.&quot;
      </i>
      {'\n'}
      - Leo Roston
    </p>
    <p>
      Welcome to my tiny corner of the internet. I created this site to share my thoughts and projects - and to explore new interests, however impractical.
    </p>
    <p>
      I currently work as a software engineer, you can read more about how that happened
      {' '}
      <b><Link to="../articles/a-tale-of-two-brains/">here</Link></b>
      .
    </p>
    <p>
      Contacts welcome
      {' '}
      <b><a href="mailto: asa@impracticalcuriosity.com">here</a></b>
      .
    </p>
  </PageContainer>
);

const Title = styled.h1`
  font-family: "Ubuntu", sans-serif;
  padding-bottom: 0.5rem;
`;
