<template>
    <header ref="header" class="header">
        <div class="header__top header-top">
            <UiContainer class="header-top__wrapper">
                <HeaderLogo class="header-main__logo header-main__logo--mobile" />
                <HeaderNavigation class="header-top__navigation"/>
                <HeaderInformation class="header-top__information"/>
            </UiContainer>
        </div>
        <div class="header-main header__main">
            <UiContainer class="header-main__wrapper">
                <HeaderLogo  class="header-main__logo header-main__logo--desktop" />
                <div class="header-main__search">
                    <UiButton @click="toogleIsShowCatalogMenu" class="header-main__menu header-main-menu">
                        <svg-icon
                            :name="iconCatalogButton"
                            :class="classesIconCatalogButton"
                            class="header-main-menu__icon"
                        />
                        <span class="header-main-menu__text">Каталог</span>
                    </UiButton>
                    <HeaderSearchField class="header-main__field" />
                </div>
                <div class="header-main__buttons">
                    <UiButton
                        theme="primary-transparent"
                        class="header-main__adding header-main-adding"
                    >
                        <svg-icon name="adding" class="header-main-adding__icon" />
                    </UiButton>
                    <UiButton
                        @click="openModalsAuthorization"
                        theme="primary-transparent"
                        class="header-main__auth header-main-auth"
                    >
                        <svg-icon name="lock" class="header-main-auth__icon" />
                        <span class="header-main-auth__text">Вход</span>
                    </UiButton>
                </div>
            </UiContainer>
        </div>
        <ModalsCatalogMenu v-if="isShowCatalogMenu" />
    </header>
</template>
<script setup lang="ts">
import {useModal} from "vue-final-modal";
import {ModalsAuthorization} from "#components";

const isShowCatalogMenu = ref(false);
const header = ref();
const toogleIsShowCatalogMenu = () => {
    const bodyElem = document.querySelector('body');
    isShowCatalogMenu.value = !isShowCatalogMenu.value;

    if(unref(isShowCatalogMenu) && bodyElem) {
        bodyElem.style.overflow = 'hidden';
    } else if (!unref(isShowCatalogMenu) && bodyElem) {
        bodyElem.style.overflow = 'visible';
    }
}


const {open: openModalsAuthorization, close: closeModalsAuthorization} = useModal({
    component: ModalsAuthorization,
    attrs: {
        onClose() {
            closeModalsAuthorization()
        },
    },
})

const setHeaderHeight = () => {
    document.documentElement.style.setProperty('--header-height', `${unref(header).offsetHeight}px`);
}

onMounted(() => {
    setHeaderHeight();

    window.addEventListener('resize', setHeaderHeight);
})

onUnmounted(() => {
    window.removeEventListener('resize', setHeaderHeight);
})

const iconCatalogButton = computed(() => unref(isShowCatalogMenu) ? 'cross' : 'menu');
const classesIconCatalogButton = computed(() =>  ({'header-main-menu__icon--cross': unref(isShowCatalogMenu)}));
</script>
<style scoped lang="scss">
@import '@/components/Header/styles/header.scss';
</style>
