<template>
    <OfficeLayout title="Избранное" :countObjects="favoritesStore.favorites.length" class="orders-page">
        <main class="orders-page__main">
            <CommonProductsSetting :sortList="sortList" @setIsCompactedView="changeCompactedView" class="orders-page__filters" />
            <CatalogList
                :listProducts="favoritesStore.favorites"
                :isCompactedView="isCompactedView"
                class="orders-page__products"
            />
            <div class="orders-page__navigation orders-page-navigation">
                <UiPagination countPage="5" class="orders-page-navigation__pagination" />
                <UiButton theme="transparent" class="orders-page-navigation__more">
                    <svg-icon
                        name="adding"
                        class="orders-page-navigation__icon"
                    />
                    <span class="orders-page-navigation__text">
                                Показать ещё
                            </span>
                </UiButton>
                <span class="orders-page-navigation__show orders-page-navigation-show">
                            <span class="orders-page-navigation-show__text">Показано:</span>
                            <span class="orders-page-navigation-show__count">50 из 120</span>
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
@import '@/pages/office/styles/orders-page.scss';
</style>
