<template>
    <nav class="navigation">
        <ul class="navigation__list">
            <li
                v-for="menuItem in topMenu"
                :key="`top-menu-item-${menuItem.id}`"
                class="navigation__item">
                <NuxtLink to="" class="navigation__link">{{ menuItem.name }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup lang="ts">
import {topMenu} from '@/constants/top-menu'
</script>

<style scoped lang="scss">
@import "@/components/Header/styles/navigation.scss";
</style>
