import {Product, ResultRequesProducts} from "~/definitions/interfaces/Products";
import {getProductsRequest, ParamsProduct} from "~/api/ProductsApi";
import {Meta} from "~/definitions/interfaces/Meta";

export const useProducts = () => {
    const route = useRoute();
    const products = ref<Product[]>([]);
    const paginationDate = ref<Meta>();

    const getProducts = async (params?: ParamsProduct) => {
        const {data, meta}: ResultRequesProducts | never = await getProductsRequest({page: route?.query?.page, ...params});
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
        getProducts,
    }
}
