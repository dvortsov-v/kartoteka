import {defineStore, skipHydrate} from 'pinia'
import {Product} from "~/definitions/interfaces/Products";
import {useLocalStorage} from "@vueuse/core";

export const useFavoritesStore = defineStore('favoritesStore', () => {
    let favorites: Ref<Product[]> = useLocalStorage('favorites', []);
    const addFavorites = (product: Product) => {
        favorites.value.push({...product});
    }

    const isFavoriteProduct = (productId: number) => unref(favorites).find((favorite: Product) => favorite.id === productId);
    const deleteFavorites = (productId: number) => {
        favorites.value = unref(favorites).filter((favorite: Product) => favorite.id !== productId);
    }
    return {
        favorites: skipHydrate(favorites),
        addFavorites,
        deleteFavorites,
        isFavoriteProduct,
    }
})
