import {Category} from "~/definitions/interfaces/Categories";
import {getCategoriesRequest} from "~/api/CategoriesApi";

export const useCategories = () => {
    const categories: Ref<Category[]> = ref([]);
    console.log(123);
    const getCategories = async () =>  {
        categories.value = await getCategoriesRequest();
    }

    return {
        categories,
        getCategories,
    }
}
