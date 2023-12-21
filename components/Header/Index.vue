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
                        @click="handleAdditionalBtn"
                        theme="primary-transparent"
                        class="header-main__adding header-main-adding"
                    >
                        <svg-icon name="adding" class="header-main-adding__icon" />
                    </UiButton>
                    <div
                        v-if="mainStore.isAuthUser"
                        class="header-main__user header-main-user"
                    >
                        <UiButton
                            @click="toogleIsShowUserMenu"
                            :theme="themeUserButton"
                            class="header-main-user__auth header-main-auth header-main-auth--is-user"
                        >
                            <span class="header-main-auth__text">{{ userName }}</span>
                            <svg-icon name="chevron-down" class="header-main-auth__arrow" />
                        </UiButton>
                        <CommonOfficeMenu
                            v-if="isShowUserMenu"
                            @close="closeUserMenu"
                            class="header-main-user__wrap"
                        />
                    </div>
                    <UiButton
                        v-else
                        @click="modalAuthorization.open"
                        theme="primary-transparent"
                        :class="classesAuthButton"
                        class="header-main__auth header-main-auth"
                    >
                        <svg-icon name="lock" class="header-main-auth__icon" />
                        <span class="header-main-auth__text">Вход</span>
                    </UiButton>
                </div>
            </UiContainer>
        </div>
        <ModalsCatalogMenu @close="toogleIsShowCatalogMenu" v-if="isShowCatalogMenu" />
    </header>
</template>
<script setup lang="ts">
import {useModalList} from "~/components/Modals/composable/useModalList";
import {useMainStore} from "~/store/useMainStore";
import {useCategories} from "~/composable/request/useCategories";
import {useCategoriesStore} from "~/store/useCategoriesStore";
import {useUser} from "~/composable/request/useUser";
import {storeToRefs} from "pinia";
import {useUserStore} from "~/store/useUserStore";

const isShowCatalogMenu = ref(false);
const isShowUserMenu = ref(false);
const header = ref();

const categoriesStore =  useCategoriesStore()

const {
    getCategories,
} = useCategories()

if(categoriesStore.categories.length === 0) {
    getCategories()
}

const {
    modalAuthorization,
    modalRegistration,
} = useModalList()

const mainStore = useMainStore();
const userToken = useCookie('userToken');
const {getUserData, refreshToken} = useUser()
const userStore = useUserStore()
const {userName} = storeToRefs(userStore);
const {setUserName, setCountOrders} = userStore;

if(!unref(userToken)) {
    mainStore.isAuthUser = false;
    setUserName('');
    setCountOrders(0);
}

const toogleIsShowCatalogMenu = () => {
    isShowCatalogMenu.value = !isShowCatalogMenu.value;
}
const toogleIsShowUserMenu = () => {
    isShowUserMenu.value = !isShowUserMenu.value;
}
const closeUserMenu = () => {
    isShowUserMenu.value = false;
}

const handleAdditionalBtn = () => {
    if(mainStore.isAuthUser) {
        navigateTo('/office/create-offer')
    } else {
        modalRegistration.open
    }
}
const setHeaderHeight = () => {
    document.documentElement.style.setProperty('--header-height', `${unref(header).offsetHeight}px`);
}

onBeforeMount(async () => {
    if(unref(userToken) && unref(userName)) {
        // await refreshToken(unref(userToken));
        return
    }
    await getUserData(unref(userToken))
})

onMounted(() => {
    setHeaderHeight();

    window.addEventListener('resize', setHeaderHeight);
})

onUnmounted(() => {
    window.removeEventListener('resize', setHeaderHeight);
})
const classesAuthButton = () => ({
    'header-main-auth--is-no-auth': mainStore.isAuthUser,
})
const themeUserButton = computed(() => unref(isShowUserMenu) ? 'primary-dark' :  'primary-transparent');

const iconCatalogButton = computed(() => unref(isShowCatalogMenu) ? 'cross' : 'menu');
const classesIconCatalogButton = computed(() =>  ({'header-main-menu__icon--cross': unref(isShowCatalogMenu)}));
</script>
<style scoped lang="scss">
@import '@/components/Header/styles/header.scss';
</style>
