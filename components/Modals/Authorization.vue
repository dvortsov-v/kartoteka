<template>
    <VueFinalModal contentClass="modal-authorization__content">
        <div class="modal-authorization">
            <div class="modal-authorization__wrap">
                <div class="modal-authorization__head">
                    <span class="modal-authorization__title h5">Вход</span>
                    <UiButton theme="transparent" @click="emit('close')" class="modal-authorization__close">
                        <svg-icon name="close" class="modal-authorization__icon"/>
                    </UiButton>
                </div>
                <div class="modal-authorization__body">
                    <form class="modal-authorization__form modal-authorization-form">
                        <div class="modal-authorization-form__row">
                            <label class="modal-authorization-form__field modal-authorization-field">
                                <span class="modal-authorization-field__placeholder">
                                    <span class="modal-authorization-field__text">Адрес эл. почты</span>
                                </span>
                                <UiInput v-model="formAuth.mail" class="modal-authorization-field__input" />
                            </label>
                        </div>
                        <div class="modal-authorization-form__row">
                            <label class="modal-authorization-form__field modal-authorization-field">
                                <span class="modal-authorization-field__placeholder">
                                    <span class="modal-authorization-field__text">Пароль</span>
                                </span>
                                <UiInput v-model="formAuth.password" class="modal-authorization-field__input" />
                            </label>
                        </div>
                        <div class="modal-authorization-form__row">
                            <UiButton theme="primary" type="submit" class="modal-authorization-form__submit modal-authorization-submit">
                                <span class="modal-authorization-submit__text">Войти</span>
                            </UiButton>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
const emit = defineEmits(['close'])
const formAuth = ref({
    mail: '',
    password: '',
})
</script>

<style scoped lang="scss">
@import '@/components/Modals/styles/modal-authorization.scss';
</style>
<style>
.modal-authorization__content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>
