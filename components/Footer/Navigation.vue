<template>
    <div class="footer-navigation">
        <ul class="footer-navigation__list">
            <li
                v-for="menuItem in topMenu"
                :key="`top-menu-item-${menuItem.id}`"
                class="footer-navigation__item"
            >
                <NuxtLink to="/" class="footer-navigation__link">{{ menuItem.name }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import {topMenu} from '@/constants/top-menu'
</script>

<style scoped lang="scss">
@import "@/components/Footer/styles/footer-navigation.scss";
</style>
