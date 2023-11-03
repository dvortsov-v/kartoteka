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
                v-for="history in historyList"
                :key="`category-${history.id}`"
                class="newsline__item"
            >
                <NewslineHistory
                    @click="hendleClickNewsLine(history.id)"
                    :history="history"
                    class="newsline__elem news"
                />
            </SwiperSlide>
        </Swiper>
        <NuxtLink class="newsline__button newsline__button--next">
            <svg-icon name="arrow-right" class="newsline__icon"/>
        </NuxtLink>
    </div>
</template>
<script setup lang="ts">
import {useModalList} from "~/components/Modals/composable/useModalList";
import {news} from '@/constants/news';
import {useHistoryList} from '~/composable/request/useHistory';

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
        1344: {
            slidesPerView: 9,
        },
        1025: {
            slidesPerView: 6,
            spaceBetween: 8,
        },
        768: {
            slidesPerView: 5.5,
        },
        650: {
            slidesPerView: 4.5,
        },
        500: {
            slidesPerView: 3.5,
            spaceBetween: 16,
        },
        0: {
            slidesPerView: 2.5,
            spaceBetween: 8,
        }
    },
}
const sliderModules = [SwiperNavigation];
const {
    modalHistory,
} = useModalList()

const {
    historyList,
    getHistoryList,
} = useHistoryList()

getHistoryList()

const hendleClickNewsLine = (historyId: number) => {
    const {
        open:openModalHistory,
    } = modalHistory(unref(historyList), historyId)

    openModalHistory()
};

</script>

<style scoped lang="scss">
@import "@/components/Newsline/styles/newsline.scss";
</style>
