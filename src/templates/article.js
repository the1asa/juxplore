import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styles from './templates.module.css';

import PageContainer from '../components/pageContainer';

export default ({ data }) => {
  const post = data.markdownRemark;
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  const displayFeatureImg = !featuredImgFluid.src.includes('dummy.png');
  const { title } = post.frontmatter;
  return (
    <PageContainer>
      <Fragment>
        <h1 className={styles.title}>{title}</h1>

        { displayFeatureImg ? <Img fluid={featuredImgFluid} /> : null}
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
