// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: [
        '~/assets/styles/fonts.scss',
        '~/assets/styles/app.scss',
        '~/assets/styles/reset.scss',
        '~/assets/styles/colors.scss',
    ],
    modules: [
        '@nuxtjs/svg-sprite',
    ],
})
