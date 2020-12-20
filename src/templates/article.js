import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import PageContainer from '../components/pageContainer';

export default ({ data }) => {
  const post = data.markdownRemark;
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  const { featuredImageTitle } = post.frontmatter;
  const displayFeatureImg = !featuredImgFluid.src.includes('dummy.png');
  const { title } = post.frontmatter;
  return (
    <PageContainer>
      <Fragment>
        <Title>{title}</Title>
        <Feature>
          { displayFeatureImg && <Img fluid={featuredImgFluid} /> }
          { featuredImageTitle && <FeatureTitle>{featuredImageTitle}</FeatureTitle> }
        </Feature>

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

const Title = styled.h2`
  font-family: "Ubuntu";
  padding-bottom: 1rem;
`;

const Feature = styled.div`
  margin-bottom: 2rem;
`;

const FeatureTitle = styled.h4`
  margin-top: 1rem;
  font-style: italic;
`;
