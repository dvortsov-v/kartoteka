<template>
    <OfficeLayout title="Профиль" class="profile-page">
        <main v-if="userInformation" class="profile-page__main">
            <div class="profile-page__create profile-create">
                <svg-icon name="time" class="profile-create__icon" />
                <span class="profile-create__text">Дата регистрации {{ formattedDate }}</span>
            </div>
            <ul class="profile-page__informations">
                <li v-if="userInformation.name || true" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Имя
                            </span>
                        </span>
                        <span class="profile-info__value">{{ userInformation.name || 'Алексей'}}</span>
                    </div>
                </li>
                <li v-if="userInformation.surname || true" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Фамилия
                            </span>
                        </span>
                        <span class="profile-info__value">{{ userInformation.surname || 'Константинопольский'}} </span>
                    </div>
                </li>
                <li v-if="userInformation.company || true" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Компания
                            </span>
                        </span>
                        <span class="profile-info__value">{{ userInformation.company || 'Компания ООО «Инвестиционные технологии»'}}</span>
                    </div>
                </li>
                <li v-if="userInformation.phone || true" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Телефон
                            </span>
                        </span>
                        <span class="profile-info__value">{{ userInformation.phone || '+7 926 123-45-67' }} </span>
                    </div>
                </li>
                <li v-if="userInformation.email || true" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Эл. почта
                            </span>
                        </span>
                        <span class="profile-info__value">{{ userInformation.email || 'someintvestmentmail@mail.ru'}}</span>
                    </div>
                </li>

                <li v-if="userInformation.password || true" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Пароль
                            </span>
                        </span>
                        <span class="profile-info__value">{{  userInformation.password || '••••••••••'}}</span>
                    </div>
                </li>
            </ul>
            <div class="profile-page__actions">
                <UiButton
                    theme="gray"
                    class="profile-page__password profile-page-button"
                >
                    <span class="profile-page-button__text">
                        Изменить пароль
                    </span>
                </UiButton>
                <UiButton
                    theme="primary"
                    class="profile-page__edit profile-page-button"
                >
                    <span class="profile-page-button__text">
                        Редактировать
                    </span>
                </UiButton>
            </div>
        </main>
    </OfficeLayout>
</template>

<script setup lang="ts">
import {me} from "~/api/UserApi";
import {UserInfo} from "~/definitions/interfaces/User";
import {ComputedRef} from "vue";
import {format} from "date-fns";

useHead({
    title: 'Профиль',
});
definePageMeta({
    nameRoute: 'Профиль',
})
const userToken = useCookie('userToken');
const userInformation = ref<UserInfo | null>();

userInformation.value = await me(unref(userToken));

const formattedDate:ComputedRef<string> = computed(() => {
    if(unref(userInformation)) {
        return format(new Date(unref(userInformation)!.created_at), 'dd.MM.yyy')
    }
    return ''
});

</script>

<style scoped lang="scss">
@import '@/pages/office/styles/profile-page.scss';
</style>
