<template>
    <VueFinalModal contentClass="modal-forgot-password">
        <div class="modal-forgot-password__content">
            <div class="modal-forgot-password__wrap">
                <div class="modal-forgot-password__head">
                    <span class="modal-forgot-password__title h5">Восстановление пароля</span>
                    <UiButton theme="transparent" @click="emit('close')" class="modal-forgot-password__close">
                        <svg-icon name="close" class="modal-forgot-password__icon"/>
                    </UiButton>
                </div>
                <div class="modal-forgot-password__body">
                    <p class="modal-forgot-password__clue">
                        Введите адрес эл. почты указанный при регистрации, мы отправим инструкцию по восстановлению доступа
                    </p>
                    <form class="modal-forgot-password__form modal-forgot-password-form">
                        <div class="modal-forgot-password-form__row">
                            <label class="modal-forgot-password-form__field modal-forgot-password-field">
                                <span class="modal-forgot-password-field__placeholder">
                                    <span class="modal-forgot-password-field__text">Адрес эл. почты</span>
                                </span>
                                <UiInput v-model="formAuth.mail" class="modal-forgot-password-field__input" />
                            </label>
                        </div>
                        <div class="modal-forgot-password-form__buttons">
                            <UiButton theme="primary" type="submit" class="modal-forgot-password-form__submit modal-forgot-password-submit">
                                <span class="modal-forgot-password-submit__text">Восстановить</span>
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
import {useModalList} from "~/composable/useModalList";
const emit = defineEmits(['close'])
const formAuth = ref({
    mail: '',
})
const {modalAuthorization, modalRegistration} = useModalList();
</script>

<style scoped lang="scss">
@import '@/components/Modals/styles/modal-forgot-password.scss';
</style>
<style>
.modal-forgot-password {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>
