// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: [
        'vue-final-modal/style.css',
        '~/assets/styles/fonts.scss',
        '~/assets/styles/app.scss',
        '~/assets/styles/reset.scss',
        '~/assets/styles/base.scss',
        '~/assets/styles/colors.scss',
    ],
    modules: [
        '@nuxtjs/svg-sprite',
        'nuxt-swiper',
        '@pinia/nuxt',
        'vue-yandex-maps/nuxt',
    ],
    plugins: [
        '~/plugins/vue-final-modal.ts',
    ],
    runtimeConfig: {
        public: {
            baseURL: 'https://petr.burov.fvds.ru/api'
        }
    },
    yandexMaps: {
        apikey: '7833c4d0-6bd0-47b0-a626-226706e25080',
        lang: 'ru_RU',
    },
})
