import React from 'react';
import { Link } from 'gatsby';

import styles from './postCard.module.css';

export default (props) => {
  const { title, link } = props;
  return (
    <div className={styles.container}>
      <Link className={styles.title} to={link}>
        <h2>{title}</h2>
      </Link>
      <div className={styles.circle} />
    </div>
  );
};
