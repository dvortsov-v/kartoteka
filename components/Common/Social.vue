<template>
    <ul class="socials">
        <li
            v-for="social in socials"
            :key="`footer-social-${social.id}`"
            class="socials__item"
        >
            <a :href="social.href" class="socials__social">
                <svg-icon :name="`socials/${social.icon}`" class="socials__icon"/>
            </a>
        </li>
    </ul>
</template>
<script setup lang="ts">
import {socials, Social} from '@/constants/socials';

defineProps({
    socials: {
        type: Array as PropType<Social[]>,
        default: () => socials,
    }
})
</script>

<style scoped lang="scss">
@import "@/components/Common/styles/socials.scss";
</style>
