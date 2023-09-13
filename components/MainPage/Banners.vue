<template>
    <Swiper
        v-if="banners.length > 0"
        :modules="sliderModules"
        :loop="sliderOption.loop"
        :autoplay="sliderOption.autoplay"
        :observer="sliderOption.observer"
        :observeParents="sliderOption.observeParents"
        :pagination="sliderOption.pagination"
        class="main-page-banners"
    >
        <SwiperSlide
            v-for="banner in banners"
            :key="`banner-${banner.id}`"
            class="main-page-banners__slide"
        >
            <picture class="main-page-banners__picture">
                <source
                    :srcset="`/images/${banner.img}.webp`"
                    type="image/webp"
                >
                <img
                    :src="`/images/${banner.img}.jpg`"
                    :alt="banner.id"
                    class="main-page-banners__img"
                >
            </picture>
        </SwiperSlide>
        <div class="main-page-banners__pagination"></div>
    </Swiper>
</template>
<script setup lang="ts">
import {banners} from '@/constants/banners';

const sliderModules = [SwiperPagination];
const sliderOption = {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    observer: true,
    observeParents: true,
    pagination: {el: '.main-page-banners__pagination'},
}

</script>

<style scoped lang="scss">
@import "@/components/MainPage/styles/main-page-banners.scss";
</style>
