import {Category} from "~/definitions/interfaces/Categories";
import {getCategoryRequest} from "~/api/CategoriesApi";

export const useCategory = () => {
    const route = useRoute();
    const category: Ref<Category | never> = ref();
    const getCategory= async () =>  {
        category.value = await getCategoryRequest(route.params.id);
    }

    return {
        category,
        getCategory,
    }
}
