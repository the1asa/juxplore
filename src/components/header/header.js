import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';

const ListLink = (props) => {
  const { to, title } = props;
  return (
    <Link to={to}>
      <LinkTitle>{title}</LinkTitle>
    </Link>
  );
};
export default () => (
  <HeaderBorder>
    <HeaderContainer>
      <Link to="/">
        <Title>IC</Title>
      </Link>
      <LinksContainer>
        <ListLink to="/" title="ARTICLES" />
        <ListLink to="/about/" title="ABOUT" />
      </LinksContainer>
    </HeaderContainer>
  </HeaderBorder>
);

const HeaderBorder = styled.div`
  border-bottom: 2px solid lightgray;
`;

const HeaderContainer = styled.div`
  margin: 0rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  ${mediaQueries('xsm')` max-width: 85%; `};
  ${mediaQueries('med')` max-width: 75%; `};
  ${mediaQueries('lg')` max-width: 55%; `};
`;

const Title = styled.h1`
  font-family: "Exo2", sans-serif;
  background-color: black;
  padding: 0 8px 3px 8px;
  color: white;
  margin: 0.5rem 0rem;
  user-select: none;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const LinkTitle = styled.h4`
  font-family: "Ubuntu", sans-serif;
  margin: 0.5rem;
  transition: all 0.25s;

  &:hover {
    color: var(--highlight-color);
    transform: scale(1.1);
  }
`;
