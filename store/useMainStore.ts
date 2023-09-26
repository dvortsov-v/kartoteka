import { defineStore, skipHydrate } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useMainStore = defineStore('mainStore', () => {
    const isAuthUser: Ref<boolean> = useLocalStorage('isAuthUser', false);

    const setIsAuthUser = async (value: boolean) =>  {
        isAuthUser.value = value;
    }

    return {
        isAuthUser: skipHydrate(isAuthUser),
        setIsAuthUser,
    }
})
