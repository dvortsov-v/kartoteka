<template>
    <div class="error-page">
        <div class="error-page__wrapper">
            <ErrorPageLogo class="error-page__logo" />
            <div class="error-page__base">
                <ErrorPageCode class="error-page__code" />
                <h1 class="error-page__title">Ошибка!</h1>
                <p class="error-page__description">Такой страницы не существует <br> или она недоступна</p>
                <UiButton
                    @click="navigateTo('/')"
                    theme="white"
                    class="error-page__button"
                    type="button"
                >
                    Перейти на главную
                </UiButton>
            </div>
            <p class="error-page__copyright">© ООО «Коммерсантъ Картотека», 1995—{{ currentYear }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style scoped lang="scss">
@import "@/components/ErrorPage/styles/error-page.scss";
</style>
