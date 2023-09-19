<template>
    <ul
        :class="classesList"
        class="catalog-list"
    >
        <li v-for="product in 18" class="catalog-list__item">
            <CommonCardProduct :isCompactedView="isCompactedView" :product="product"/>
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
    }
})


const classesList = computed(() => ({
    'catalog-list--is-compacted-view': props.isCompactedView,
}))
</script>

<style scoped lang="scss">
@import "@/components/Catalog/styles/catalog-list.scss";
</style>
