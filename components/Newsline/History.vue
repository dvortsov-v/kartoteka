<template>
    <UiButton
        v-bind="$attrs"
        type="button"
        theme="transparent"
        class="hystory"
    >
        <picture class="hystory__picture">
            <img
                :src="history.images[0]"
                :alt="history.title"
                class="hystory__img"
            >
        </picture>
        <span class="hystory__name">{{history.title}}</span>
    </UiButton>
</template>

<script setup lang="ts">
import {PropType} from "@vue/runtime-core";

defineProps({
    history: {
        type: Object as PropType<History>,
        required: true,
    }
})
</script>

<style scoped lang="scss">
@import "@/components/Newsline/styles/hystory.scss";
</style>
