import {Category, ResultRequestCategory} from "~/definitions/interfaces/Categories";
import {useMainStore} from "~/store/useMainStore";
import {UserLogin} from "~/definitions/interfaces/User";

export const login = async (email: string, password: string): void => {
    const config = useRuntimeConfig();

    const { data }: {data: Ref<UserLogin>} = await useFetch(() => `${config.public.baseURL}/auth/login`, {
        method: 'POST',
        body: {
            email,
            password,
        }
    });

    if(unref(data)) {
        const {setIsAuthUser} = useMainStore()
        document.cookie = `userToken=${unref(data).access_token}; max-age=${unref(data).expires_in}`;
        setIsAuthUser(true);
    }
}
export const register = async (email: string, password: string): Promise<Category | object> => {
    const config = useRuntimeConfig()
    const { data }: {data: Ref<ResultRequestCategory>} = await useFetch(() => `${config.public.baseURL}/auth/register`, {
        method: 'POST',
        body: {
            email,
            password,
        }
    });

    if(data?.value?.data) {
        return data.value.data;
    }

    return {};
}
export const refresh = async (token: string): Promise<Category | object> => {
    const config = useRuntimeConfig()
    const { data }: {data: Ref<ResultRequestCategory>} = await useFetch(() => `${config.public.baseURL}/auth/refresh`, {
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
export const me = async (token: string): Promise<Category | object> => {
    const config = useRuntimeConfig()
    const { data }: {data: Ref<ResultRequestCategory>} = await useFetch(() => `${config.public.baseURL}/auth/me`, {
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
export const logout = async (token: string): Promise<Category | object> => {
    const config = useRuntimeConfig()
    const { data }: {data: Ref<ResultRequestCategory>} = await useFetch(() => `${config.public.baseURL}/auth/logout`, {
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
