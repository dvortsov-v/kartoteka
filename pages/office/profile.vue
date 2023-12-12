<template>
    <OfficeLayout title="Профиль" class="profile-page">
        <main v-if="userDate" class="profile-page__main">
            <div class="profile-page__head">
                <div class="profile-page__create profile-create">
                    <svg-icon name="time" class="profile-create__icon" />
                    <span class="profile-create__text">Дата регистрации {{ formattedDate }}</span>
                </div>
                <UiButton class="profile-page__confirmation">
                    Подтверждение
                </UiButton>
            </div>
            <pre>{{serteficatList}}</pre>
            <ul class="profile-page__informations">
                <li v-if="initialUserDate.name || isEditMod" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Имя
                            </span>
                        </span>
                        <UiInput
                            v-if="isEditMod"
                            v-model="initialUserDate.name"
                            @change="addEditField('name')"
                            class="profile-info__input"
                        />
                        <span
                            v-else
                            class="profile-info__value"
                        >
                            {{ initialUserDate.name}}
                        </span>
                    </div>
                </li>
                <li v-if="initialUserDate.surname || isEditMod" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Фамилия
                            </span>
                        </span>
                        <UiInput
                            v-if="isEditMod"
                            v-model="initialUserDate.surname"
                            @change="addEditField('surname')"
                            class="profile-info__input"
                        />
                        <span
                            v-else
                            class="profile-info__value"
                        >
                            {{ initialUserDate.surname}}
                        </span>
                    </div>
                </li>
                <li v-if="initialUserDate.company || isEditMod" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Компания
                            </span>
                        </span>
                        <UiInput
                            v-if="isEditMod"
                            v-model="initialUserDate.company"
                            @change="addEditField('company')"
                            class="profile-info__input"
                        />
                        <span
                            v-else
                            class="profile-info__value"
                        >
                            {{ initialUserDate.company}}
                        </span>
                    </div>
                </li>
                <li v-if="initialUserDate.phone || isEditMod" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Телефон
                            </span>
                        </span>
                        <UiInput
                            v-if="isEditMod"
                            v-model="initialUserDate.phone"
                            @change="addEditField('phone')"
                            class="profile-info__input"
                        />
                        <span
                            v-else
                            class="profile-info__value"
                        >
                            {{ initialUserDate.phone}}
                        </span>
                    </div>
                </li>
                <li v-if="initialUserDate.email || isEditMod" class="profile-page__item">
                    <div class="profile-page__info profile-info">
                        <span class="profile-info__name">
                            <span class="profile-info__text">
                                Эл. почта
                            </span>
                        </span>
                        <span class="profile-info__value">
                            {{ initialUserDate.email}}
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
                        @click="updateUserDataRequest"
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
import {useUser} from "~/composable/request/useUser";
import {me} from "~/api/UserApi";
import { getUserCertificates, Certificate } from 'crypto-pro';

useHead({
    title: 'Личный кабинет',
});

definePageMeta({
    nameRoute: 'Личный кабинет',
    middleware: 'auth',
})

const serteficatList = ref([])
const isEditMod = ref<boolean>(false);
const userToken = useCookie('userToken');
const userDate = await me(unref(userToken));

const {updateUserData} = useUser();
const initialUserDate = ref({...userDate});
const updateField = ref({});

const formattedDate:ComputedRef<string> = computed(() => {
    if(userDate) {
        return format(new Date(userDate!.created_at), 'dd.MM.yyy')
    }
    return ''
});

const addEditField = (key: string) => {
    // @ts-ignore
    if (unref(initialUserDate) && userDate && userDate[key] && (unref(initialUserDate)[key] !== userDate[key])) {
        // @ts-ignore
        updateField.value[key] = unref(initialUserDate)[key];
    }
}

const toogleIsEditMod = () => {
    isEditMod.value = !isEditMod.value
}

const updateUserDataRequest = () => {
    updateUserData(unref(userToken), unref(updateField))
    toogleIsEditMod()
}
onMounted(async () => {
    const serteficatList.value = await getUserCertificates()
})
</script>

<style scoped lang="scss">
@import '@/pages/office/styles/profile-page.scss';
</style>
