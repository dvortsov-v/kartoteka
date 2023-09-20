<template>
    <div
        v-if="product"
        :class="classesCardProduct"
        class="card-product"
    >
        <div class="card-product__information card-product-information">
            <picture class="card-product-information__picture">
                <img
                    :src="product.image"
                    :alt="product.name"
                    class="card-product-information__img"
                >
            </picture>
            <div class="card-product-information__description">
                <h3 class="card-product-information__title">
                    {{ product.name }}
                </h3>
                <p
                    v-if="!isCompactedView"
                    class="card-product-information__text"
                >
                    {{ product.description }}
                </p>
            </div>
            <div class="card-product-information__addition">
                <h3 class="card-product-information__price">{{ parcePrice(product.price) }} ₽</h3>
                <div
                    v-if="!isCompactedView"
                    class="card-product-information__status card-product-status card-product-status--orange"
                >
                    Стоимость ниже оценочной на 20%
                </div>
                <div
                    v-if="!isCompactedView"
                    class="card-product-information__incorporate card-product-incorporate"
                >
                    <span class="card-product-incorporate__text">
                        В составе
                        <span class="card-product-incorporate__text--bold">лота №3</span>
                    </span>
                    <span class="card-product-incorporate__price">
                        стоимостью 36 314 305 ₽
                    </span>
                </div>
            </div>
        </div>
        <div class="card-product-actions card-product__actions">
            <div class="card-product-actions__box">
                <UiButton
                    v-if="!isCompactedView"
                    theme="gray"
                    class="card-product-actions__favorites"
                >
                    <svg-icon name="star-line" class="card-product-actions__icon" />
                </UiButton>
                <div class="card-product-actions__addition card-product-actions-addition">
                    <span class="card-product-actions-addition__number">№ 124115</span>
                    <span class="card-product-actions-addition__date">20.03.2022, 12:32</span>
                    <span class="card-product-actions-addition__city">Республика Башкортостан</span>
                </div>
            </div>
            <div class="card-product-actions__buttons">
                <UiButton
                    v-if="isCompactedView"
                    theme="gray"
                    class="card-product-actions__favorites"
                >
                    <svg-icon name="star-line" class="card-product-actions__icon" />
                </UiButton>
                <UiButton
                    v-if="!isCompactedView"
                    theme="gray"
                    class="card-product-actions__consultation card-product-actions-button"
                >

                    <span class="card-product-actions-button__text">
                        Консультация
                    </span>
                </UiButton>
                <UiButton class="card-product-actions__buy card-product-actions-button">
                    <span class="card-product-actions-button__text">
                        Хочу купить
                    </span>
                </UiButton>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import {Product} from "~/definitions/interfaces/Products";
import {parcePrice} from "~/composable/parcePrice";

const props = defineProps({
    isCompactedView: {
        type: Boolean,
        default: false,
    },
    product: {
        type: Object as PropType<Product>,
        default: () => {},
    }
})
const classesCardProduct = computed(() => ({
    'card-product--is-compacted-view': props.isCompactedView,
}))

</script>

<style scoped lang="scss">
@import "@/components/Common/styles/card-product.scss";
</style>
