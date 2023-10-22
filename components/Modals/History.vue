<template>
    <VueFinalModal>
        <div class="modal-catalog-history">
            <button class="modal-catalog-history__switch modal-catalog-history__switch--prev">
                <picture class="modal-catalog-history__switch-picture">
                    <source srcset='/images/img-1.webp' type="image/webp">
                    <img srcset='/images/img-1.jpg' class="modal-catalog-history__switch-img" alt="">
                </picture>
                <span class="modal-catalog-history__switch-name">Торги по банкротству</span>
            </button>
            <div class="modal-history">
                <button @click="emit('close')" class="modal-history__close">
                    <svg-icon class="modal-history__close-svg" name="close"/>
                </button>
                <button class="modal-history__button modal-history__button--prev">
                    <svg-icon name="arrow-right" class="modal-history__button-icon"/>
                </button>
                <div class="modal-history__wrap">
                    <Swiper
                        v-if="history"
                        v-bind="sliderOption"
                        :modules="sliderModules"
                        :pagination="sliderOption.pagination"
                        class="modal-history__swiper history-swiper"
                    >
                        <SwiperSlide
                            v-for="img in history.images"
                            class="history-swiper__item"
                        >
                            <picture class="history-swiper__picture">
                                <img
                                    :src="img"
                                    :alt="history.title"
                                    class="history-swiper__img"
                                >
                            </picture>
                        </SwiperSlide>
                        <div class="modal-history__pagination"></div>
                    </Swiper>
                    <div class="history-swiper__info">
                        <h4 class="history-swiper__title">
                            {{history.title}}
                        </h4>
                        <p class="history-swiper__text" v-html="history.html"></p>
                        <UiButton class="history-swiper__btn ">
                            Перейти в каталог
                        </UiButton>
                    </div>
                </div>
                <button class="modal-history__button modal-history__button--next">
                    <svg-icon name="arrow-right" class="modal-history__button-icon"/>
                </button>
            </div>
            <button class="modal-catalog-history__switch modal-catalog-history__switch--next">
                <picture class="modal-catalog-history__switch-picture">
                    <source srcset='/images/img-2.webp' type="image/webp">
                    <img srcset='/images/img-2.jpg' class="modal-catalog-history__switch-img" alt="">
                </picture>
                <span class="modal-catalog-history__switch-name">Трудовое право 2023</span>
            </button>
        </div>
    </VueFinalModal>
</template>

<script setup lang="ts">
    import { VueFinalModal } from 'vue-final-modal';
    import { History } from "~/definitions/interfaces/History";
    
    defineProps({
        history: {
            type: Object as PropType<History>,
            default: () => ({}),
        }
    })

    const sliderOption = {
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
        navigation: {
            nextEl: '.modal-history__button--next',
            prevEl: '.modal-history__button--prev',
        },
        pagination: {
            el: ".modal-history__pagination",
        },
    }
    const sliderModules = [SwiperNavigation , SwiperEffectCreative , SwiperPagination , SwiperAutoplay];

    const emit = defineEmits(['close']);
</script>

<style scoped lang="scss">
@import '@/components/Modals/styles/modal-catalog-history.scss';
</style>