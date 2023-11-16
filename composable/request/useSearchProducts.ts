import {Product} from "~/definitions/interfaces/Products";
import {getProductsRequest} from "~/api/ProductsApi";
import {Meta} from "~/definitions/interfaces/Meta";

export const useSearchProducts = () => {
    const route = useRoute();
    const searchProducts = ref<Product[]>([]);
    const paginationDate = ref<Meta>();

    const countProductOfResult = computed(() => unref(paginationDate)?.total || 0);

    const getProductInSearch = async () => {
        const result = await getProductsRequest(route?.query);
        if(result) {
            searchProducts.value = result.data;
            paginationDate.value = result.meta;

            return result.data
        }
    }
    const resetProductInSearch = async () => {
        searchProducts.value = [];
        paginationDate.value = undefined;
    }

    return {
        searchProducts,
        paginationDate,
        countProductOfResult,
        getProductInSearch,
        resetProductInSearch,
    }
}
