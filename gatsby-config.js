require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: 'Juxplore',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'juxplore.com',
        protocol: 'https',
        hostname: 'www.juxplore.com',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Juxplore',
        short_name: 'JX',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'static/favicon.png',
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-plausible',
      options: {
        domain: 'juxplore.com',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-remark-images',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        plugins: ['gatsby-remark-images'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800
            },
          },
          {
            resolve: 'gatsby-remark-classes',
            options: {
              classMap: {
                paragraph: 'text-base',
                listItem: 'text-base',
                'list[ordered=false]': 'text-base',
                'list[ordered=true]': 'text-base',
                list: 'text-base',
              }
            }
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
  ],
};
