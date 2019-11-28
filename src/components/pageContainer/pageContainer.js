import React, { Fragment } from 'react';

import Header from '../header';
import styles from './pageContainer.module.css';

export default (props) => {
  const { children, pageName } = props;
  let pageStyle = '';

  switch (pageName) {
    case 'about':
      pageStyle = styles.aboutContainer;
      break;
    default:
      pageStyle = styles.container;
  }

  return (
    <Fragment>
      <Header />

      <div className={pageStyle}>{children}</div>
    </Fragment>
  );
};
