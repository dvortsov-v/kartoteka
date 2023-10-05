<template>
    <div class="header-information">
        <div class="header-information__description header-information-description header-information-description--desktop">
            <NuxtLink to="https://www.vestnik-gosreg.ru/" class="header-information-description__text">Вестник государственной регистрации</NuxtLink>
            <NuxtLink to="https://www.kartoteka.ru/" class="header-information-description__link">kartoteka.ru</NuxtLink>
        </div>
        <div class="header-information__phone header-information-phone">
            <svg-icon name="phone" class="header-information-phone__icon"/>
            <span class="header-information-phone__numbers">8 800 100-85-55</span>
        </div>
        <div class="header-information__menu header-information-menu">
            <UiButton
                @click="toogleIsOpenMobileMenu"
                :theme="themeButtonMenu"
                class="header-information-menu__btn"
            >
                <svg-icon name="menu" class="header-information-menu__icon" />
            </UiButton>

            <div
                v-if="isOpenMobileMenu"
                class="header-information-menu__wrapper"
            >
                <HeaderNavigation  class="header-information-menu__navigation"/>
                <div class="header-information-menu__description header-information-description">
                    <NuxtLink to="https://www.vestnik-gosreg.ru/" class="header-information-description__text">Вестник государственной регистрации</NuxtLink>
                    <NuxtLink to="https://www.kartoteka.ru/" class="header-information-description__link">kartoteka.ru</NuxtLink>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
const isOpenMobileMenu = ref(false);
const toogleIsOpenMobileMenu = () => {
    isOpenMobileMenu.value = !isOpenMobileMenu.value
}

const themeButtonMenu = computed(() => unref(isOpenMobileMenu) ? 'primary-dark' : 'primary-transparent')
</script>
<style scoped lang="scss">
@import "@/components/Header/styles/header-information.scss";
</style>
