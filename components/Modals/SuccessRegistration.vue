<template>
    <VueFinalModal contentClass="modal-success-registration">
        <div class="modal-success-registration__content">
            <div class="modal-success-registration__status modal-success-status">
                <div class="modal-success-status__wrap">
                    <svg-icon name="circle-check" class="modal-success-status__icon"/>
                </div>
            </div>
            <h5 class="modal-success-registration__title h5">{{ title }}</h5>
            <p class="modal-success-registration__text">
                {{ text }}
            </p>
            <UiButton theme="primary" @click="emit('close')" class="modal-success-registration__submit modal-success-registration-submit">
                <span class="modal-success-registration-submit__text">Готово</span>
            </UiButton>
        </div>
    </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';
const props = defineProps({
    title: String,
    text: String,
})
const emit = defineEmits(['close']);
</script>

<style scoped lang="scss">
@import '@/components/Modals/styles/modal-success-registration.scss';
</style>
<style>
.modal-success-registration {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>
