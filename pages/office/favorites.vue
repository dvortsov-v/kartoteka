<template>
    <OfficeLayout title="Избранное" :countObjects="favoritesStore.favorites.length" class="favorites-page">
        <main class="favorites-page__main">
            <CommonProductsSetting :sortList="sortList" @setIsCompactedView="changeCompactedView" class="favorites-page__filters" />
            <CommonProductList
                :listProducts="favoritesStore.favorites"
                :isCompactedView="isCompactedView"
                class="favorites-page__products"
            />
            <UiPagination :paginationDate="{}" class="favorites-page__navigation " />
        </main>
    </OfficeLayout>
</template>

<script setup lang="ts">
import {useFavorites} from "~/composable/useFavorites";

useHead({
    title: 'Личный кабинет',

});

definePageMeta({
    nameRoute: 'Личный кабинет',
    middleware: 'auth',
});
import {useFavoritesStore} from "~/store/useFavoritesStore";
const {getFavorites} = useFavorites()
const userToken = useCookie('userToken');
if(unref(userToken)) {
    getFavorites(unref(userToken));
}
const favoritesStore = useFavoritesStore();

const sortList = [
    {
        value: 'price',
        text: 'по цене',
    },
    {
        value: 'date',
        text: 'по дате добавления',
    },
];
const isCompactedView: Ref<boolean> = ref(false);
const changeCompactedView = (val: boolean) => {
    isCompactedView.value = val;
};
</script>

<style scoped lang="scss">
@import '@/pages/office/styles/favorites-page.scss';
</style>
