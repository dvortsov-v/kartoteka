import {ResultRequesProducts} from "~/definitions/interfaces/Products";

export const getFavoritesRequest = async (token: string| null | undefined): Promise<ResultRequesProducts | null> => {
    if(token) {
        const config = useRuntimeConfig()

        const { data }: {data: Ref<ResultRequesProducts>} = await useFetch(`${config.public.baseURL}/products`, {
            headers: {
                'Authorization': token,
            }
        });

        if(unref(data)) {
            return {
                data: unref(data).data.filter((product) => product.is_favorite),
                meta: unref(data).meta,
            };
        }
    }

    return null;
}
export const setFavoritesRequest = async (token: string | null | undefined, id: string| string[]) => {
    if(token) {
        const config = useRuntimeConfig()
        try {
            await useFetch(`${config.public.baseURL}/favorites/${id}`, {
                method: 'POST',
                headers: {
                    'Authorization': token,
                }
            });
        } catch (e) {

        }
    }
}

export const deleteFavoritesRequest = async (token: string | null | undefined, id: string| string[]) => {
    if(token) {
        const config = useRuntimeConfig()
        try {
            await useFetch(`${config.public.baseURL}/favorites/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': token,
                }
            });
        } catch (e) {

        }

    }
}
