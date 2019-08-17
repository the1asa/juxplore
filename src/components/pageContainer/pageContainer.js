import React from 'react';

import Header from '../header';
import styles from './pageContainer.module.css';

export default ({ children }) => (
  <div>
    <Header />
    <div className={styles.container}>{children}</div>
  </div>
);
