import { defineStore, skipHydrate } from 'pinia'
import {useLocalStorage} from '@vueuse/core'
import {UserInfo} from "~/definitions/interfaces/User";

export const useUserStore = defineStore('userStore', () => {
    const userDate: Ref<UserInfo | null> = useLocalStorage('userDate', null as UserInfo | null);
    const countFavorites = computed(() => unref(userDate)?.favorites.length || 0);
    const countOrders = computed(() => unref(userDate)?.orders.length || 0);
    const setUserDate = (value: UserInfo) =>  {
        userDate.value = value;
    }
    const deleteUserDate = () =>  {
        userDate.value = null;
    }

    return {
        userDate: skipHydrate(userDate),
        countFavorites,
        countOrders,
        setUserDate,
        deleteUserDate,
    }
})
