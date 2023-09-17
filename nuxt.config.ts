// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: [
        '/assets/css/bootstrap.min.css',
        '/assets/css/main.css',
        '/assets/css/slicknav.css',
        "/assets/css/colors/red.css",
        "toastify-js/src/toastify.css"
    ],
    modules: [
      '@pinia/nuxt',
      "@nuxt/image",
      '@nuxtjs/tailwindcss',
      'nuxt-headlessui',
      '@pinia-plugin-persistedstate/nuxt',
      'nuxt-icons'
    ],
    pinia: {
        autoImports: [
            "defineStore"
        ]
    },
    runtimeConfig: {
        JWT_ACCESS_TOKEN: "mySecretToken",
        JWT_REFRESH_TOKEN: "mySecretToken"
    }

})