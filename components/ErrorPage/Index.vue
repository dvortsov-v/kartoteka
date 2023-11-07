<template>
    <div class="error-page">
        <div class="error-page__wrapper">
            <ErrorPageLogo
                @click="handleError"
                class="error-page__logo"
            />
            <div class="error-page__base">
                <ErrorPageCode class="error-page__code" />
                <h1 class="error-page__title">Ошибка!</h1>
                <p class="error-page__description">Такой страницы не существует <br> или она недоступна</p>
                <UiButton
                    @click="handleError"
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
const error = useError();

const handleError = () => {
    clearError({
        redirect: "/",
    });
}
</script>

<style scoped lang="scss">
@import "@/components/ErrorPage/styles/error-page.scss";
</style>
