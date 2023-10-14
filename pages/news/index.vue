<template>
    <div class="news-list-page">
        <UiContainer class="news-list-page__wrapper">
            <UiBreadcrumbs class="news-list-page__breadcrumbs"/>
            <h1 class="news-list-page__title h1">Новости</h1>
            <ul class="news-list-page__list">
                <li v-for="newsItem in newsList" class="news-list-page__item">
                    <NewsItem class="news-list-page__box" :news="newsItem" />
                </li>
            </ul>
            <UiPagination :paginationDate="paginationDate" class="news-list-page__navigation" />
        </UiContainer>
    </div>
</template>

<script setup lang="ts">
import {useNewsList} from "~/composable/request/useNewsList";

useHead({
    title: 'Новости',
});
definePageMeta({
    name: 'Новости',
});

const {
    newsList,
    paginationDate,
    getNewsList,
} = useNewsList()

getNewsList();

const currentPage = ref(1);
const totalPages = ref(10);

</script>

<style scoped lang="scss">
@import "@/pages/news/styles/news-list-page.scss";
</style>
