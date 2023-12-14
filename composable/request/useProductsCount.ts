import {Product} from "~/definitions/interfaces/Products";
import {getProductsCountRequest, getProductsRequest, ParamsProduct} from "~/api/ProductsApi";
import {Meta} from "~/definitions/interfaces/Meta";

export const useProductsCount = async (params?: ParamsProduct) => {
    const route = useRoute();
    let paramsRequest: ParamsProduct = {};

    if(route.params.id) {
        paramsRequest.category_ids = route.params.id
    }

    paramsRequest = {...paramsRequest, ...params};

    return await getProductsCountRequest(paramsRequest);
}
