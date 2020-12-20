export const breakpoints = {
  xsm: 320,
  sm: 480,
  md: 767,
  lg: 1024,
  xl: 1280,
};

export const mediaQueries = key => style => `@media (min-width: ${breakpoints[key]}px) { ${style} }`;
