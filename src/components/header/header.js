/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { mediaQueries } from '../../styles/mediaQueries';
import EmailSub from '../emailSub';
import {
  About, Article, Sun, Moon
} from '../icons/icons';
import { useOnClickOutside } from './hooks';

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
  const [isLight, setIsLight] = useState(typeof window === 'undefined' ? false : window.__theme !== theme.dark);
  const [icon, setIcon] = useState(<MoonIcon />);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setIsMenuOpen(false));

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    window.__setPreferredTheme(isLight ? theme.light : theme.dark);
    if (isLight) { setIcon(<SunIcon />); } else { setIcon(<MoonIcon />); }
  }, [isLight]);

  function openMenu() {
    setIsMenuOpen(true);
    document.querySelector('html').style.overflow = 'hidden';
  }

  function closeMenu() {
    setIsMenuOpen(false);
    document.querySelector('html').style.overflow = 'visible';
  }

  return (
    <HeaderBorder>
      <div ref={node}>
        <Burger open={isMenuOpen} onClick={() => (isMenuOpen ? closeMenu() : openMenu())}>
          <div />
          <div />
          <div />
        </Burger>
        <Menu open={isMenuOpen}>
          <Padding />
          <ListLink to="/" title={titles.articles} onClick={() => closeMenu()} />
          <ListLink to="/about/" title={titles.about} onClick={() => closeMenu()} />
          <Row
            icon={titles.theme}
            onClick={() => {
              setIsLight(!isLight);
              closeMenu();
            }}
          >
            { icon }
            <LinkTitle>{titles.theme}</LinkTitle>
          </Row>
          <EmailSub isBurger onClick={() => closeMenu()} />
        </Menu>
      </div>
      <HeaderContainer>
        <Link to="/">
          <Title>JX</Title>
        </Link>
        <LinksContainer>
          <EmailSub />
          <ListLink to="/" title={titles.articles} />
          <ListLink to="/about/" title={titles.about} />
          <Row onClick={() => { setIsLight(!isLight); }}>
            { icon }
          </Row>
        </LinksContainer>
      </HeaderContainer>
    </HeaderBorder>
  );
};

const ListLink = ({ to, title, onClick = () => {} }) => {
  const DisplayIcon = title === titles.about ? AboutIcon : ArticleIcon;
  return (
    <Link to={to} onClick={onClick}>
      <Row icon={title}>
        <DisplayIcon />
        <LinkTitle>{title}</LinkTitle>
      </Row>
    </Link>
  );
};

const AboutIcon = styled(About)`
  color: whitesmoke;
  margin: .2rem;
  ${mediaQueries('md')` display: none; `};
`;

const ArticleIcon = styled(Article)`
  color: whitesmoke;
  margin: .2rem;
  ${mediaQueries('md')` display: none; `};
`;

const MoonIcon = styled(Moon)`
  color: whitesmoke;
  margin: .2rem;
  ${mediaQueries('md')` 
    margin: 0 0 0 1rem; 
    &:hover {
      color: var(--highlight-color);
    }
  `};
`;

const SunIcon = styled(Sun)`
  color: whitesmoke;
  margin: .2rem;
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
  z-index: 100;
  background-color: var(--primary-background-color);
`;

const HeaderContainer = styled.div`
  margin: 0rem auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 100;
  
  ${mediaQueries('xsm')` max-width: 85%; `};
  ${mediaQueries('lg')` max-width: 55%; `};
`;

const Title = styled.h1`
  font-family: "Exo2", sans-serif;
  background-color: var(--logo-background-color);
  padding: 0 8px 3px 8px;
  color: var(--logo-text-color);
  margin: 0.5rem 0rem;
  user-select: none;
  font-size: 36px;
`;

const LinksContainer = styled.div`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  display: none;

  ${mediaQueries('md')` display: flex; `};
`;

const LinkTitle = styled.span`
  font-size: 24px;
  font-family: "Ubuntu", sans-serif;
  transition: all 0.25s;
  margin-left: 0.25rem;
  color: whitesmoke;

  ${mediaQueries('md')` 
    font-size: 16px;
    color: var(--primary-text-color); 
  `};

  &:hover {
    color: var(--highlight-color);
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0.5rem;
  cursor: pointer;
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  background: #373a47;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;

  ${mediaQueries('sm')` 
    width: auto;
    min-width: 50%;
  `};

  ${mediaQueries('md')`
    display: none;
  `}
`;

const Burger = styled.button`
  position: absolute;
  top: 20%;
  right: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.33rem;
    background: ${({ open }) => (open ? 'whitesmoke;' : 'var(--primary-text-color);')};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }


  ${mediaQueries('md')`
    display: none;
  `}
`;

const Padding = styled.div`
  height: 3rem;
`;
