<template>
    <ul class="catalog-categories">
        <li
            v-for="category in categories"
            :key="`catalog-category-${category.id}`"
            class="catalog-categories__item"
        >
            <NuxtLink :to="`/catalog/${category.name}`" class="catalog-category">
                <span class="catalog-category__name">{{category.name}}</span>
                <span v-if="category.count" class="catalog-category__count">{{category.count}}</span>
            </NuxtLink>
        </li>
    </ul>
</template>
<script setup lang="ts">
import {getCategories} from "~/api/CategoriesApi";

const categories = await getCategories()
</script>

<style scoped lang="scss">
@import "@/components/Catalog/styles/catalog-categories.scss";
</style>
