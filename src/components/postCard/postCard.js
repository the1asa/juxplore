import React from 'react';
import { Link } from 'gatsby';

import styles from './postCard.module.css';

export default (props) => {
  const { title, link, date } = props;
  return (
    <Link to={link}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        <h6 className={styles.date}>{date}</h6>
      </div>
    </Link>

  );
};
