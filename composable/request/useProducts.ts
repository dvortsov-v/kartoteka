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
        const query = params || route?.query

        delete query.name;

        paramsRequest = {...paramsRequest, ...query};

        const result = await getProductsRequest(paramsRequest);
        console.log(result)

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

    // watch(() => route.query, () => {
    //     if(route.query.name === null || route.query.name === undefined || route.query.name === '' || route.query.name) {
    //         return
    //     }
    //
    //     getProducts();
    // })


    onBeforeRouteUpdate((to) => {
        if(to.query.name === null || to.query.name === undefined || to.query.name === '' || !Boolean(to.query.name)) {
            getProducts(to.query);
        }
    })

    return {
        products,
        paginationDate,
        countProductOfCategory,
        getProducts,
    }
}
