/* eslint-disable import/prefer-default-export */
// Reference: https://www.pinkdroids.com/blog/svg-react-styled-components/
import React from 'react';
import styled from 'styled-components';

const Icon = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

const Svg = styled(Icon)` 
  width: 24px; 
  height: 24px;
`;

export const About = ({ className }) => (
  <Svg viewBox="0 0 24 24" className={className}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </Svg>
);

export const Article = ({ className }) => (
  <Svg viewBox="0 0 24 24" className={className}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
  </Svg>
);

export const Moon = ({ className }) => (
  <Svg viewBox="0 0 24 24" className={className}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z" />
  </Svg>
);

export const Sun = ({ className }) => (
  <Svg viewBox="0 0 24 24" className={className}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z" />
  </Svg>
);

export const Email = ({ className }) => (
  <Svg viewBox="0 0 24 24" className={className}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </Svg>

);
