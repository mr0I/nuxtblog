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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {src: '/js/jquery-1.11.1.min.js' , body:true},
      {src: '/js/popper.min.js' , body:true},
      {src: '/js/bootstrap.min.js' , body:true},
      {src: '/js/jquery.simple-checkbox-table.min.js' , body:true},
      {src: '/js/material.min.js' , body:true},
      {src: '/js/toastr.min.js' , body:true},
      {src: '/js/script.js' , body:true}
    ],
  },

  /*
** Customize the progress-bar color
*/
  loading: { color: '#3B8070' },

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
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
