<template>
    <VueFinalModal displayDirective="visible" contentClass="modal-authorization">
        <div class="modal-authorization__content">
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
                            <CommonPassword v-model="formAuth.password" class="modal-authorization-form__field"/>
                        </div>
                        <UiButtonLink @click="modalForgotPassword.open()" theme="primary" class="modal-authorization-form__password modal-authorization-link">
                            <span class="modal-authorization-link__text">Забыли пароль?</span>
                        </UiButtonLink>
                        <div class="modal-authorization-form__buttons">
                            <UiButton theme="primary" type="submit" class="modal-authorization-form__submit modal-authorization-submit">
                                <span class="modal-authorization-submit__text">Войти</span>
                            </UiButton>
                            <UiButtonLink @click="modalRegistration.open()" theme="primary" class="modal-authorization-form__registration modal-authorization-link">
                                <span class="modal-authorization-link__text">Регистрация</span>
                            </UiButtonLink>
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-authorization__alternative">
                <div class="modal-authorization__text">Войти с помощью:</div>
                <ul class="modal-authorization__socials modal-authorization-socials">
                    <li
                        v-for="social in socialsAuth"
                        :key="`modal-authorization-socials-${social.id}`"
                        class="modal-authorization-socials__item"
                    >
                        <UiButton theme="white" class="modal-authorization-socials__social">
                            <svg-icon :name="`socials/${social.icon}`" class="modal-authorization-socials__icon"/>
                        </UiButton>
                    </li>
                </ul>
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
    password: '',
})
const socialsAuth = [
    {
        id: 1,
        icon: 'vk',
    },

    {
        id: 2,
        icon: 'ya',
    },
    {
        id: 0,
        icon: 'ok',
    },
]
const {modalForgotPassword, modalRegistration} = useModalList();


</script>

<style scoped lang="scss">
@import '@/components/Modals/styles/modal-authorization.scss';
</style>
<style>
.modal-authorization {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>
