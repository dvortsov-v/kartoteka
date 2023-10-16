import {getRegionsRequest} from "~/api/RegionsApi";
import {RegionsRequest, Regions} from "~/definitions/interfaces/Regions";

export const useRegions = () => {
    const regions: Ref<Regions[]> = ref([]);
    const parseRegions = (regions: RegionsRequest) => Object.entries(regions).reduce((acc: Regions[], current) => {
        acc.push({
            id: current[0],
            name: current[1],
        })
        return acc;
    }, []);
    const getRegions = async () => {
        regions.value = parseRegions(await getRegionsRequest());
    };

    return {
        regions,
        getRegions,
    }
}
