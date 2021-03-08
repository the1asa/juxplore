import React from 'react';
import { graphql } from 'gatsby';
import PageContainer from '../components/pageContainer';
import PostCard from '../components/postCard/postCard';

export default ({ data }) => {
  const posts = [];
  data.allMdx.edges.forEach(({ node }) => {
    posts.push({
      title: node.frontmatter.title,
      subtitle: node.frontmatter.subtitle,
      link: node.fields.slug,
      date: node.frontmatter.date,
      image: node.frontmatter.featuredImage.childImageSharp.fluid
    });
  });

  // most recent date first
  posts.sort((a, b) => new Date(b.date)
    .toISOString().localeCompare(new Date(a.date).toISOString()));

  return (
    <PageContainer>
      { posts.map(({
        title, subtitle, link, date, image
      }) => (
        <PostCard
          key={title}
          title={title}
          subtitle={subtitle}
          link={link}
          date={date}
          image={image}
        />
      ))}
    </PageContainer>
  );
};


export const query = graphql`
  query {
    allMdx {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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
