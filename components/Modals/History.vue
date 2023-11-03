<template>
    <VueFinalModal>
        <div class="modal-catalog-history">
            <NewslineHistory
                v-if="previousHistory"
                :history="previousHistory"
                class="modal-catalog-history__switch modal-catalog-history__switch--prev"
            />
            <div class="modal-history">
                <button @click="emit('close')" class="modal-history__close">
                    <svg-icon class="modal-history__close-svg" name="close"/>
                </button>
                <button
                    @click="setPreviousHistory"
                    class="modal-history__button modal-history__button--prev"
                >
                    <svg-icon name="arrow-right" class="modal-history__button-icon"/>
                </button>
                <div class="modal-history__wrap">
                    <Swiper
                        :key="`slider-history-${selectHistory.id}`"
                        @swiper="onSwiper"
                        v-if="selectHistory"
                        v-bind="sliderOption"
                        :modules="sliderModules"
                        :pagination="sliderOption.pagination"
                        class="modal-history__swiper history-swiper"
                    >
                        <SwiperSlide
                            v-for="img in selectHistory.images"
                            class="history-swiper__item"
                        >
                            <picture class="history-swiper__picture">
                                <img
                                    :src="img"
                                    :alt="selectHistory.title"
                                    class="history-swiper__img"
                                >
                            </picture>
                        </SwiperSlide>
                        <div class="modal-history__pagination"></div>
                    </Swiper>
                    <div class="history-swiper__info">
                        <h4 class="history-swiper__title">
                            {{selectHistory.title}}
                        </h4>
                        <p class="history-swiper__text" v-html="selectHistory.html"></p>
                        <UiButton class="history-swiper__btn ">
                            Перейти в каталог
                        </UiButton>
                    </div>
                </div>
                <button
                    @click.prevent="setNextHistory"
                    class="modal-history__button modal-history__button--next">
                    <svg-icon name="arrow-right" class="modal-history__button-icon"/>
                </button>
            </div>
            <NewslineHistory
                v-if="nextHistory"
                :history="nextHistory"
                class="modal-catalog-history__switch modal-catalog-history__switch--next"
            />
        </div>
    </VueFinalModal>
</template>

<script setup lang="ts">
    import { VueFinalModal } from 'vue-final-modal';
    import { History } from "~/definitions/interfaces/History";
    import {PropType} from "@vue/runtime-core";

    const props = defineProps({
        historyList: {
            type: Array as PropType<History[]>,
            default: () => ([]),
        },
        historyId: {
            type: Number,
            default: 0,
        }
    })

    const sliderOption = {
        noSwiping: true,
        rewind: false,
        loop: false,
        allowTouchMove: false,
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        watchOverflow: true,
        autoHeight: true,
        effect: "creative",
        creativeEffect: {
            prev: {
                shadow: true,
                opacity: .2,
                translate: ["-10%", 0, -1],
            },
            next: {
                translate: ["100%", 0, 0],
            },
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        // navigation: {
        //     nextEl: '.modal-history__button--next',
        //     prevEl: '.modal-history__button--prev',
        // },
        pagination: {
            el: ".modal-history__pagination",
        },
    }
    const sliderModules = [SwiperNavigation , SwiperEffectCreative , SwiperPagination , SwiperAutoplay];

    const emit = defineEmits(['close']);
    const activeId = ref(props.historyId);
    const swiperInstance = ref()

    function onSwiper(swiper: any) {
        swiperInstance.value = swiper
    }
    const selectHistory = computed(() => props.historyList?.find(history => history.id === unref(activeId)));
    const previousHistory = computed(() => props.historyList?.find(history => history.id === unref(activeId) - 1));
    const nextHistory = computed(() => props.historyList?.find(history => history.id === unref(activeId) + 1));
    const setPreviousHistory = () => {
        if(unref(swiperInstance).realIndex !== 0) {
            swiperInstance.value.slidePrev();
        } else {
            activeId.value = activeId.value - 1;
        }
    }
    const setNextHistory = () => {
        if(unref(selectHistory)?.images.length - 1 !== unref(swiperInstance).realIndex) {
            swiperInstance.value.slideNext();
        } else {
            activeId.value = activeId.value + 1 ;
        }
    }
</script>

<style scoped lang="scss">
@import '@/components/Modals/styles/modal-catalog-history.scss';
</style>
