// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},

    css: [
        '/assets/css/bootstrap.min.css',
        '/assets/css/main.css',
        '/assets/css/slicknav.css',
        "/assets/css/colors/red.css",
    ],
    modules: ['@pinia/nuxt', "@nuxt/image"],
    pinia: {
        autoImports: [
            "defineStore"
        ]
    },

})