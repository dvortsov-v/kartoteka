<template>
    <div class="catalog-page">
        <UiContainer class="catalog-page__wrapper">
            <UiBreadcrumbs />
            <h1 class="catalog-page__title">{{$route.name}}</h1>
            <span class="catalog-page__count"></span>
            <template v-if="isMainPageCatalog">

            </template>
            <NuxtPage v-else />
        </UiContainer>
    </div>
</template>
<script setup lang="ts">
const route = useRoute();

const isMainPageCatalog = route.path === 'catalog';

useHead({
    title: 'Каталог',
});
definePageMeta({
    name: 'Каталог',
});

</script>

<style scoped lang="scss">
@import "@/pages/Catalog/styles/catalog-page.scss";
</style>
