<template>
    <div v-if="news" class="news-list-page__box news-item">
        <picture class="news-item__picture">
            <source
                :srcset="news.image"
                type="image/webp"
            >
            <img
                :src="news.image"
                alt="News Picture"
                class="news-item__img"
            >
        </picture>
        <div class="news-item__info">
            <NuxtLink :to="`/news/${news.id}`" class="news-item__link">
                <h4 class="news-item__title">{{ news.title }}</h4>
            </NuxtLink>
            <span class="news-item__date">
                20.03.2022
                <span class="news-item__time">12:32</span>
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import {News} from "~/api/NewsApi";

defineProps({
    news: {
        type: Object as PropType<News>,
        default: () => {},
    }
})

const getUrlNews = (id: number) => ({name: 'news', params: {id}});
</script>

<style scoped lang="scss">
@import '@/components/News/styles/news-item.scss';
</style>
