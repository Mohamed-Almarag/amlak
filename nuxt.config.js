import colors from 'vuetify/es5/util/colors'
export default {
  ssr: true,
  target: 'server',
  // mode: 'spa',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Amlak',
    title: 'Amlak',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#9e0000' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    '~/static/vendor/line-awesome/css/line-awesome.min.css',
    '~/static/css/bootstrap.min.css',
    '~/assets/scss/main.scss',
    // // 'swiper/css/swiper.css',
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    'vue-slick-carousel/dist/vue-slick-carousel-theme.css',

    // 'slick-carousel/slick/slick.css',
    // 'slick-carousel/slick/slick-theme.css',

    '~/node_modules/line-awesome/dist/font-awesome-line-awesome/css/all.min.css',
  ],

  plugins: [
    '~plugins/zoomOnHover',
    '~API/helpers',
    '~plugins/filters.js',
    { src: '~/plugins/slick', mode: 'client' },
    { src: '~/plugins/vuelidate.js', mode: 'client' },
    {
      src: '~/plugins/modal.js',
      mode: 'client',
    },
    // '~/plugins/vue-agile.js',
    // '~/plugins/swiper.js'
  ], //'~plugins/i18n'

  components: true,

  buildModules: ['@nuxtjs/vuetify'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/i18n',
    '@nuxtjs/auth-next',
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
  ],
  i18n: {
    locales: [
      { code: 'ar', iso: 'ar-EG', file: 'ar-EG.json', dir: 'rtl' },
      { code: 'en', iso: 'en-US', file: 'en-US.json', dir: 'ltr' },
    ],
    langDir: '@/lang/',
    strategy: 'no_prefix',
    vueI18n: {
      messages: {
        ar: require('./lang/ar-EG.json'),
        en: require('./lang/en-US.json'),
      },
    },
  },
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false, // Or `bvCSS: false`
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://amlak.softgatesdemo.com/api/',
    // baseURL: 'http://offers.softgatesdemo.com/api/',
  },

  // env: {
  //   language: process.env.this.$cookiz.get('auth.lang') || 'en',
  // },

  // Authentication
  auth: {
    redirect: {
      login: 'auth/login',
      logout: '/',
      callback: 'auth/login',
      home: '/',
    },
    strategies: {
      local: {
        token: {
          property: 'token',
          required: true,
          type: 'Bearer',
        },
        user: {
          property: false, // here should be `false`, as you defined in user endpoint `propertyName`
          autoFetch: true,
        },
        endpoints: {
          login: { url: 'auth/login', method: 'post' },
          logout: { url: 'logout', method: 'get' },
          user: { url: 'user', method: 'get' },
        },
        // tokenRequired: true,
        // tokenType: '',
      },
    },
  },

  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // router: {
  //   middleware: 'authentiacteUser',
  // },
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: [
      // '~/assets/styles/variables.scss',
      // '~/assets/styles/mixins.scss',
      // '~/assets/styles/_tabs.scss'
    ],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  styleResources: {
    scss: ['assets/scss/_mixins.scss', 'assets/scss/_variables.scss'],
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    // extend({ isClient, store }) {
    //   // Extend only webpack config for client-bundle
    //   if (isClient) {
    //     store.store.dispatch(
    //       'authentication/Login/LoginHandler',
    //       this.$cookiz.get('res')
    //     )
    //   }
    // },
  },
}
