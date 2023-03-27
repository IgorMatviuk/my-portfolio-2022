export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/UI.scss',
    '@/assets/style/fonts.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-typed-js.js', mode: 'client' },
    { src: '~/plugins/vue-kinesis.js', mode: 'client' },
    { src: '~/plugins/vue-parallaxy.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      Roboto: true,
    },
    display: 'block',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    [
      '@nuxtjs/i18n',
      {
        locales: ['RU', 'EN', 'IS'],
        defaultLocale: 'RU',
        vueI18n: {
          fallbackLocale: 'RU',
          messages: {
            RU:{
              hello: 'Привет',
              lang: 'Русский',
              name: 'Игорь Матвиюк',
              pro: 'Front-end разработчик',
              aboutMe: 'Обо мне',
              main:'Главная',
              what: 'Что я делаю ?',
              skills:'Навыки',
              experience:'Опыт',
              contacts: 'Контакты'
            },
            EN:{
              hello: 'Hello',
              lang: 'English',
              name: 'Ihor Matviiuk',
              pro: 'Front-end developer',
              aboutMe: 'About me',
              main: 'Main',
              what: 'What am I doing ?',
              skills:'Skills',
              experience:'Experience',
              contacts:'Contacts',
            },
            IS:{  
              hello: 'Здравѣј',
              lang: 'Меджусловјанскы',
              name: 'Ihor Matviiuk',
              pro: 'Front-end developer'
            },
          }
        }
      }
    ]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
