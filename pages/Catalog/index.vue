<template>
    <div class="catalog-page">
        <UiContainer class="catalog-page__wrapper">
            <UiBreadcrumbs />
            <MainPageRecommendations class="catalog-page__recommendations" />
        </UiContainer>
    </div>
</template>
<script setup lang="ts">
useHead({
    title: "Каталог",
});

definePageMeta({
    name: 'Каталог',
});
</script>

<style scoped lang="scss">
@import "@/pages/Catalog/styles/catalog-page.scss";
</style>
