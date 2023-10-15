import { defineStore } from 'pinia'
import {Product} from "~/definitions/interfaces/Products";
import {useLocalStorage} from "@vueuse/core";

export const useFavoritesStore = defineStore('favoritesStore', () => {
    const favorites: Ref<Product[]> = useLocalStorage('favorites', []);

    const addFavorites = (product: Product) => {
        unref(favorites).push({...product});
    }

    const isFavoriteProduct = (productId: number) => unref(favorites).find((favorite: Product) => favorite.id === productId);
    const deleteFavorites = (product: Product) => {
        // const  unref(favorites)
        // unref(favorites).push(product);
    }
    return {
        favorites,
        addFavorites,
        deleteFavorites,
        isFavoriteProduct,
    }
})
