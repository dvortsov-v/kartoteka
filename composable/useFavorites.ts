import {useFavoritesStore} from "~/store/useFavoritesStore";

export const useFavorites = () => {
    const {isFavoriteProduct} = useFavoritesStore();
    const themeFavoriteBtn = (productId: number) => isFavoriteProduct(productId) ? 'primary' : 'gray';
    const iconFavoriteBtn = (productId: number) => isFavoriteProduct(productId) ? 'check-double' : 'star-line';

    return {
        themeFavoriteBtn,
        iconFavoriteBtn,
    }
}
