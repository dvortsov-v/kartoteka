<template>
    <span
        :class="classesStatus"
        class="status">
        <slot></slot>
    </span>
</template>

<script lang="ts" setup>
const props = defineProps({
    theme: {
        type: String,
        default: 'green',
    }
})

const classesStatus = computed(() => ({
    [`status--${props.theme}`] : Boolean(props.theme),
}))
</script>

<style scoped lang="scss">
@import "@/components/Common/styles/status.scss";
</style>
