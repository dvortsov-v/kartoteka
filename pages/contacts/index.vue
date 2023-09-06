<template>
    <div class="contacts-page">
        <UiContainer class="contacts-page__wrapper">
            <UiBreadcrumbs class="contacts-page__breadcrumbs"/>
            <h1 class="contacts-page__title">Контакты</h1>
            <main class="contacts-page__main">
                <section class="contacts-page__section contacts-page-information">
                    <div class="contacts-page-information__head">
                        <h4 class="contacts-page-section-title">
                            Представительства в Москве
                        </h4>
                        <p class="contacts-page-information__schedule">
                            Мы работаем с понедельника по пятницу, с 8:00 до 18:00 (Мск) без перерыва на обед. Звонки по России бесплатны.
                        </p>
                    </div>
                    <ul class="contacts-page-information__departments">
                        <li v-for="contact in contacts" :key="`contacts-page-info-${contact.id}`" class="contacts-page-information__item">
                            <div class="contacts-page-information__department contacts-page-information-department">
                                <h6 class="contacts-page-information-department__title">{{ contact.title }}</h6>
                                <ul class="contacts-page-information-department__contacts contacts-page-information-department-contacts">
                                    <li v-if="contact.phone" class="contacts-page-information-department-contacts__item">
                                        <a :href="`tel:${contact.phone}`" class="contacts-page-information-department-contacts__contact">{{ validPhone(contact.phone) }}</a>
                                    </li>
                                    <li v-if="contact.additionalPhone" class="contacts-page-information-department-contacts__item">
                                        <a :href="`tel:${contact.additionalPhone}`" class="contacts-page-information-department-contacts__contact">{{ validAdditionalPhone(contact.additionalPhone) }}</a>
                                    </li>
                                    <li v-if="contact.office" class="contacts-page-information-department-contacts__item">
                                        <span class="contacts-page-information-department-contacts__contact">{{ contact.office }}</span>
                                    </li>
                                    <li v-if="contact.mail" class="contacts-page-information-department-contacts__item">
                                        <a :href="`mailto:${contact.mail}`" class="contacts-page-information-department-contacts__contact contacts-page-information-department-contacts__contact--mail">{{ contact.mail }}</a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </section>
                <section class="contacts-page__section contacts-page-feedback">
                    <h4 class="contacts-page-feedback__title contacts-page-section-title">
                        Обратная связь
                    </h4>
                    <form class="contacts-page-feedback__form contacts-page-feedback-form">
                        <div class="contacts-page-feedback-form__row">
                            <label class="contacts-page-feedback-form__field contacts-page-field">
                                <span class="contacts-page-field__placeholder">
                                    <span class="contacts-page-field__text">Ваше имя</span>
                                    <svg-icon name="asterisk" class="contacts-page-field__required"/>
                                </span>
                                <UiInput v-model="formFeedbackDate.name" class="contacts-page-field__input" />
                            </label>
                            <label class="contacts-page-feedback-form__field contacts-page-field">
                                <span class="contacts-page-field__placeholder">
                                    <span class="contacts-page-field__text">Телефон</span>
                                    <svg-icon name="asterisk" class="contacts-page-field__required"/>
                                </span>
                                <UiInput v-model="formFeedbackDate.phone" class="contacts-page-field__input"/>
                            </label>
                        </div>
                        <div class="contacts-page-feedback-form__row">
                            <label class="contacts-page-feedback-form__field contacts-page-field">
                                <span class="contacts-page-field__placeholder">
                                    <span class="contacts-page-field__text">Адрес эл. почты</span>
                                </span>
                                <UiInput v-model="formFeedbackDate.mail" class="contacts-page-field__input" />
                            </label>
                        </div>
                        <div class="contacts-page-feedback-form__row">
                            <label class="contacts-page-feedback-form__field contacts-page-feedback-form__field--textarea contacts-page-field">
                                <span class="contacts-page-field__placeholder">
                                    <span class="contacts-page-field__text">Сообщение</span>
                                </span>
                                <textarea v-model="formFeedbackDate.message" placeholder="Введите текст" class="contacts-page-field__textarea" />
                            </label>
                        </div>
                        <div class="contacts-page-feedback-form__row">
                            <UiChoices
                                v-model:checked="formFeedbackDate.agree"
                                class="contacts-page-feedback-form__checkbox"
                            >
                                <span class="contacts-page-feedback-form__description">Я даю согласие на обработку моих персональных данных согласно политике конфиденциальности.</span>
                            </UiChoices>
                        </div>
                        <div class="contacts-page-feedback-form__row">
                            <UiButton theme="primary" type="submit" class="contacts-page-feedback-form__submit contacts-page-feedback-submit">
                                <span class="contacts-page-feedback-submit__text">Отправить</span>
                            </UiButton>
                        </div>
                    </form>
                </section>
            </main>
        </UiContainer>
    </div>
</template>

<script setup lang="ts">
import {validAdditionalPhone, validPhone} from "~/pages/contacts/feature/validPhone";
import {contacts} from "~/constants/contacts";

useHead({
    title: 'Контакты',
});
definePageMeta({
    name: 'Контакты',
})
const formFeedbackDate = ref({
    name: '',
    phone: '',
    main: '',
    message: '',
    agree: false,
})
</script>

<style scoped lang="scss">
@import "@/pages/contacts/styles/contacts-page.scss";
</style>
