import { defineStore } from 'pinia'
import {Category} from "~/definitions/interfaces/Categories";

export const useCategoriesStore = defineStore('categoriesStore', () => {
    const categories: Ref<Category[]> = ref([]);
    const setCategories = async (value: Category[]) =>  {
        categories.value = value;
    }

    return {
        categories,
        setCategories,
    }
})
