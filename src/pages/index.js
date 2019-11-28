import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import PageContainer from '../components/pageContainer';
import PostCard from '../components/postCard/postCard';

export default ({ data }) => {
  const posts = [];
  data.allMarkdownRemark.edges.forEach(({ node }) => {
    posts.push({ title: node.frontmatter.title, link: node.fields.slug, date: node.frontmatter.date });
  });

  return (
    <PageContainer>
      <Fragment>
        { posts.map(({ title, link, date }) => (
          <PostCard title={title} link={link} date={date} />
        ))}
      </Fragment>
    </PageContainer>
  );
};

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
