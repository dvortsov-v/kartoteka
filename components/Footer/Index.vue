<template>
    <footer class="footer">
        <UiContainer class="footer__wrapper">
            <div class="footer__additional footer-additional">
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
            </div>
            <div class="footer-additional__right">
                <div class="footer__information footer-information">
                    <div class="footer-information__phone">
                        <a href="tel:+78001008555" class="footer-information__number">8 800 100-85-55</a>
                        <span class="footer-information__note">Звонок по России бесплатный</span>
                    </div>
                    <div class="footer-information__address">
                        <span class="footer-information__text">117997, Москва Нахимовский проспект, д. 32. ИКСА РАН </span>
                        <span class="footer-information__schedule">Пн — Пт, с 9:00 до 18:00 (Мск)</span>
                    </div>
                    <ul class="footer-information__socials footer-socials">
                        <li
                            v-for="social in socials"
                            :key="`footer-social-${social.id}`"
                            class="footer-socials__item"
                        >
                            <NuxtLink class="footer-socials__social">
                                <svg-icon :name="`socials/${social.icon}`" class="footer-socials__icon"/>
                            </NuxtLink>
                        </li>
                    </ul>
                    <p class="footer-additional__certificate">Свидетельство о регистрации СМИ Эл ФС77-45357</p>
                </div>
                <div class="footer__navigation footer-navigation">
                    <ul class="footer-navigation__list">
                        <li
                            v-for="menuItem in topMenu"
                            :key="`top-menu-item-${menuItem.id}`"
                            class="footer-navigation__item"
                        >
                            <NuxtLink to="/" class="footer-navigation__link">{{ menuItem.name }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </UiContainer>
    </footer>
</template>
<script setup lang="ts">
import {socials} from '@/constants/socials';
import {topMenu} from '@/constants/top-menu'

const currentYear = new Date().getFullYear();
</script>
<style scoped lang="scss">
@import "@/components/Footer/styles/footer.scss";
</style>
