import {Category, ResultRequestCategory} from "~/definitions/interfaces/Categories";
import {useMainStore} from "~/store/useMainStore";
import {ResultRequestUserMe, UserInfo, UserInfoUpdate, UserLogin} from "~/definitions/interfaces/User";
import {Product, ResultRequesProducts} from "~/definitions/interfaces/Products";

export const login = async (email: string, password: string): Promise<string | null | undefined> => {
    const config = useRuntimeConfig();

    const { data }: {data: Ref<UserLogin>} = await useFetch(`${config.public.baseURL}/auth/login`, {
        method: 'POST',
        body: {
            email,
            password,
        }
    });

    if(unref(data)) {
        const {setIsAuthUser} = useMainStore();
        document.cookie = `userToken=${unref(data).token_type} ${unref(data).access_token}; max-age=${unref(data).expires_in}`;
        await setIsAuthUser(true);

        return `${unref(data).token_type} ${unref(data).access_token}`;
    }
}
export const register = async (email: string, password: string): Promise<string | null | undefined> => {
    const config = useRuntimeConfig();

    try {
        const { data }: {data: Ref<UserLogin>} = await useFetch(`${config.public.baseURL}/auth/register`, {
            method: 'POST',
            body: {
                email,
                password,
            }
        });

        if(unref(data)) {
            const {setIsAuthUser} = useMainStore();
            document.cookie = `userToken=${unref(data).token_type} ${unref(data).access_token}; max-age=${unref(data).expires_in}`;
            await setIsAuthUser(true);

            return `${unref(data).token_type} ${unref(data).access_token}`;
        }
    } catch (e) {
        console.error('Ошибка регистрации');
    }
}
export const refresh = async (token: string): Promise<Category | object> => {
    const config = useRuntimeConfig()
    const { data }: {data: Ref<ResultRequestCategory>} = await useFetch( `${config.public.baseURL}/auth/refresh`, {
        method: 'POST',
        headers: {
            'Authorization': token,
        }
    });

    if(data?.value?.data) {
        return data.value.data;
    }

    return {};
}
export const me = async (token: string | null | undefined): Promise<UserInfo | null> => {
    if(token) {
        const config = useRuntimeConfig()
        const {data}: { data: Ref<ResultRequestUserMe> } = await useFetch(`${config.public.baseURL}/auth/me`, {
            method: 'POST',
            headers: {
                'Authorization': token,
            }
        });

        return unref(data).data ?? null;
    }
    return null;
}
export const logout = async (token: string | null | undefined): Promise<void> => {
    const config = useRuntimeConfig();
    if(token) {
        try {
            await useFetch( `${config.public.baseURL}/auth/logout`, {
                method: 'POST',
                headers: {
                    'Authorization': token,
                }
            });

            const {setIsAuthUser} = useMainStore();
            document.cookie = `userToken=''; max-age=0`;
            await setIsAuthUser(false);
        } catch (e) {
            console.error('Ошибка разлогинивания');
        }
    }
}
export const update = async (token: string | null | undefined, updateDate: UserInfoUpdate): Promise<UserInfo | undefined> => {
    if(token) {
        const config = useRuntimeConfig();
        try {
            const {data}: { data: Ref<{ data: UserInfo }> } = await useFetch( `${config.public.baseURL}/auth/update`, {
                method: 'POST',
                headers: {
                    'Authorization': token,
                },
                body: updateDate,
            });

            return unref(data).data ?? undefined;
        } catch (e) {
            console.error('Ошибка обновления данных пользователя', e);
        }
    }
}

export const getUserProductsRequest = async (token: string | null | undefined): Promise<ResultRequesProducts | null> => {
    const config = useRuntimeConfig()
    if(token){
        try{
            const { data }: {data: Ref<ResultRequesProducts>} = await useFetch(`${config.public.baseURL}/user/products`, {
                headers: {
                    'Authorization': token,
                }
            });

            if(unref(data)) {
                return unref(data);
            }
        } catch (e) {
            console.error('Ошибка получения заказов пользователя');
            return null;
        }
    }

    return null;
}
