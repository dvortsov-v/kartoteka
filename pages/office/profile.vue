<template>
    <OfficeLayout title="Профиль" class="profile-page">
        <main v-if="userDate" class="profile-page__main">
            <div class="profile-page__create profile-create">
                <svg-icon name="time" class="profile-create__icon" />
                <span class="profile-create__text">Дата регистрации {{ formattedDate }}</span>
            </div>
            <ul class="profile-page__informations">
                <li v-if="userDate.name" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Имя
                            </span>
                        </span>
                        <UiInput
                            v-if="isEditMod"
                            v-model="userDate.name"
                            class="profile-info__input"
                        />
                        <span
                            v-else
                            class="profile-info__value"
                        >
                            {{ userDate.name}}
                        </span>
                    </div>
                </li>
                <li v-if="userDate.surname" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Фамилия
                            </span>
                        </span>
                        <UiInput
                            v-if="isEditMod"
                            v-model="userDate.surname"
                            class="profile-info__input"
                        />
                        <span
                            v-else
                            class="profile-info__value"
                        >
                            {{ userDate.surname}}
                        </span>
                    </div>
                </li>
                <li v-if="userDate.company" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Компания
                            </span>
                        </span>
                        <UiInput
                            v-if="isEditMod"
                            v-model="userDate.company"
                            class="profile-info__input"
                        />
                        <span
                            v-else
                            class="profile-info__value"
                        >
                            {{ userDate.company}}
                        </span>
                    </div>
                </li>
                <li v-if="userDate.phone" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Телефон
                            </span>
                        </span>
                        <UiInput
                            v-if="isEditMod"
                            v-model="userDate.phone"
                            class="profile-info__input"
                        />
                        <span
                            v-else
                            class="profile-info__value"
                        >
                            {{ userDate.phone}}
                        </span>
                    </div>
                </li>
                <li v-if="userDate.email" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Эл. почта
                            </span>
                        </span>
                        <UiInput
                            v-if="isEditMod"
                            v-model="userDate.email"
                            class="profile-info__input"
                        />
                        <span
                            v-else
                            class="profile-info__value"
                        >
                            {{ userDate.email}}
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
import {ComputedRef} from "vue";
import {format} from "date-fns";
import {useUserStore} from "~/store/useUserStore";
import {storeToRefs} from "pinia";

useHead({
    title: 'Личный кабинет',
});
definePageMeta({
    nameRoute: 'Личный кабинет',
    middleware: 'auth',
})
const isEditMod = ref<boolean>(false);
const {userDate} = storeToRefs(useUserStore());

const formattedDate:ComputedRef<string> = computed(() => {
    if(unref(userDate)) {
        return format(new Date(unref(userDate)!.created_at), 'dd.MM.yyy')
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
