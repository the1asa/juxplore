import React from 'react';
import { Link } from 'gatsby';

import styles from './header.module.css';

const ListLink = (props) => {
  const { to, title } = props;
  return (
    <Link to={to}>
      <h4 className={styles.link}>{title}</h4>
    </Link>
  );
};
export default () => (
  <div className={styles.headerBorder}>
    <div className={styles.headerContainer}>
      <Link to="/">
        <h1 className={styles.title}>IC</h1>
      </Link>
      <div className={styles.linksContainer}>
        <ListLink to="/" title="ARTICLES" />
        <ListLink to="/about/" title="ABOUT" />
      </div>
    </div>
  </div>
);
