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
                    <YandexMapClusterer
                        v-model="clusterer"
                    >
<!--                        <YandexMapDefaultMarker-->
<!--                            v-for="(coordinates) in getPointList"-->
<!--                            :key="coordinates.join(',')"-->
<!--                            :settings="{coordinates}"-->
<!--                        />-->
<!--                        <template #cluster="{ length }">-->
<!--                            <div-->
<!--                                class="cluster"-->
<!--                                :style="{-->
<!--                                  display: 'flex',-->
<!--                                  justifyContent: 'center',-->
<!--                                  alignItems: 'center',-->
<!--                                  width: '50px',-->
<!--                                  aspectRatio: '1/1',-->
<!--                                  background: 'green',-->
<!--                                  color: '#fff',-->
<!--                                  borderRadius: '100%',-->
<!--                                  cursor: 'pointer',-->
<!--                                }"-->
<!--                            >-->
<!--                                {{ length }}-->
<!--                            </div>-->
<!--                        </template>-->
                    </YandexMapClusterer>
                </YandexMap>
                </client-only>
            </section>
        </main>
    </div>
</template>
<script setup lang="ts">
import type { YMap,  YMapLocation } from '@yandex/ymaps3-types';
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
const setting = {
    location: {
        center: [37.617644, 55.755819],
        zoom: 10,
    },
}

const parceBounds = (bounds: number[][]) => {
    return bounds.reduce((acc: string[], currentValue: number[]) => {
        const bound = currentValue.map(num => num.toFixed(4))

        acc = [...acc, ...bound];

        return acc;
    }, []);
}
const stateChangedHandler = ({location}) => {
    // console.log('bounds', location.bounds);
    getProductsInMapRequest(parceBounds(location.bounds).join(','));

};

watch(map, (nevMap: YMap) => {
    // getProductsInMapRequest(nevMap!.bounds.join(','))
    // console.log('watch', );
})
</script>

<style scoped lang="scss">
@import "@/pages/catalog/map/styles/map-catalog-page.scss";
</style>

