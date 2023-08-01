<template>
    <label
        :class="choiceClasses"
        class="ui-selector"
    >
        <input
            v-model="modelValue"
            :type="inputType"
            :name="name"
            :disabled="disabled"
            :value="value"
            class="ui-selector__input"
        >
        <span class="ui-selector__pseudo">
            <svg-icon name="check" class="ui-selector__icon"></svg-icon>
        </span>
        <slot>
        </slot>
    </label>
</template>

<script setup lang="ts">
const {disabled, checked} = defineProps({
    inputType:
        {type: String,
            default: ''
        },
    name: {
        type: String,
        default: ''
    },
    disabled: {
        type: Boolean,
        default: false,
    },
    value: [String, Number],
    checked: {
        type: Boolean,
        default: false,
    },
})
const emit = defineEmits(["change"]);

const choiceClasses = computed(() => ({
    'ui-selector--disabled': disabled,
    'ui-selector--checked': checked,
}));
const modelValue = computed({
    get: () => checked,
    set: (value) => emit('change', value),
});
</script>

<style scoped lang="scss">
@import "@/components/Ui/styles/ui-selector.scss";
</style>
