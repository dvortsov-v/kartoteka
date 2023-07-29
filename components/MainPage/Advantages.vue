<template>
    <div class="main-page-advantages">
        <ul class="main-page-advantages__list">
            <li
                v-for="advantage in advantages"
                :key="`category-${advantage.id}`"
                class="main-page-advantages__item"
            >
                <div class="main-page-advantages__advantage main-page-advantage">
                    <svg-icon :name="`advantages/${advantage.icon}`" class="main-page-advantage__icon" />
                    <span class="main-page-advantage__text">{{advantage.text}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import {advantages} from '@/constants/advantages'
</script>

<style scoped lang="scss">
@import "@/components/MainPage/styles/main-page-advantages.scss";
</style>
