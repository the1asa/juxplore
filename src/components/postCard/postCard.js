import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';
import styles from './postCard.module.css';

export default (props) => {
  const {
    title, subtitle, link, date, image
  } = props;
  return (
    <Link to={link}>
      <Container>
        <TitleContainer>
          <Title>{title}</Title>
          { subtitle && <Subtitle>{subtitle}</Subtitle> }
          <Date>{date}</Date>
        </TitleContainer>
        { image && <Img className={styles.image} fluid={image} /> }
      </Container>
    </Link>

  );
};

const Container = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid;
  border-color: var(--border-color);
  border-style: none none solid none;
  padding: 0px 20px 5px 20px;
  transition: all .1s ease;
  margin-bottom: 1rem;
  align-content: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Title = styled.h3`
  margin: 0rem 1rem .25rem 0rem;
  transition: color 0.25s;
  font-weight: bold;
  color: var(--primary-text-color);

  ${Container}:hover & {
    color: var(--highlight-color);
  }
`;

const Subtitle = styled.p`
  margin: 0 .5rem 0 0;
  color: var(--primary-text-color);
  display: none;
  font-size: 16px;

  ${mediaQueries('md')` display: block; `};
  ${mediaQueries('lg')` display: block; `};
  ${mediaQueries('xl')` display: block; `};
`;

const Date = styled.h6`
  color: var(--primary-text-color);
  margin: .75rem 0rem .25rem 0rem;
  align-self: flex-start;
`;
