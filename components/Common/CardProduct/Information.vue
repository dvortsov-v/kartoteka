<template>
    <div class="card-product-information">
        <picture @click="navigateTo(`/catalog/product/${product.id}`)" class="card-product-information__picture">
            <img
                :src="product.images[0]"
                alt="card-product"
                class="card-product-information__img"
            >
        </picture>
        <div class="card-product-information__description">
            <h3 @click="navigateTo(`/catalog/product/${product.id}`)" class="card-product-information__title">
                {{ product.name }}
            </h3>
            <p
                v-if="!isCompactedView"
                @click="navigateTo(`/catalog/product/${product.id}`)"
                class="card-product-information__text"
            >
                {{ product.description }}
            </p>
        </div>
        <div class="card-product-information__addition">
            <h3 class="card-product-information__price">{{ parcePrice(product.price || '') }} ₽</h3>
            <div
                v-if="!isCompactedView"
                class="card-product-information__status card-product-status card-product-status--orange"
            >
                {{ product.status }}
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
</script>

<style scoped lang="scss">
@import "@/components/Common/CardProduct/styles/card-product-information.scss";
</style>
