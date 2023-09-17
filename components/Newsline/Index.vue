<template>
    <div class="newsline">
        <button  type="button" class="newsline__button newsline__button--prev">
            <svg-icon name="arrow-right" class="newsline__icon"/>
        </button>
        <Swiper
            v-if="news.length > 0"
            v-bind="sliderOption"
            :modules="sliderModules"
            class="newsline__list"
        >
            <SwiperSlide
                v-for="newsItem in news"
                :key="`category-${newsItem.id}`"
                class="newsline__item"
            >
                <button type="button" class="newsline__elem news">
                    <picture class="news__picture">
                        <source
                            :srcset="`/images/${newsItem.img}.webp`"
                            type="image/webp"
                        >
                        <img
                            :src="`/images/${newsItem.img}.jpg`"
                            :alt="newsItem.name"
                            class="news__img"
                        >
                    </picture>
                    <span class="news__name">{{newsItem.name}}</span>
                </button>
            </SwiperSlide>
        </Swiper>
        <NuxtLink class="newsline__button newsline__button--next">
            <svg-icon name="arrow-right" class="newsline__icon"/>
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
import {news} from '@/constants/news';
const sliderOption = {
    observer: true,
    observeParents: true,
    slidesPerView: 9,
    spaceBetween: 8,
    watchOverflow: true,
    navigation: {
        nextEl: '.newsline__button--next',
        prevEl: '.newsline__button--prev',
    },
    breakpoints: {
        1025: {
            slidesPerView: 9,
            spaceBetween: 8,
        },
        320: {
            slidesPerView: 5.5,
            spaceBetween: 16,
        }
    },
}
const sliderModules = [SwiperNavigation];



</script>

<style scoped lang="scss">
@import "@/components/Newsline/styles/newsline.scss";
</style>
