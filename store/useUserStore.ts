import { defineStore, skipHydrate } from 'pinia'
import {RemovableRef, useLocalStorage} from '@vueuse/core'
import {UserInfo} from "~/definitions/interfaces/User";

export const useUserStore = defineStore('userStore', () => {
    const userDate: Ref<UserInfo | never> = useLocalStorage('userDate', {} as UserInfo);
    const countFavorites = computed(() => unref(userDate)?.favorites.length || 0);
    const countOrders = computed(() => unref(userDate)?.orders.length || 0);
    const setUserDate = (value: UserInfo) =>  {
        userDate.value = value;
    }
    const deleteUserDate = () =>  {
        userDate.value = {} as UserInfo;
    }

    return {
        userDate: skipHydrate(userDate),
        countFavorites,
        countOrders,
        setUserDate,
        deleteUserDate,
    }
})
