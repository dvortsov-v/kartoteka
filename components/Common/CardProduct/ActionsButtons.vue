<template>
    <div class="card-product-actions-buttons">
        <UiButton
            v-if="isCompactedView"
            theme="gray"
            class="card-product-actions-buttons__favorites"
        >
            <svg-icon name="star-line" class="card-product-actions-buttons__icon" />
        </UiButton>
        <UiButton
            v-if="!isCompactedView"
            theme="gray"
            class="card-product-actions-buttons__consultation card-product-actions-button"
        >
            <span class="card-product-actions-button__text">
                Консультация
            </span>
        </UiButton>
        <UiButton
            v-if="!isCompactedView"
            theme="gray"
            class="card-product-actions-buttons__favorites card-product-actions-buttons__favorites--mob"
        >
            <svg-icon name="star-line" class="card-product-actions-buttons__icon" />
        </UiButton>
        <UiButton class="card-product-actions-buttons__buy card-product-actions-button">
            <span class="card-product-actions-button__text">
                Хочу купить
            </span>
        </UiButton>
    </div>
</template>

<script setup lang="ts">
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
    }
})
</script>

<style scoped lang="scss">
@import "@/components/Common/CardProduct/styles/card-product-actions-buttons.scss";
</style>
