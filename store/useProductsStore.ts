import { defineStore } from 'pinia'
import {getProductsRequest} from "~/api/ProductsApi";
import {Product} from "~/definitions/interfaces/Products";

export const useProductsStore = defineStore('productsStore', () => {
    const products: Ref<Product[]> = ref([]);
    const getProducts = async () =>  {
        products.value = await getProductsRequest();
    }

    return {
        products,
        getProducts,
    }
})
