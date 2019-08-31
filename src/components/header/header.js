import React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.css';

const ListLink = (props) => {
  const { to, children } = props;
  return (
    <Link to={to}>
      <h2 className={styles.title}>{children}</h2>
    </Link>
  );
};
export default () => (
  <div className={styles.headerContainer}>
    <Link to="/">
      <h1 className={styles.title}>Tech & Stuff</h1>
    </Link>
    <ListLink to="/about/">About</ListLink>
  </div>
);
