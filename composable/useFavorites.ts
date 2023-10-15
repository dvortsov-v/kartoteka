import {useFavoritesStore} from "~/store/useFavoritesStore";
import {Product} from "~/definitions/interfaces/Products";

export const useFavorites = () => {
    const {
        isFavoriteProduct,
        addFavorites,
        deleteFavorites
    } = useFavoritesStore();

    const themeFavoriteBtn = (productId: number) => isFavoriteProduct(productId) ? 'primary' : 'gray';
    const iconFavoriteBtn = (productId: number) => isFavoriteProduct(productId) ? 'check-double' : 'star-line';
    const handleFavoritesClick = (product: Product) => {
        if(isFavoriteProduct(product.id)) {
            deleteFavorites(product.id);
        } else {
            addFavorites(product);
        }
    }
    return {
        themeFavoriteBtn,
        iconFavoriteBtn,
        handleFavoritesClick,
    }
}
