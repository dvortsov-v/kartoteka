import {RegionsRequest} from "~/definitions/interfaces/Regions";

export const getRegionsRequest = async (): Promise<RegionsRequest> => {
    const config = useRuntimeConfig()

    const { data }: {data: Ref<RegionsRequest>} = await useFetch(`${config.public.baseURL}/region`);

    return unref(data) ?? {};
}

