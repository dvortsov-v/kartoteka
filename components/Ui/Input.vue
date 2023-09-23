<template>
    <input
        v-model="modelValue"
        v-bind="$attrs"
        class="ui-input"
    >
</template>
<script setup lang="ts">
const props = defineProps({
    modelValue: {
        type: String,
        default: '',
    },
})
const emit = defineEmits(['update:modelValue']);

const modelValue = computed({
    get: () => {
        return props.modelValue;
    },
    set: (password: string) => {
        emit('update:modelValue', password)
    }
});
</script>

<style scoped lang="scss">
@import "@/components/Ui/styles/ui-input.scss";
</style>
