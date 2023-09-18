<template>
    <div class="news-list-page">
        <UiContainer class="news-list-page__wrapper">
            <UiBreadcrumbs class="news-list-page__breadcrumbs"/>
            <h1 class="news-list-page__title">Новости</h1>
            <ul class="news-list-page__list">
                <li v-for="newsItem in newsList" class="news-list-page__item">
                    <NewsItem class="news-list-page__box" :news="newsItem" />
                </li>
            </ul>
            <div class="news-list-page__navigation news-list-page-navigation">
                <UiPagination countPage="5" class="news-list-page-navigation__pagination" />
                <UiButton theme="transparent" class="news-list-page-navigation__more">
                    <svg-icon
                        name="adding"
                        class="news-list-page-navigation__icon"
                    />
                    <span class="news-list-page-navigation__text">
                        Показать ещё
                    </span>
                </UiButton>
                <span class="news-list-page-navigation__show news-list-page-navigation-show">
                    <span class="news-list-page-navigation-show__text">Показано:</span>
                    <span class="news-list-page-navigation-show__count">50 из 120</span>
                </span>
            </div>
        </UiContainer>
    </div>
</template>

<script setup lang="ts">
import {getNewsListRequest} from "~/api/NewsApi";
useHead({
    title: 'Новости',
});
definePageMeta({
    name: 'Новости',
});

const newsList = await getNewsListRequest()

</script>

<style scoped lang="scss">
@import "@/pages/news/styles/news-list-page.scss";
</style>
