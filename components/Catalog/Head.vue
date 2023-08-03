<template>
    <div class="catalog-head">
        <h1 class="catalog-head__title">namePage</h1>
        <span class="catalog-head__count">{{ count }} товаров</span>
    </div>
</template>
<script setup lang="ts">
defineProps({
    count: Number,
    namePage: String,
})
</script>

<style scoped lang="scss">
@import "@/components/Catalog/styles/catalog-head.scss";
</style>
