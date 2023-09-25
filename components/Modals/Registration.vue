<template>
    <VueFinalModal contentClass="modal-registration">
        <div class="modal-registration__content">
            <div class="modal-registration__wrap">
                <div class="modal-registration__head">
                    <span class="modal-registration__title h5">Регистрация</span>
                    <UiButton theme="transparent" @click="emit('close')" class="modal-registration__close">
                        <svg-icon name="close" class="modal-registration__icon"/>
                    </UiButton>
                </div>
                <div class="modal-registration__body">
                    <form class="modal-registration__form modal-registration-form">
                        <div class="modal-registration-form__row">
                            <label class="modal-registration-form__field modal-registration-field">
                                <span class="modal-registration-field__placeholder">
                                    <span class="modal-registration-field__text">Адрес эл. почты</span>
                                </span>
                                <UiInput v-model="formAuth.mail" class="modal-registration-field__input" />
                            </label>
                        </div>
                        <div class="modal-registration-form__row">
                            <CommonPassword v-model="formAuth.password" warningText="Не менее 6 символов" class="modal-registration-form__field"/>
                        </div>
                        <div class="modal-registration-form__row">
                            <CommonPassword v-model="formAuth.repetitionPassword" placeholder="Повторите пароль"  class="modal-registration-form__field"/>
                        </div>
                        <div class="modal-registration-form__buttons">
                            <UiButton theme="primary" type="submit" class="modal-registration-form__submit modal-registration-submit">
                                <span class="modal-registration-submit__text">Зарегистрироваться</span>
                            </UiButton>
                            <div class="modal-registration-form__auth modal-registration-for-auth">
                                <UiButtonLink @click="emit('openAuthorizationModal')" theme="primary" class="modal-registration-for-auth__btn modal-registration-link">
                                    <span class="modal-registration-link__question">Уже зарегистрированы?</span>
                                    <span class="modal-registration-link__text">Войти</span>
                                </UiButtonLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
const emit = defineEmits(['close', 'openAuthorizationModal'])
const formAuth = ref({
    mail: '',
    password: '',
    repetitionPassword: '',
})
</script>

<style scoped lang="scss">
@import '@/components/Modals/styles/modal-registration.scss';
</style>
<style>
.modal-registration {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>
