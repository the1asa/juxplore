import React from 'react';
import { graphql } from 'gatsby';
import PageContainer from '../components/pageContainer';

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <PageContainer>
      <div>
        <h1>{post.frontmatter.title}</h1>
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
      }
    }
  }
`;
