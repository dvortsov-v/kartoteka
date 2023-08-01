<template>
    <div class="main-page-categories">
        <ul class="main-page-categories__list">
            <li
                v-for="category in categories"
                :key="`main-page-category-${category.id}`"
                class="main-page-categories__item"
            >
                <NuxtLink class="main-page-categories__category main-page-category">
                    <span class="main-page-category__name">{{category.name}}</span>
                    <span class="main-page-category__count">{{category.count}}</span>
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import {categories} from '@/constants/categories'
</script>

<style scoped lang="scss">
@import "@/components/MainPage/styles/main-page-categories.scss";
</style>
