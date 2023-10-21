import {Product, ResultRequesProducts} from "~/definitions/interfaces/Products";
import {getProductsRequest, ParamsProduct} from "~/api/ProductsApi";
import {Meta} from "~/definitions/interfaces/Meta";

export const useProducts = () => {
    const route = useRoute();
    const products = ref<Product[]>([]);
    const paginationDate = ref<Meta>();

    const countProductOfCategory = computed(() => unref(paginationDate)?.total || 0);

    const getProducts = async (params?: ParamsProduct) => {
        let paramsRequest: ParamsProduct = {};

        if(route?.query?.page) {
            paramsRequest.page = route?.query?.page;
        }
        if(route.params.id) {
            paramsRequest.category_ids = route.params.id
        }

        paramsRequest = {...paramsRequest, ...params};

        const {data, meta}: ResultRequesProducts | never = await getProductsRequest(paramsRequest);
        products.value = data;
        paginationDate.value = meta
    }

    watch(() => route.query.page, () => {
        if(route.query.page) {
            getProducts();
        }
    })

    return {
        products,
        paginationDate,
        countProductOfCategory,
        getProducts,
    }
}
