import { defineStore, skipHydrate } from 'pinia'
import {useLocalStorage} from '@vueuse/core'

export const useUserStore = defineStore('userStore', () => {
    const userName: Ref<string> = useLocalStorage('userName', '');
    const countOrders: Ref<number> = useLocalStorage('countOrders', 0);
    const setUserName = (value: string) =>  {
        userName.value = value;
    }
    const setCountOrders = (value: number) =>  {
        countOrders.value = value;
    }

    return {
        userName: skipHydrate(userName),
        countOrders: skipHydrate(countOrders),
        setUserName,
        setCountOrders,
    }
})
