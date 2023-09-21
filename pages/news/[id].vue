<template>
    <div class="news-page">
        <UiContainer class="news-page__wrapper">
            <UiBreadcrumbs class="news-page__breadcrumbs" />
            <main class="news-page__main">
                <h1 v-if="news.title" class="news-page__title">{{ news.title }}</h1>
                <p class="news-page__date">20.03.2022, 12:32</p>
                <picture v-if="news.image" class="news-page__picture">
                    <img
                        :src="news.image"
                        alt="News Picture"
                        class="news-page__img"
                    >
                </picture>
                <div
                    v-if="news.html"
                    class="news-page__text"
                    v-html="news.html"
                >
                </div>
            </main>
            <div class="news-page__additional news-page-additional">
                <NuxtLink to="/news" class="news-page-additional__all">Все новости</NuxtLink>
                <div class="news-page-additional__wrap">
                    <span class="news-page-additional__text">Поделиться:</span>
                    <CommonSocial class="news-page-additional__socials" />
                </div>
            </div>
            <div class="news-page__other news-other">
                <h3 class="news-other__title">Другие новости</h3>
                <ul class="news-other__list">
                    <li v-for="newsItem in filteredNews" class="news-other__item">
                        <NewsItem class="news-other__box" :news="newsItem"/>
                    </li>
                </ul>
            </div>
        </UiContainer>
    </div>
</template>
<script setup lang="ts">
import {getNewsListFilterRequest, getNewsRequest} from "~/api/NewsApi";
import {News} from "~/definitions/interfaces/News";

const route = useRoute();
const news: News | object = await getNewsRequest(route.params.id);
const filteredNews: News | object = await getNewsListFilterRequest(2);
</script>

<style scoped lang="scss">
@import '@/pages/news/styles/news-page.scss';
</style>
