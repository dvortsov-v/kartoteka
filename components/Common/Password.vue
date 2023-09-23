<template>
    <label class="field-password">
        <span class="field-password__placeholder">
            <span class="field-password__text">Пароль</span>
        </span>
        <span class="field-password__wrap">
            <UiInput v-model="modelValue" :type="typeFieldPassword" class="field-password__input" />
            <UiButton @click="toogleIsShowPassword" theme="white" class="field-password__show">
                <svg-icon :name="iconFieldPassword" class="field-password__icon"/>
            </UiButton>
        </span>
        <span v-if="warningText" class="field-password__warning">{{ warningText }}</span>
    </label>
</template>
<script setup lang="ts">
const props = defineProps({
    warningText: {
        type: String,
        default: '',
    },
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
const isShowPassword = ref(false);
const toogleIsShowPassword = () => {
    isShowPassword.value = !isShowPassword.value
}

const typeFieldPassword = computed(() =>  unref(isShowPassword) ? 'text' : 'password');
const iconFieldPassword = computed(() =>  unref(isShowPassword) ? 'eye-open' : 'eye-close');
</script>

<style scoped lang="scss">
@import "@/components/Common/styles/field-password.scss";
</style>
