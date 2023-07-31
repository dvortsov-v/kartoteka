<template>
    <div class="catalog-page">
<!--        <UiContainer class="catalog-page__wrapper">-->
<!--&lt;!&ndash;            <MainPageRecommendations class="catalog-page__recommendations" />&ndash;&gt;-->
<!--        </UiContainer>-->
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
//@import "@/pages/Catalog/styles/catalog-page.scss";
</style>
