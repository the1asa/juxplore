import React from 'react';
import { Link } from 'gatsby';

import styles from './postCard.module.css';

export default (props) => {
  const { title, link } = props;
  return (
    <Link to={link}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.circle} />
      </div>
    </Link>

  );
};
