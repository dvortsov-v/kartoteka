import { defineStore } from 'pinia'
import {Category} from "~/definitions/interfaces/Categories";
import {getCategoriesRequest} from "~/api/CategoriesApi";

export const useCategoriesStore = defineStore('categories', () => {
    const categories: Ref<Category[]> = ref([]);
    const getCategories = async () =>  {
        categories.value = await getCategoriesRequest();
    }

    return {
        categories,
        getCategories,
    }
})
