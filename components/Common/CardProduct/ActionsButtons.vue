<template>
    <div class="card-product-actions-buttons">
        <UiButton
            v-if="isCompactedView"
            @click="handleFavoritesClick(product, userToken)"
            :theme="themeFavoriteBtn(product.id)"
            class="card-product-actions-buttons__favorites"
        >
            <svg-icon :name="iconFavoriteBtn(product.id)" class="card-product-actions-buttons__icon" />
        </UiButton>
        <UiButton
            v-if="!isCompactedView"
            @click="modalConsultation.open"
            theme="gray"
            class="card-product-actions-buttons__consultation card-product-actions-button"
        >
            <span class="card-product-actions-button__text">
                Консультация
            </span>
        </UiButton>
        <UiButton
            v-if="!isCompactedView"
            @click="handleFavoritesClick(product, userToken)"
            :theme="themeFavoriteBtn(product.id)"
            class="card-product-actions-buttons__favorites card-product-actions-buttons__favorites--mob"
        >
            <svg-icon :name="iconFavoriteBtn(product.id)" class="card-product-actions-buttons__icon" />
        </UiButton>
        <UiButton
            @click="modalOffer.open"
            class="card-product-actions-buttons__buy card-product-actions-button"
        >
            <span class="card-product-actions-button__text">
                Связаться
            </span>
        </UiButton>
    </div>
</template>

<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import {Product} from "~/definitions/interfaces/Products";
import {useFavorites} from "~/composable/useFavorites";
import {useModalList} from "~/components/Modals/composable/useModalList";

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
const userToken = useCookie('userToken');


const {modalOffer, modalConsultation} = useModalList()

const {
    themeFavoriteBtn,
    iconFavoriteBtn,
    handleFavoritesClick,
} = useFavorites();
</script>

<style scoped lang="scss">
@import "@/components/Common/CardProduct/styles/card-product-actions-buttons.scss";
</style>
