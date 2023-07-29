<template>
    <div class="main-page-categories">
        <ul
            v-for="category in categories"
            :key="`category-${category.id}`"
            class="main-page-categories__list"
        >
            <li class="main-page-categories__item">
                <div class="main-page-categories__category main-page-category">
                    <span class="main-page-category__name">{{category.name}}</span>
                    <span class="main-page-category__count">{{category.count}}</span>
                </div>
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
