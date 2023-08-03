// const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
//   router: {
//     base: '/nuxt-test-task/'
//   }
// } : {}
export default {
  head: {
    title: 'client-server',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', url: '/favicon.ico' }],
    // pwa: { 
    //   icon: { 
    //     fileName: '/favicon.ico' 
    //   } 
    // },
  },
  css: [],
  plugins: [],
  components: true,
  target: 'server',
  buildModules: ['@nuxtjs/eslint-module'],
  serverMiddleware: {
    '/api': '~/api'
  },
  modules: [
    // '@nuxtjs/axios',
    '@nuxt/http'
  ],
  axios: {
    // baseURL: '/',
  },
  build: {},
  watchers: {
    webpack: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  // routerBase:[]
  // router: {
  //   base: '/nuxt-test-task/'
  // }
}
