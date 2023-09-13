// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: [
        'vue-final-modal/style.css',
        '~/assets/styles/fonts.scss',
        '~/assets/styles/app.scss',
        '~/assets/styles/reset.scss',
        '~/assets/styles/colors.scss',
    ],
    modules: [
        '@nuxtjs/svg-sprite',
        'nuxt-swiper',
    ],
    plugins: [
        '~/plugins/vue-final-modal.ts'
    ],
    runtimeConfig: {
        public: {
            baseURL: 'https://petr.burov.fvds.ru/api'
        }
    }
})
