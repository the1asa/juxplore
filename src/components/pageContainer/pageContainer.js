import React from 'react';

import Header from '../header';
import styles from './pageContainer.module.css';

export default (props) => {
  const { page, children } = props;

  return (
    <div>
      <Header />
      <div className={styles.container}>{children}</div>
    </div>
  );
};
