<template>
    <button
        v-bind="$attrs"
        :class="classesButton"
        type="button"
        class="ui-button-link"
    >
        <slot></slot>
    </button>
</template>

<script setup lang="ts">
const props = defineProps({
    theme: {type: String, default: 'primary'},
});
const classesButton = computed(() => ({
    [`ui-button-link--${props.theme}`]: Boolean(props.theme),
}))
</script>

<style scoped lang="scss">
@import "@/components/Ui/styles/ui-button-link.scss";
</style>
