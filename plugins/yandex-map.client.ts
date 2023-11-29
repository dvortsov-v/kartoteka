// @ts-ignore
import plugin from 'vue-yandex-maps'
import { defineNuxtPlugin } from 'nuxt/app'

const settings = {
    apiKey: '7833c4d0-6bd0-47b0-a626-226706e25080', // Индивидуальный ключ API
    lang: 'ru_RU', // Используемый язык
    coordorder: 'latlong', // Порядок задания географических координат
    debug: false, // Режим отладки
    version: '2.1' // Версия Я.Карт
}

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(plugin, settings)
})
