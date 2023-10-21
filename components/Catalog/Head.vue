<template>
    <div class="catalog-head">
        <h1 class="catalog-head__title h1">{{ namePage }}</h1>
        <span class="catalog-head__count">{{ count }} {{getPluralFormGoods(count)}}</span>
    </div>
</template>
<script setup lang="ts">
import {getPluralForm} from "~/composable/getPluralForm";

defineProps({
    count: {
        type: Number,
        default: 0,
    },
    namePage: String,
})

const getPluralFormGoods = (countGoods: number) => getPluralForm(countGoods, [
    'товар',
    'товара',
    'товаров',
])
</script>

<style scoped lang="scss">
@import "@/components/Catalog/styles/catalog-head.scss";
</style>
