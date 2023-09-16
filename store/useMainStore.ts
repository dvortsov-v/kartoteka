import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
    const counter = ref(0);
    const increment = () =>  {
        counter.value++
    }

    return {counter, increment}
})
