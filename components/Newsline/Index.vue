<template>
    <div class="newsline">
        <button  type="button" class="newsline__link newsline__link--prev">
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
                </button>
            </SwiperSlide>
        </Swiper>
        <NuxtLink class="newsline__link newsline__link--next">
            <svg-icon name="arrow-right" class="newsline__icon"/>
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
import {news} from '@/constants/news';
const sliderOption = {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    observer: true,
    observeParents: true,
    slidesPerView: 9,
    spaceBetween: 8,
    navigation: {
        nextEl: '.newsline__link--next',
        // prevEl: '.swiper-button-prev',
    },
}
const sliderModules = [SwiperNavigation];



</script>

<style scoped lang="scss">
@import "@/components/Newsline/styles/newsline.scss";
</style>
