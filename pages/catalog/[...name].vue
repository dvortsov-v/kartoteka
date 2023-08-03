<template>
    <div class="catalog-page">
        <div class="catalog-page__head">
            <h1 class="catalog-page__title">
                {{getNamePage}}
            </h1>
            <span class="catalog-page__count">10000 товаров</span>
        </div>
    </div>
</template>
<script setup lang="ts">
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
@import "@/pages/Catalog/styles/catalog-page.scss";
</style>
