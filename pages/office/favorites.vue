<template>
    <OfficeLayout title="Избранное" :countObjects="favoritesStore.favorites.length" class="favorites-page">
        <main class="favorites-page__main">
            <CommonProductsSetting :sortList="sortList" @setIsCompactedView="changeCompactedView" class="favorites-page__filters" />
            <CommonCardProduct
                :listProducts="favoritesStore.favorites"
                :isCompactedView="isCompactedView"
                class="favorites-page__products"
            />
            <div class="favorites-page__navigation favorites-page-navigation">
                <UiPagination countPage="5" class="favorites-page-navigation__pagination" />
                <UiButton theme="transparent" class="favorites-page-navigation__more">
                    <svg-icon
                        name="adding"
                        class="favorites-page-navigation__icon"
                    />
                    <span class="favorites-page-navigation__text">
                                Показать ещё
                            </span>
                </UiButton>
                <span class="favorites-page-navigation__show favorites-page-navigation-show">
                    <span class="favorites-page-navigation-show__text">Показано:</span>
                    <span class="favorites-page-navigation-show__count">50 из 120</span>
                </span>
            </div>
        </main>
    </OfficeLayout>
</template>

<script setup lang="ts">
import {useProductsStore} from "~/store/useProductsStore";
import {useFavoritesStore} from "~/store/useFavoritesStore";
const productsStore = useProductsStore();
productsStore.getProducts();

definePageMeta({
    layout: 'office',
})
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
