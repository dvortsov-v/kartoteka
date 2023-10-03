<template>
    <div
        v-if="product"
        :class="classesCardProduct"
        class="card-product"
    >
        <CommonCardProductInformation :product="product" :isCompactedView="isCompactedView" class="card-product__information" />
        <div
            :class="classesCardProductActions"
            class="card-product-actions card-product__actions"
        >
            <div class="card-product-actions__box">
                <UiButton
                    v-if="!isCompactedView && !isProductInOrder"
                    :theme="themeFavoriteBtn(product.id)"
                    class="card-product-actions__favorites"
                >
                    <svg-icon :name="iconFavoriteBtn(product.id)" class="card-product-actions__icon" />
                </UiButton>
                <div class="card-product-actions__addition card-product-actions-addition">
                    <span class="card-product-actions-addition__number">№ 124115</span>
                    <span class="card-product-actions-addition__date">20.03.2022, 12:32</span>
                    <span class="card-product-actions-addition__city">Республика Башкортостан</span>
                </div>
            </div>
            <CommonCardProductActionsButtons
                v-if="!isProductInOrder"
                class="card-product-actions__buttons"
                :product="product"
                :isCompactedView="isCompactedView"
            />
            <CommonCardProductOrderStatus v-else class="card-product-actions__status">
                В обработке
            </CommonCardProductOrderStatus>
        </div>
    </div>
</template>
<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import {Product} from "~/definitions/interfaces/Products";
import {useFavorites} from "~/composable/useFavorites";

const props = defineProps({
    isCompactedView: {
        type: Boolean,
        default: false,
    },
    product: {
        type: Object as PropType<Product>,
        default: () => {},
    },
    isProductInOrder: {
        type: Boolean,
        default: false,
    },
})
const classesCardProduct = computed(() => ({
    'card-product--is-compacted-view': props.isCompactedView,
}))
const classesCardProductActions = computed(() => ({
    'card-product-actions--is-order': props.isProductInOrder,
}))

const {
    themeFavoriteBtn,
    iconFavoriteBtn,
} = useFavorites();
</script>

<style scoped lang="scss">
@import "@/components/Common/CardProduct/styles/card-product.scss";
</style>
