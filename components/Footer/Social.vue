<template>
    <ul class="footer-socials">
        <li
            v-for="social in socials"
            :key="`footer-social-${social.id}`"
            class="footer-socials__item"
        >
            <NuxtLink class="footer-socials__social">
                <svg-icon :name="`socials/${social.icon}`" class="footer-socials__icon"/>
            </NuxtLink>
        </li>
    </ul>
</template>
<script setup lang="ts">
import {socials} from '@/constants/socials';
</script>

<style scoped lang="scss">
@import "@/components/Footer/styles/footer-socials.scss";
</style>
