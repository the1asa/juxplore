import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './postCard.module.css';

export default (props) => {
  const { title, subtitle, link, date, image } = props;
  console.log(props)
  return (
    <Link to={link}>
      <div className={styles.container}>
        <div className={styles.titleContainer} >
          <h4 className={styles.title}>{title}</h4>
          { subtitle && <p className={styles.subtitle}>{subtitle}</p> }
          <h6 className={styles.date}>{date}</h6>
        </div>
        { image && <Img className={styles.image} fluid={image}/> }
      </div>
    </Link>

  );
};
