import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styles from './templates.module.css';

import PageContainer from '../components/pageContainer';

export default ({ data }) => {
  const post = data.markdownRemark;
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  const featuredImageTitle = post.frontmatter.featuredImageTitle;
  const displayFeatureImg = !featuredImgFluid.src.includes('dummy.png');
  const { title } = post.frontmatter;
  return (
    <PageContainer>
      <Fragment>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.feature}>
          { displayFeatureImg ? <Img fluid={featuredImgFluid} /> : null}
          { featuredImageTitle ? <h4 className={styles.featureTitle}>{featuredImageTitle}</h4> : null }
        </div>
        
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Fragment>
    </PageContainer>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
        featuredImageTitle
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
