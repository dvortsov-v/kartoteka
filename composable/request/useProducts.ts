import {Product} from "~/definitions/interfaces/Products";
import {getProductsRequest, ParamsProduct} from "~/api/ProductsApi";
import {Meta} from "~/definitions/interfaces/Meta";

export const useProducts = () => {
    const route = useRoute();
    const products = ref<Product[]>([]);
    const paginationDate = ref<Meta>();

    const countProductOfCategory = computed(() => unref(paginationDate)?.total || 0);

    const getProducts = async (params?: ParamsProduct) => {
        let paramsRequest: ParamsProduct = {};

        if(route.params.id) {
            paramsRequest.category_ids = route.params.id
        }

        paramsRequest = {...paramsRequest, ...route?.query, ...params};

        const result = await getProductsRequest(paramsRequest);

        if(!result?.data || !result?.data.length) {
            showError(createError({
                statusCode: 404,
                message: `Страницы не существует`,
                fatal: true,
            }));
        }

        if(result) {
            products.value = result.data;
            paginationDate.value = result.meta;

            return result.data
        }

        return;
    }

    watch(() => route.query, () => {
        getProducts();
    })

    return {
        products,
        paginationDate,
        countProductOfCategory,
        getProducts,
    }
}
