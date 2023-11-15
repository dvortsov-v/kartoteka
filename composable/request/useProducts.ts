import {Product} from "~/definitions/interfaces/Products";
import {getProductsRequest, ParamsProduct} from "~/api/ProductsApi";
import {Meta} from "~/definitions/interfaces/Meta";

export const useProducts = () => {
    const route = useRoute();
    const products = ref<Product[]>([]);
    const searchProducts = ref<Product[]>([]);
    const paginationDate = ref<Meta>();

    const countProductOfCategory = computed(() => unref(paginationDate)?.total || 0);

    const getProducts = async () => {
        let paramsRequest: ParamsProduct = {};

        if(route.params.id) {
            paramsRequest.category_ids = route.params.id
        }
        const query = route?.query

        delete query.name;

        paramsRequest = {...paramsRequest, ...query};

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
    }

    const getProductInSearch = async () => {
        console.log(route?.query)
        const result = await getProductsRequest(route?.query);

        if(result) {
            searchProducts.value = result.data;
        }
    }

    watch(() => route.query, () => {
        if(!route.query.name) {
            getProducts();
        }
    })

    return {
        products,
        searchProducts,
        paginationDate,
        countProductOfCategory,
        getProducts,
        getProductInSearch,
    }
}
