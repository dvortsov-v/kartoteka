import {useFavoritesStore} from "~/store/useFavoritesStore";
import {Product} from "~/definitions/interfaces/Products";
import {deleteFavoritesRequest, getFavoritesRequest, setFavoritesRequest} from "~/api/Favorites";
import {Meta} from "~/definitions/interfaces/Meta";

export const useFavorites = () => {
    const paginationDate = ref<Meta>();
    const {
        isFavoriteProduct,
        addFavorites,
        setFavorites: setFavoritesStore,
        deleteFavorites: deleteFavoritesStore
    } = useFavoritesStore()

    const getFavorites = async (userToken: string | null | undefined): Promise<void> => {
        const result = await getFavoritesRequest(userToken);

        if(result) {
            setFavoritesStore(result.data);
            paginationDate.value = result.meta;
        }
    }
    const setFavorites = async (userToken: string, product: Product): Promise<void> => {
        try {
            if(userToken) {
                await setFavoritesRequest(userToken, String(product.id));
            }
            addFavorites(product);
        } catch (e) {
            console.error(e);
        }
    }
    const deleteFavorites = async (userToken: string, product: Product): Promise<void> => {
        try {
            if(userToken) {
                await deleteFavoritesRequest(userToken, String(product.id));
            }
            deleteFavoritesStore(product.id)
        } catch (e) {
            console.error(e);
        }
    }

    const themeFavoriteBtn = (productId: number) => isFavoriteProduct(productId) ? 'primary' : 'gray';
    const iconFavoriteBtn = (productId: number) => isFavoriteProduct(productId) ? 'check-double' : 'star-line';
    const handleFavoritesClick = (product: Product, userToken: string = '') => {
        if(isFavoriteProduct(product.id)) {
            deleteFavorites(userToken, product);
        } else {
            setFavorites(userToken, product)
        }
    }
    return {
        getFavorites,
        themeFavoriteBtn,
        iconFavoriteBtn,
        handleFavoritesClick,
    }
}
