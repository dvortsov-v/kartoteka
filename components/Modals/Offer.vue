<template>
    <VueFinalModal contentClass="modal-offer">
        <div class="modal-offer__content">
            <div class="modal-offer__wrap">
                <div class="modal-offer__head">
                    <span class="modal-offer__title h5">Заявка на предложение</span>
                    <UiButton theme="transparent" @click="emit('close')" class="modal-offer__close">
                        <svg-icon name="close" class="modal-offer__icon"/>
                    </UiButton>
                </div>
                <div class="modal-offer__body">
                    <p class="modal-offer__clue">
                        Оставьте заявку и наш менеджер свяжется с вами в ближайшее время для подтверждения заявки
                    </p>
                    <form class="modal-offer__form modal-offer-form">
                        <div class="modal-offer-form__row">
                            <label class="modal-offer-form__field modal-offer-field">
                                <span class="modal-offer-field__placeholder">
                                    <span class="modal-offer-field__text">Ваше имя</span>
                                </span>
                                <UiInput v-model="formOffer.name" class="modal-offer-field__input" />
                            </label>
                        </div>
                        <div class="modal-offer-form__row">
                            <label class="modal-offer-form__field modal-offer-field">
                                <span class="modal-offer-field__placeholder">
                                    <span class="modal-offer-field__text">Телефон</span>
                                </span>
                                <UiInput v-model="formOffer.phone" placeholder="+7" class="modal-offer-field__input" />
                            </label>
                        </div>
                        <div class="modal-offer-form__row">
                            <label class="modal-offer-form__field modal-offer-field">
                                <span class="modal-offer-field__placeholder">
                                    <span class="modal-offer-field__text">Адрес эл. почты</span>
                                </span>
                                <UiInput v-model="formOffer.email" class="modal-offer-field__input" />
                            </label>
                        </div>
                        <div class="modal-offer-form__row">
                            <UiChoices
                                v-model:checked="formOffer.isRegistration"
                                class="modal-offer-form__field modal-offer-form-checkbox"
                            >
                                <span class="modal-offer-form-checkbox__text">
                                    Зарегистрироваться на сайте
                                </span>
                            </UiChoices>
                        </div>
                        <div class="modal-offer-form__buttons">
                            <UiButton @click="registration" theme="primary" class="modal-offer-form__submit modal-offer-submit">
                                <span class="modal-offer-submit__text">Отправить</span>
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
import {register} from "~/api/UserApi";
const emit = defineEmits(['close', 'openSuccessRegistrationModal'])
const formOffer = ref({
    name: '',
    email: '',
    phone: '',
    isRegistration: false,
})
const registration = async () => {
    // if(unref(formOffer).password && unref(formOffer).repetitionPassword && (unref(formOffer).password === unref(formOffer).repetitionPassword)) {
    //     try {
    //         await register(unref(formOffer).email, unref(formOffer).password);
    //         emit('openSuccessRegistrationModal')
    //     } catch (e) {
    //         emit('openSuccessRegistrationModal')
    //     }
    // } else {
    //
    // }
}
</script>

<style scoped lang="scss">
@import '@/components/Modals/styles/modal-offer.scss';

</style>
<style>
.modal-offer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>
