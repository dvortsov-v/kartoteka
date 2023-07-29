<template>
    <div class="newsline">
        <ul class="newsline__list">
            <li
                v-for="newsItem in news"
                :key="`category-${newsItem.id}`"
                class="newsline__item"
            >
                <div class="newsline__elem news">
                    <picture class="news__picture">
                        <source
                            :srcset="`assets/images/${newsItem.img}.webp`"
                            type="image/webp"
                        >
                        <img
                            :src="`assets/images/${newsItem.img}.jpg`"
                            :alt="newsItem.name"
                            class="news__img"
                        >
                    </picture>
                    <span class="news__name">{{newsItem.name}}</span>
                </div>
            </li>
        </ul>
        <NuxtLink class="newsline__link">
            <svg-icon name="arrow-right" class="newsline__icon"/>
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
import {news} from '@/constants/news'
</script>

<style scoped lang="scss">
@import "@/components/Newsline/styles/newsline.scss";
</style>
