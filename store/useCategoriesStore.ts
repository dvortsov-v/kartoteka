import {defineStore, skipHydrate} from 'pinia'
import {Category} from "~/definitions/interfaces/Categories";
import {useLocalStorage} from "@vueuse/core";

export const useCategoriesStore = defineStore('categoriesStore', () => {
    const categories: Ref<Category[]> = useLocalStorage('categories', []);

    const setCategories = async (value: Category[]) =>  {
        categories.value = value;
    }

    return {
        categories: skipHydrate(categories),
        setCategories,
    }
})
