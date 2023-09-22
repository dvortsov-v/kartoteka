<template>
    <ul class="catalog-categories">
        <li v-if="isCatalogCategory" class="catalog-categories__item">
            <NuxtLink to="/catalog" class="catalog-category">
                <svg-icon name="arrow-left" class="catalog-category__icon" />
                <span class="catalog-category__name catalog-category__name--all">Все категории</span>
            </NuxtLink>
        </li>
        <li
            v-for="category in categories"
            :key="`catalog-category-${category.id}`"
            class="catalog-categories__item"
        >
            <NuxtLink :to="`/catalog/${category.id}`" class="catalog-category">
                <span class="catalog-category__name">{{category.name}}</span>
                <span v-if="category.count" class="catalog-category__count">{{category.count}}</span>
            </NuxtLink>
        </li>
    </ul>
</template>
<script setup lang="ts">
import {Category} from "~/definitions/interfaces/Categories";

defineProps({
    isCatalogCategory: Boolean,
    categories: {
        type: Array as PropType<Category[]>,
        default: () => [],
    },
})
</script>

<style scoped lang="scss">
@import "@/components/Catalog/styles/catalog-categories.scss";
</style>
