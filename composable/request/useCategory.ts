import {Category} from "~/definitions/interfaces/Categories";
import {getCategoryBreacrumbsRequest, getCategoryRequest} from "~/api/CategoriesApi";
import {useParceBreadcrumbs, ParceBreadcrumbs} from "~/composable/useParceBreadcrumbs";

export const useCategory = () => {
    const route = useRoute();
    const category: Ref<Category | undefined |never> = ref();
    const breadcrumbs: Ref<ParceBreadcrumbs[] |never> = ref([{
        name: 'Каталог',
        path: '/catalog',
    }]);
    const getCategory= async () =>  {
        category.value = await getCategoryRequest(route.params.id);
    }
    const getBreadcrumbs = async () =>  {
        breadcrumbs.value = breadcrumbs.value.concat(useParceBreadcrumbs(await getCategoryBreacrumbsRequest(route.params.id)));
    }

    return {
        category,
        breadcrumbs,
        getCategory,
        getBreadcrumbs,
    }
}
