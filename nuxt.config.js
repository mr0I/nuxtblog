export default {
  mode:'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtblog',
    htmlAttrs: {
      lang: 'fa'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxtblog desc' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: "https://fonts.googleapis.com/css?family=Open+Sans" }
    ],
    script: [
      {src: '/js/jquery-1.11.1.min.js' , body:true},
      {src: '/js/popper.min.js' , body:true},
      {src: '/js/bootstrap.min.js' , body:true},
      {src: '/js/jquery.simple-checkbox-table.min.js' , body:true},
      {src: '/js/material.min.js' , body:true},
      {src: '/js/toastr.min.js' , body:true},
      {src: '/js/script.js' , body:true , defer:true}
    ],
  },

  /*
** Customize the progress-bar color
*/
  loading: { color: '#3B8070',height: '4px', duration: 5000},
  loadingIndicator: {
    name: 'circle',
    color: '#fa923f'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/css/icon.css',
    '~assets/fonts/font-awesome/css/font-awesome.min.css',
    '~assets/css/bootstrap.min.css',
    '~assets/css/material.teal-purple.min.css',
    '~assets/css/toastr.min.css',
    '~assets/css/main.css'
  ],


  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/validator' },
    { src: '~/plugins/date-filter' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {
    baseURL: process.env.BASE_URL || 'http://127.0.0.1:8888/api/v1/',
    credentials: false
  },
  env:{
    BASE_URL : 'http://127.0.0.1:8888/api/v1/',
    AUTH_COOKIE_NAME : 'Nuxtblog_Auth_Token',
    AUTH_SECRET_KEY : 'dc322c652aeb9d94980fa0d10a2250467000d8a04bb4ebcebd1e3df5c5d58e408979104f0379e3c6fff6d36042d45df0d27028e1af5648bd708024aa4676e52ff82c9b4dab79e75f91c961353a94bd7454efbeec968bd9f9120a5af23146151d4276e60688d439c5128d92a40f33b0cb19cfca37d070ea2e3556a620d3f26525',
  },
  transition: {
    name: 'fade',
    mode: 'out-in'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
