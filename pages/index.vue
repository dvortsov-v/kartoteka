<template>
    <div class="main-page">
        <UiContainer class="main-page__wrapper">
            {{ mainStore.isAuthUser }}
            <MainPageCategories class="main-page__categories" />
            <Newsline class="main-page__news" />
            <MainPageBanners class="main-page__banners" />
            <MainPageAdvantages v-if="false" class="main-page__advantages" />
            <MainPageRecommendations class="main-page__recommendations" />
        </UiContainer>
    </div>
</template>
<script setup lang="ts">
import {useMainStore} from "~/store/useMainStore";

useHead({
    title: "Kartoteka.ru",
});
const mainStore = useMainStore()

</script>

<style scoped lang="scss">
@import "@/pages/styles/main-page.scss";
</style>
