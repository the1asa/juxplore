import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styles from './templates.module.css';

import PageContainer from '../components/pageContainer';

export default ({ data }) => {
  const post = data.markdownRemark;
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  const displayFeatureImg = !featuredImgFluid.src.includes('dummy.png');
  console.log(featuredImgFluid);
  return (
    <PageContainer>
      <div>
        <h1 className={styles.title}>{post.frontmatter.title}</h1>
        { displayFeatureImg ? <Img fluid={featuredImgFluid} /> : null}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </PageContainer>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
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
