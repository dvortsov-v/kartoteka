<template>
    <ul
        :class="classesList"
        class="product-list"
    >
        <li v-for="product in listProducts" class="product-list__item">
            <CommonCardProduct :isProductInOrder="isProductInOrder" :isCompactedView="isCompactedView" :product="product"/>
        </li>
    </ul>
</template>
<script setup lang="ts">

import {PropType} from "@vue/runtime-core";
import {Product} from "~/definitions/interfaces/Products";

const props = defineProps({
    isCompactedView: {
        type: Boolean,
        default: false,
    },
    listProducts: {
        type: Array as PropType<Product[]>,
        default: () => [],
    },
    isProductInOrder: {
        type: Boolean,
        default: false,
    },

})

const classesList = computed(() => ({
    'product-list--is-compacted-view': props.isCompactedView,
}))
</script>

<style scoped lang="scss">
@import "@/components/Common/styles/product-list.scss";
</style>
