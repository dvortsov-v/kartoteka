<template>
    <OfficeLayout title="Профиль" class="profile-page">
        <main v-if="userInformation" class="profile-page__main">
            <div class="profile-page__create profile-create">
                <svg-icon name="time" class="profile-create__icon" />
                <span class="profile-create__text">Дата регистрации {{ formattedDate }}</span>
            </div>
            <ul class="profile-page__informations">
                <li v-if="userInformation.name" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Имя
                            </span>
                        </span>
                        <UiInput
                            v-if="isEditMod"
                            v-model="userInformation.name"
                            class="profile-info__input"
                        />
                        <span
                            v-else
                            class="profile-info__value"
                        >
                            {{ userInformation.name}}
                        </span>
                    </div>
                </li>
                <li v-if="userInformation.surname" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Фамилия
                            </span>
                        </span>
                        <UiInput
                            v-if="isEditMod"
                            v-model="userInformation.surname"
                            class="profile-info__input"
                        />
                        <span
                            v-else
                            class="profile-info__value"
                        >
                            {{ userInformation.surname}}
                        </span>
                    </div>
                </li>
                <li v-if="userInformation.company" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Компания
                            </span>
                        </span>
                        <UiInput
                            v-if="isEditMod"
                            v-model="userInformation.company"
                            class="profile-info__input"
                        />
                        <span
                            v-else
                            class="profile-info__value"
                        >
                            {{ userInformation.company}}
                        </span>
                    </div>
                </li>
                <li v-if="userInformation.phone" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Телефон
                            </span>
                        </span>
                        <UiInput
                            v-if="isEditMod"
                            v-model="userInformation.phone"
                            class="profile-info__input"
                        />
                        <span
                            v-else
                            class="profile-info__value"
                        >
                            {{ userInformation.phone}}
                        </span>
                    </div>
                </li>
                <li v-if="userInformation.email" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Эл. почта
                            </span>
                        </span>
                        <UiInput
                            v-if="isEditMod"
                            v-model="userInformation.email"
                            class="profile-info__input"
                        />
                        <span
                            v-else
                            class="profile-info__value"
                        >
                            {{ userInformation.email}}
                        </span>
                    </div>
                </li>
                <li class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Пароль
                            </span>
                        </span>
                        <span class="profile-info__value">••••••••••</span>
                    </div>
                </li>
            </ul>
            <div class="profile-page__actions">
                <template v-if="isEditMod">
                    <UiButton
                        @click="toogleIsEditMod"
                        theme="gray"
                        class="profile-page__password profile-page-button"
                    >
                        <span class="profile-page-button__text">
                            Отмена
                        </span>
                    </UiButton>
                    <UiButton
                        @click="toogleIsEditMod"
                        theme="primary"
                        class="profile-page__edit profile-page-button"
                    >
                        <span class="profile-page-button__text">
                            Сохранить
                        </span>
                    </UiButton>
                </template>
                <template  v-else>
                    <UiButton
                        theme="gray"
                        class="profile-page__password profile-page-button"
                    >
                        <span class="profile-page-button__text">
                            Изменить пароль
                        </span>
                    </UiButton>
                    <UiButton
                        @click="toogleIsEditMod"
                        theme="primary"
                        class="profile-page__edit profile-page-button"
                    >
                        <span class="profile-page-button__text">
                            Редактировать
                        </span>
                    </UiButton>
                </template>
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
    title: 'Личный кабинет',
});
definePageMeta({
    nameRoute: 'Личный кабинет',
})
const userToken = useCookie('userToken');
const userInformation = ref<UserInfo | null>(
    {
        created_at: "2023-10-22T11:21:49.000000Z",
        email_verified_at: null,
        id: 1,
        name: "Алексей",
        surname: 'Константинопольский',
        company: 'Компания ООО «Инвестиционные технологии»',
        phone: '+7 926 123-45-67',
        email: 'someintvestmentmail@mail.ru',
        socials: null,
        updated_at: null,
    }
);
const isEditMod = ref<boolean>(false);

userInformation.value = await me(unref(userToken));

const formattedDate:ComputedRef<string> = computed(() => {
    if(unref(userInformation)) {
        return format(new Date(unref(userInformation)!.created_at), 'dd.MM.yyy')
    }
    return ''
});

const toogleIsEditMod = () => {
    isEditMod.value = !isEditMod.value
}

</script>

<style scoped lang="scss">
@import '@/pages/office/styles/profile-page.scss';
</style>
