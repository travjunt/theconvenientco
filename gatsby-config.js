module.exports = {
    siteMetadata: {
    title: 'The Convenient Company',
    description: 'Your IT All-In-One Solution',
    keywords: 'get mac repair, mac, apple repair, used apple macbook, macbook pro, convenient company, custom vinyl, stickers, iphone, repair iphone, fix iphone, iphone screen replacement, used mac, used apple products, custom stickers, vinyl'
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      {
        resolve: 'gatsby-source-contentful',
        options: {
          spaceId: 'csmpx2ut868h',
          accessToken: '483ac743da675775344f2710dfb1da7e96691556fa5cf0aec6111cad06f347bd'
        }
      }
    ],
  }
  