import React from 'react';
import { graphql } from 'gatsby';
import PageContainer from '../components/pageContainer';
import PostCard from '../components/postCard/postCard';

export default ({ data }) => (
  <PageContainer page="home">
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <PostCard title={node.frontmatter.title} link={node.fields.slug} />
      ))}
    </div>
  </PageContainer>
);

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
