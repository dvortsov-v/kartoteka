<template>
    <ul
        :class="classesList"
        class="catalog-list"
    >
        <li v-for="product in listProducts" class="catalog-list__item">
            <CommonCardProduct :isCompactedView="isCompactedView" :product="product"/>
        </li>
    </ul>
</template>
<script setup lang="ts">
import {getProducts} from "~/api/ProductsApi";

const props = defineProps({
    isCompactedView: {
        type: Boolean,
        default: false,
    },
})

const listProducts = await getProducts();

const classesList = computed(() => ({
    'catalog-list--is-compacted-view': props.isCompactedView,
}))
</script>

<style scoped lang="scss">
@import "@/components/Catalog/styles/catalog-list.scss";
</style>
