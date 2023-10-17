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
                        v-if="history.length > 0"
                        v-bind="sliderOption"
                        :modules="sliderModules"
                        :pagination="sliderOption.pagination"
                        class="modal-history__swiper history-swiper"
                    >
                        <SwiperSlide
                            v-for="historyItem in history"
                            :key="`category-${historyItem.id}`"
                            class="history-swiper__item"
                        >
                            <picture class="history-swiper__picture">
                                <source
                                    :srcset="`/images/${historyItem.img}.webp`"
                                    type="image/webp"
                                >
                                <img
                                    :src="`/images/${historyItem.img}.jpg`"
                                    :alt="historyItem.name"
                                    class="history-swiper__img"
                                >
                            </picture>
                        </SwiperSlide>
                    </Swiper>
                    <div class="modal-history__pagination"></div>
                    <div class="history-swiper__info">
                        <h4 class="history-swiper__title">
                            Как найти коммерческую недвижимость
                        </h4>
                        <p class="history-swiper__text">
                            Офисные здания, объекты промышленности, гостиницы, магазины и торговые центры, сельскохозяйственные предприятия, склады и гаражи  любой из объектов коммерческой недвижимости можно продавать, покупать, дарить, передавать в наследство и сдавать в аренду.
                        </p>
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
import { history } from '@/constants/history';

const sliderOption = {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 0,
    watchOverflow: true,
    autoHeight: true,
    navigation: {
        nextEl: '.modal-history__button--next',
        prevEl: '.modal-history__button--prev',
    },
    pagination: {
        el: "modal-history__pagination",
    },
}
const sliderModules = [SwiperNavigation];

const emit = defineEmits(['close'])
</script>

<style scoped lang="scss">
@import '@/components/Modals/styles/modal-catalog-history.scss';
</style>