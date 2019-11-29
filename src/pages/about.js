import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import PageContainer from '../components/pageContainer';

import styles from './about.module.css';


export default () => (
  <PageContainer pageName="about">
    <div className={styles.background}>
      <h1 className={styles.title}><b>Impractical Curiosity</b></h1>
      <p>
        <i>
          &quot;People say: idle curiosity. The one thing that curiosity cannot be is idle.&quot;
        </i>
        {'\n'}
        - Leo Roston
      </p>
      <p>
        Welcome to my tiny corner of the internet. I created this site to share my thoughts and projects - and to explore new interests, however impractical.
      </p>
      <p>
      I currently work as a software engineer, you can read more about how that happened
        {' '}
        <b><Link to="articles/a-tale-of-two-brains/">here</Link></b>
.
      </p>
      <p>
        Contacts welcome at: ...
      </p>
    </div>
  </PageContainer>
);
