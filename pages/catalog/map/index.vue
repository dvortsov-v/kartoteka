<template>
    <div class="map-catalog-page">
        <main class="map-catalog-page__main map-catalog-page-main">
            <aside class="map-catalog-page-main__aside">
            </aside>
            <section class="map-catalog-page-main__section">
<!--                <div id="map" class="map-catalog-page-main__frame"></div>-->
                <client-only>
                <YandexMap
                    v-model="map"
                    :settings="setting"
                    class="map-catalog-page-main__frame"
                >
                    <YandexMapDefaultSchemeLayer/>
                    <YandexMapDefaultFeaturesLayer />
                    <YandexMapListener :settings="{onUpdate: stateChangedHandler}" />
                    <yandex-map-controls :settings="{ position: 'right' }">
                        <yandex-map-zoom-control />
                    </yandex-map-controls>

                    <YandexMapDefaultMarker
                        v-for="point in points.features"
                        :key="point.geometry.coordinates.join(',')"
                        :settings="{coordinates: point.geometry.coordinates}"
                    />
<!--                    <YandexMapClusterer-->
<!--                        v-model="clusterer"-->
<!--                    >-->

<!--&lt;!&ndash;                        <template #cluster="{ length }">&ndash;&gt;-->
<!--&lt;!&ndash;                            <div&ndash;&gt;-->
<!--&lt;!&ndash;                                class="cluster"&ndash;&gt;-->
<!--&lt;!&ndash;                                :style="{&ndash;&gt;-->
<!--&lt;!&ndash;                                  display: 'flex',&ndash;&gt;-->
<!--&lt;!&ndash;                                  justifyContent: 'center',&ndash;&gt;-->
<!--&lt;!&ndash;                                  alignItems: 'center',&ndash;&gt;-->
<!--&lt;!&ndash;                                  width: '50px',&ndash;&gt;-->
<!--&lt;!&ndash;                                  aspectRatio: '1/1',&ndash;&gt;-->
<!--&lt;!&ndash;                                  background: 'green',&ndash;&gt;-->
<!--&lt;!&ndash;                                  color: '#fff',&ndash;&gt;-->
<!--&lt;!&ndash;                                  borderRadius: '100%',&ndash;&gt;-->
<!--&lt;!&ndash;                                  cursor: 'pointer',&ndash;&gt;-->
<!--&lt;!&ndash;                                }"&ndash;&gt;-->
<!--&lt;!&ndash;                            >&ndash;&gt;-->
<!--&lt;!&ndash;                                {{ length }}&ndash;&gt;-->
<!--&lt;!&ndash;                            </div>&ndash;&gt;-->
<!--&lt;!&ndash;                        </template>&ndash;&gt;-->
<!--                    </YandexMapClusterer>-->
                </YandexMap>
                </client-only>
            </section>
        </main>
    </div>
</template>
<script setup lang="ts">
import type { YMap,  LngLatBounds } from '@yandex/ymaps3-types';
import type { YMapClusterer } from '@yandex/ymaps3-types/packages/clusterer';

import {
    YandexMap,
    YandexMapControls,
    YandexMapDefaultFeaturesLayer,
    YandexMapDefaultMarker,
    YandexMapClusterer,
    YandexMapListener,
    YandexMapDefaultSchemeLayer,
    YandexMapZoomControl,
} from "vue-yandex-maps";
import {getProductsInMapRequest} from "~/api/MapApi";

//
// const {
//     products,
// } = useProducts();

const map = shallowRef<YMap | undefined>();
const clusterer = shallowRef<YMapClusterer | null>(null);
const isfetch = ref(false)
const setting = {
    location: {
        center: [50.9248,28.1250],
        zoom: 10,
    },
}
const points = ref({
    features: [],
});

const parceBounds = (bounds: LngLatBounds) => {
    return bounds.reduce((acc: string[], currentValue: number[]) => {
        const bound = currentValue.map(num => num.toFixed(4))

        acc = [...acc, ...bound];

        return acc;
    }, []);
}
const stateChangedHandler = ({location}) => {
    // console.log('bounds', location.bounds);
    if(unref(isfetch)) {
        return
    }
    isfetch.value = true
    setTimeout(async () => {
        points.value = await getProductsInMapRequest(parceBounds(location.bounds).join(','));

        isfetch.value = false
    }, 1000)


};

// watch(map, async (nevMap: YMap) => {
//     points.value = await getProductsInMapRequest(parceBounds(nevMap!.bounds).join(','))
//     // console.log('watch', );
// })
</script>

<style scoped lang="scss">
@import "@/pages/catalog/map/styles/map-catalog-page.scss";
</style>

