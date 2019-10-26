import React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.css';

const ListLink = (props) => {
  const { to, children } = props;
  return (
    <Link to={to}>
      <div className={styles.circle}>{children}</div>
    </Link>
  );
};
export default () => (
  <div className={styles.headerBorder}>
    <div className={styles.headerContainer}>
      <Link to="/">
        <h1 className={styles.title}>IC</h1>
      </Link>
      <ListLink to="/about/" />
    </div>
  </div>
);
