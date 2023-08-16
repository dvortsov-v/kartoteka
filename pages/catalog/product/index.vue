<template>
    <div class="product-page">
        <section class="product-page__section">

        </section>
        <div class="product-page__aside">
            <h3 class="product-page__title">Mercedes-Benz GLC Coupé</h3>
            <div class="product-page__wrap">
                <CatalogList class="catalog-page-main__list" />
                <div class="product-page__advertising"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {getNamePage} from "~/composable/getNamePage";

useHead({
    title: getNamePage,
});

definePageMeta({
    key: route => route.fullPath,
    name: getNamePage,
})

</script>

<style scoped lang="scss">
@import '@/pages/catalog/product/styles/product-page.scss';

</style>
