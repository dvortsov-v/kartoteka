import {Category} from "~/definitions/interfaces/Categories";
import {getCategoriesRequest} from "~/api/CategoriesApi";
import {useCategoriesStore} from "~/store/useCategoriesStore";

export const useCategories = () => {
    const categories: Ref<Category[]> = ref([]);
    const {setCategories} = useCategoriesStore()

    const getCategories = async () =>  {
        categories.value = await getCategoriesRequest();

        setCategories(categories.value);
    }

    return {
        categories,
        getCategories,
    }
}
