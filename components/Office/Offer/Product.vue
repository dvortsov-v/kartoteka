<template>
    <div
        :class="classesOfferProduct"
        class="offer-product"
    >
        <div class="offer-product__base">
            <div class="offer-product__left">
                <picture @click="navigateTo(`/catalog/product/${product.id}`)" class="offer-product__picture">
                    <img
                        v-if="product.images && product.images.length > 0"
                        :src="product.images[0]"
                        alt=""
                        class="offer-product__img"
                    >
                </picture>
                <h5 class="offer-product__name">{{ product.name }}</h5>
            </div>
            <div class="offer-product__right">
                <div class="offer-product__box">
                    <span class="offer-product__count">1 шт.</span>
                    <span class="offer-product__price">2 500 000 ₽</span>
                </div>
                <div class="offer-product__box">
                    <CommonStatus theme="green" class="offer-product__status">Активно</CommonStatus>
                    <div class="offer-product__actions offer-product-actions">
                        <button
                            @click="setIsShowAction"
                            type="button"
                            class="offer-product-actions__show"
                        >
                            <svg-icon name="dots" class="offer-product-actions__icon"/>
                        </button>
                        <div
                            v-if="isShowAction"
                            class="offer-product-actions__wrap"
                        >
                            <div class="offer-product-actions__list">
                                <button
                                    type="button"
                                    class="offer-product-actions__button"
                                >
                                    Редактировать
                                </button>
                                <button
                                    type="button"
                                    class="offer-product-actions__button"
                                >
                                    Снять с продажи
                                </button>

                            </div>
                            <div class="offer-product-actions__bottom">
                                <button
                                    type="button"
                                    class="offer-product-actions__button"
                                >
                                    Удалить

                                    <svg-icon name="trash" class="offer-product-actions__del" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="offer-product__additional">
            <span class="offer-product__info">
                <span class="offer-product__date">20.03.2022, 12:32</span>
                <span class="offer-product__geo">Республика Башкортостан</span>
            </span>
            <div
                :class="classesStatisticProduct"
                class="offer-product__statistic offer-product-statistic"
            >
                <div class="offer-product-statistic__item">
                    <span class="offer-product-statistic__name">Просмотров</span>
                    <span class="offer-product-statistic__value">458</span>
                </div>
                <div class="offer-product-statistic__item">
                    <span class="offer-product-statistic__name">В избранном</span>
                    <span class="offer-product-statistic__value">5 896</span>
                </div>
                <div class="offer-product-statistic__item">
                    <span class="offer-product-statistic__name">Заявок</span>
                    <span class="offer-product-statistic__value">89</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {PropType} from "@vue/runtime-core";
import {Product} from "~/definitions/interfaces/Products";

const props = defineProps({
    isCompactedView: {
        type: Boolean,
        default: false,
    },
    product: {
        type: Object as PropType<Product>,
        default: () => {},
    },
})
const isShowAction = ref(false);

const setIsShowAction = () => {
    isShowAction.value = !isShowAction.value
}
const classesOfferProduct = computed(() => ({
    'offer-product--is-compacted-view': props.isCompactedView,
}))
const classesStatisticProduct = computed(() => ({
    'offer-product-statistic--is-compacted-view': props.isCompactedView,
}))
</script>

<style scoped lang="scss">
@import "@/components/Office/Offer/styles/offer-product.scss";
</style>
