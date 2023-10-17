<template>
    <label
        :class="choiceClasses"
        class="ui-choices"
    >
        <input
            v-model="modelValue"
            :type="inputType"
            :name="name"
            :disabled="disabled"
            :value="value"
            class="ui-choices__input"
        >
        <slot name="visibleElement" :isChecked="isChecked">
            <span class="ui-choices__visible">
                <svg-icon :name="iconName" class="ui-choices__icon"></svg-icon>
            </span>
            <slot></slot>
        </slot>
    </label>
</template>

<script setup lang="ts">
const props = defineProps({
    inputType: {
        type: String,
        default: 'checkbox'
    },
    iconName: {
        type: String,
        default: 'check'
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
        type: [String, Number, Boolean, Function, Object, Array],
        default: false,
    },
})
const emit = defineEmits(['update:checked']);

const modelValue = computed({
    get: () => {
        return props.checked;
    },
    set: (newValue) => {
        emit('update:checked', newValue)
    }
});

const isRadio = computed(() => props.inputType === 'radio')
const isChecked = computed(() => {
    if(Array.isArray(props.checked)) {
        return props.checked.includes(props.value);
    } else {
        return unref(isRadio) ? props.value === props.checked : props.checked
    }
})

const choiceClasses = computed(() => ({
    'ui-choices--disabled': props.disabled,
    'ui-choices--checked': unref(isChecked),
}));
</script>

<style scoped lang="scss">
@import "@/components/Ui/styles/ui-choices.scss";
</style>
