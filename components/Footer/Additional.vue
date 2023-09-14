<template>
    <div class="footer-additional">
        <div class="footer-additional__subscription footer-subscription">
            <h4 class="footer-subscription__title">Оформите подписку <br> на картотеку</h4>
            <div class="footer-subscription__field">
                <input
                    type="text"
                    name="subscribe"
                    class="footer-subscription__input"
                    placeholder="Адрес эл. почты"
                >
                <button class="footer-subscription__submit">
                    <svg-icon name="arrow-right" class="footer-subscription__icon"/>
                </button>
            </div>
        </div>
        <FooterInformation class="footer-additional__information" />
        <ul class="footer-additional__documents footer-documents">
            <li class="footer-documents__item">
                <NuxtLink class="footer-documents__link">Информация о деятельности в области информационных технологий</NuxtLink>
            </li>
            <li class="footer-documents__item">
                <NuxtLink class="footer-documents__link">Политика ООО «Коммерсантъ КАРТОТЕКА» в отношении обработки и защиты персональных данных</NuxtLink>
            </li>
            <li class="footer-documents__item">
                <NuxtLink class="footer-documents__link">Порядок использования и копирования материалов</NuxtLink>
            </li>
            <li class="footer-documents__item">
                <NuxtLink class="footer-documents__link">Регламент оказания технической поддержки </NuxtLink>
            </li>
        </ul>
        <p class="footer-additional__copyright">© ООО «Коммерсантъ Картотека», 1995—{{ currentYear }}</p>
        <p class="footer-additional__certificate">Свидетельство о регистрации СМИ Эл ФС77-45357</p>
    </div>
</template>
<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
<style scoped lang="scss">
@import "@/components/Footer/styles/footer-additional.scss";
</style>
