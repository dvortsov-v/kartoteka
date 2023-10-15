import {Category, CategoryBreacrumbs} from "~/definitions/interfaces/Categories";
import {getCategoryBreacrumbsRequest, getCategoryRequest} from "~/api/CategoriesApi";
interface ParceBreadcrumbs {
    name: string,
    path: string,
}
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
    const parceBreadcrumbs = (breadcrumbs: CategoryBreacrumbs): ParceBreadcrumbs[]  => {
        const acc = [];

        if(breadcrumbs.parent_category) {
            const item = parceBreadcrumbs(breadcrumbs.parent_category);

            acc.push(...item);
        }
        if(breadcrumbs) {
            acc.push({
                name: breadcrumbs.name,
                path: `/catalog/${breadcrumbs.id}`,
            });
        }

        return acc;
    }
    const getBreadcrumbs = async () =>  {
        breadcrumbs.value = breadcrumbs.value.concat(parceBreadcrumbs(await getCategoryBreacrumbsRequest(route.params.id)));
    }

    return {
        category,
        breadcrumbs,
        getCategory,
        getBreadcrumbs,
    }
}
