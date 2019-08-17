import React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.css';

const ListLink = (props) => {
  const { to, children } = props;
  return (
    <li className={styles.liLink}>
      <Link to={to}>{children}</Link>
    </li>
  );
};
export default () => (
  <div className={styles.headerContainer}>
    <Link to="/">
      <h3 className={styles.title}>Tech & Stuff</h3>
    </Link>
    <ul className={styles.ulLink}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
    </ul>
  </div>
);
