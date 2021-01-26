/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu';
import { mediaQueries } from '../../styles/mediaQueries';
import EmailSub from '../emailSub';
import {
  About, Article, Sun, Moon
} from '../icons/icons';

const titles = {
  articles: 'ARTICLES',
  about: 'ABOUT',
  theme: 'THEME'
};

const theme = {
  dark: 'dark',
  light: 'light'
};

export default () => {
  const [isDark, setIsDark] = useState(typeof window === 'undefined' ? theme.dark : window.__theme === theme.dark);
  const [icon, setIcon] = useState(<SunIcon />);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window.__setPreferredTheme(isDark ? theme.dark : theme.light);
    if (isDark) { setIcon(<MoonIcon />); } else { setIcon(<SunIcon />); }
  }, [isDark]);

  return (
    <HeaderBorder>
      <BurgerWrapper>
        <Menu right styles={burgerStyles}>
          <ListLink to="/" title={titles.articles} />
          <ListLink to="/about/" title={titles.about} />
          <Row icon={titles.theme} onClick={() => { setIsDark(!isDark); }}>
            { icon }
            <LinkTitle>{titles.theme}</LinkTitle>
          </Row>
          <EmailSub isBurger />
        </Menu>
      </BurgerWrapper>
      <HeaderContainer>
        <Link to="/">
          <Title>JX</Title>
        </Link>
        <LinksContainer>
          <EmailSub />
          <ListLink to="/" title={titles.articles} />
          <ListLink to="/about/" title={titles.about} />
          <Row onClick={() => { setIsDark(!isDark); }}>
            { icon }
          </Row>
        </LinksContainer>
      </HeaderContainer>
    </HeaderBorder>
  );
};

const ListLink = (props) => {
  const { to, title } = props;
  const DisplayIcon = title === titles.about ? AboutIcon : ArticleIcon;
  return (
    <Link to={to}>
      <Row icon={title}>
        <DisplayIcon />
        <LinkTitle>{title}</LinkTitle>
      </Row>
    </Link>
  );
};

const burgerStyles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    right: '36px',
    top: '16px'
  },
  bmBurgerBars: {
    background: '#636363'
  },
  bmBurgerBarsHover: {
    background: 'lightgray'
  },
  bmCrossButton: {
    height: '96px',
    width: '96px'
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmItem: {
    display: 'flex'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};

const AboutIcon = styled(About)`
  color: whitesmoke;
  ${mediaQueries('md')` display: none; `};
`;

const ArticleIcon = styled(Article)`
  color: whitesmoke;
  ${mediaQueries('md')` display: none; `};
`;

const MoonIcon = styled(Moon)`
  color: whitesmoke;
  ${mediaQueries('md')` 
    margin: 0 0 0 1rem; 
    &:hover {
      color: var(--highlight-color);
    }
  `};
`;

const SunIcon = styled(Sun)`
  color: whitesmoke;
  ${mediaQueries('md')` 
    margin: 0 0 0 1rem; 
    color: black; 
    &:hover {
      color: var(--highlight-color);
    }
  `};
`;

const HeaderBorder = styled.div`
  border-bottom: 1px solid var(--border-color);
  height: 100%;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--primary-background-color);
`;

const HeaderContainer = styled.div`
  margin: 0rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 1000;
  
  ${mediaQueries('xsm')` max-width: 85%; `};
  ${mediaQueries('md')` max-width: 75%; `};
  ${mediaQueries('lg')` max-width: 55%; `};
`;

const Title = styled.h1`
  font-family: "Exo2", sans-serif;
  background-color: var(--logo-background-color);
  padding: 0 8px 3px 8px;
  color: var(--logo-text-color);
  margin: 0.5rem 0rem;
  user-select: none;
`;

const LinksContainer = styled.div`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  display: none;

  ${mediaQueries('md')` display: flex; `};
`;

const LinkTitle = styled.span`
  font-size: 10px;
  font-family: "Ubuntu", sans-serif;
  transition: all 0.25s;
  margin-left: 0.25rem;
  color: whitesmoke;

  ${mediaQueries('md')` color: var(--primary-text-color); `};

  &:hover {
    color: var(--highlight-color);
  }
`;

const BurgerWrapper = styled.div`
  ${mediaQueries('md')` display: none; `};
  z-index: 999999;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin: 0.5rem;
  cursor: pointer;
`;
