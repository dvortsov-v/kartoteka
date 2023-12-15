<template>
    <div class="create-offer-page">
        <UiContainer class="create-offer-page__wrapper">
            <UiBreadcrumbs class="create-offer-page__breadcrumbs"/>
            <h1 class="create-offer-page__title h1">
                Новое предложение
            </h1>
            <main class="create-offer-page__main">
                <form class="create-offer-page__form">
                    <div class="create-offer-page__sections">
                        <details class="create-offer-page-section">
                            <summary @click="handleToogle" class="create-offer-page-section__head">
                                <h5 class="create-offer-page-section__title h5">Основная информация</h5>
                                <svg-icon class="create-offer-page-section__icon" :name="iconAccordion" />
                            </summary>
                            <div class="create-offer-page-section__body">
                                <div class="create-offer-page-section__row">
                                    <label class="create-offer-page-section__field create-offer-field">
                                        <span class="create-offer-field__placeholder">
                                            <span class="create-offer-field__text">Ваше имя</span>
                                            <svg-icon name="asterisk" class="create-offer-field__required"/>
                                        </span>
                                        <UiInput class="create-offer-field__input" />
                                    </label>
                                </div>
                            </div>
                        </details>
                    </div>
                </form>
            </main>
        </UiContainer>
    </div>
</template>

<script setup lang="ts">
import {Product} from "~/definitions/interfaces/Products";
import {Meta} from "~/definitions/interfaces/Meta";
import {getUserProductsRequest} from "~/api/UserApi";
import {contacts} from "~/constants/contacts";
import {validAdditionalPhone, validPhone} from "~/composable/validPhone";
useHead({
    title: 'Личный кабинет',
});

definePageMeta({
    nameRoute: 'Личный кабинет',
    middleware: 'auth',
});
const isOpen: Ref<boolean> = ref(false);

const handleToogle = () => {
    isOpen.value = !isOpen.value;
}
const iconAccordion = computed(() => unref(isOpen) ? 'minus' : 'plus');
</script>

<style scoped lang="scss">
@import '~/pages/office/styles/create-offer-page.scss';
</style>
