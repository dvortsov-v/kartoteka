<template>
    <div class="main-page">
        <UiContainer class="main-page__wrapper">
            <MainPageCategories class="main-page__categories" />
            <Newsline class="main-page__news" />
            <MainPageBanners class="main-page__banners" />
            <MainPageAdvantages v-if="false" class="main-page__advantages" />
            <MainPageRecommendations class="main-page__recommendations" />
        </UiContainer>
    </div>
</template>
<script setup lang="ts">
useHead({
    title: "Kartoteka.ru",
});
</script>

<style scoped lang="scss">
@import "@/pages/styles/main-page.scss";
</style>
