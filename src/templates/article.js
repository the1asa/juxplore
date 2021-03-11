import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import styled from 'styled-components';

import PageContainer from '../components/pageContainer';
import EmailSub from '../components/emailSub';

export default ({ data }) => {
  const post = data.mdx;
  const featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid;
  const { featuredImageTitle } = post.frontmatter;
  const displayFeatureImg = !featuredImgFluid.src.includes('dummy.png');
  const { title } = post.frontmatter;
  return (
    <Fragment>
      <PageContainer>
        <Title>{title}</Title>
        <Feature>
          { displayFeatureImg && <Img fluid={featuredImgFluid} /> }
          { featuredImageTitle && <FeatureTitle>{featuredImageTitle}</FeatureTitle> }
        </Feature>

        <MDXRenderer>{post.body}</MDXRenderer>
      </PageContainer>

      <EmailContainer>
        <EmailSub isArticle />
      </EmailContainer>

    </Fragment>

  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date
        featuredImageTitle
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

const Title = styled.h1`
  color: var(--primary-text-color);
`;

const Feature = styled.div`
  margin-bottom: 2rem;
`;

const FeatureTitle = styled.h5`
  margin-top: 1rem;
  font-style: italic;
  color: var(--primary-text-color);
`;

const EmailContainer = styled.div`
  display: flex;
  justify-content: center;
  left: 50%;
  border-top: 1px solid var(--border-color);
  padding: 0px;
  margin-top:100px;
`;
