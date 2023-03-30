const siteMetadata = {
  title: 'Hanii',
  author: 'Hanii',
  headerTitle: 'hanii',
  description: 'Software Engineer,Course Creator',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: ' ',
  siteRepo: 'https://github.com/',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: '24.hours.hanii@gmail.com',
  github: 'https://github.com/haani0090',
  twitter: 'https://twitter.com/https.hanii',
  facebook: 'https://facebook.com/',
  linkedin: 'https://www.linkedin.com/in/im-hanii/',
  spotify: 'https://open.spotify.com/user/12162121994?si=e685b3546f414967',
  steam: 'https://steamcommunity.com/',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
