<template>
    <div class="main-page-categories">
        <ul v-if="categoriesStore.categories" class="main-page-categories__list">
            <li
                v-for="category in categoriesStore.categories"
                :key="`main-page-category-${category.id}`"
                class="main-page-categories__item"
            >
                <NuxtLink :to="`/catalog/${category.id}`" class="main-page-categories__category main-page-category">
                    <span class="main-page-category__name">{{category.name}}</span>
                    <span v-if="category.count" class="main-page-category__count">{{category.count}}</span>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import {useCategoriesStore} from "~/store/useCategoriesStore";
const categoriesStore =  useCategoriesStore()

</script>

<style scoped lang="scss">
@import "@/components/MainPage/styles/main-page-categories.scss";
</style>
