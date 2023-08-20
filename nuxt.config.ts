// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    "/assets/css/color-switcher.css",
    "/assets/css/nivo-lightbox.css",
    '/assets/css/bootstrap.min.css',
    '/assets/css/animate.css',
    '/assets/css/main.css',
    '/assets/css/responsive.css',
    '/assets/css/slicknav.css',
    "/assets/css/colors/blue.css",
    "/assets/css/colors/cyan.css",
    "/assets/css/colors/red.css",
    "/assets/css/colors/yellow.css",
  ],
  app: {
      head: {
          script: [
              {
                  src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.0/jquery.min.js"
              },
              {
                  src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.1/js/bootstrap.min.js"
              },
              {
                  src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.11.8/umd/popper.min.js"
              },
          ]
      }
  }
})
