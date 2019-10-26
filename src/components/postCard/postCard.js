import React from 'react';
import { Link } from 'gatsby';

import styles from './postCard.module.css';

export default (props) => {
  const { title, link } = props;
  return (
    <div className={styles.container}>
      <Link to={link}>
        <h2 className={styles.title}>{title}</h2>
      </Link>
      <div className={styles.circle} />
    </div>
  );
};
