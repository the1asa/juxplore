import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PageContainer from '../components/pageContainer';

export default () => (
  <PageContainer pageName="about">
    <Text>
      <i>
        &quot;People say: idle curiosity. The one thing that curiosity cannot be is idle.&quot;
      </i>
      {'\n'}
      - Leo Roston
    </Text>
    <Text>
      Welcome to my tiny corner of the internet. I created this site to share my thoughts and projects and to explore new interests.
    </Text>
    <Text>
      I currently work as a software engineer, you can read more about how that happened
      {' '}
      <b><Link to="../articles/a-tale-of-two-brains/">here</Link></b>
      .
    </Text>
    <Text>
      Contacts welcome
      {' '}
      <b><a href="mailto: asa@juxplore.com">here</a></b>
      .
    </Text>
  </PageContainer>
);

const Text = styled.p`
  font-size: 2vmin;
`;
