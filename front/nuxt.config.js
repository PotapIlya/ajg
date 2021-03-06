export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'front',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      '@/assets/scss/app.scss'
  ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/axios.js' }
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    'cookie-universal-nuxt',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],

    'nuxt-socket-io',
  ],
  // io: {
  //   // module options
  //   sockets: [{
  //     name: 'socket',
  //     url: 'http://localhost:5000'
  //   }]
  // },
  // router: {
  //     middleware: ['auth']
  // },

  env: {
    baseBackUrl: 'http://localhost:5000'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
      baseURL: 'http://localhost:5000' + '/api/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  loading: {
    color: 'blue',
    height: '5px'
  }
}
