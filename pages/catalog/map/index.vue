<template>
    <div class="map-catalog-page">
        <UiContainer class="map-catalog-page__wrapper">
            <main class="map-catalog-page__main map-catalog-page-main">
                <aside class="map-catalog-page-main__aside">
                </aside>
                <section class="map-catalog-page-main__section">
                    <div id="map" style="width: 600px; height: 400px"></div>
                </section>
            </main>
        </UiContainer>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import {useProducts} from "~/composable/request/useProducts";

useHead({
    script: [
        'https://api-maps.yandex.ru/2.1/?apikey=7833c4d0-6bd0-47b0-a626-226706e25080&lang=ru_RU'
    ]
})

const initMap = () => {
    const myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 9,
        controls: ['zoomControl'],
    });

    const loadingObjectManager = new ymaps.LoadingObjectManager('https://petr.burov.fvds.ru/api/map/get?bbox=%b', {
        clusterize: true,
        clusterHasBalloon: false,
        geoObjectOpenBalloonOnClick: false
    });
    myMap.geoObjects.add(loadingObjectManager);
}

onMounted(() => {
    ymaps.ready(initMap);
})


const {
    products,
    getProducts,
} = useProducts();
const setting = {
    location: {
        center: [37.617644, 55.755819],
        zoom: 10,
    },
}

const TILES_PATH = 'https://s3.mds.yandex.net/front-maps-static/maps-front-jsapi-3/examples/images/custom-map/tiles';

/* To calculate the coordinates of the lower left and upper right corners of a rectangular coordinate
 * area, we need to know the maximum zoom, width and height of the image in pixels at maximum zoom.
 */
const MAX_ZOOM = 4;
const PIC_WIDTH = 2526;
const PIC_HEIGHT = 1642;

const dataSourceProps = {
    id: 'custom',
    raster: {
        type: 'ground',
        fetchTile: `${TILES_PATH}/{{z}}/tile-{{x}}-{{y}}.jpg`,
    },
    zoomRange: {
        min: 2,
        max: 4,
    },
    clampMapZoom: true,
};

const layerProps = {
    id: 'customLayer',
    source: 'custom',
    type: 'ground',
    options: {
        raster: {
            awaitAllTilesOnFirstDisplay: true,
        },
    },
};

// Calculate the size of all tiles at the maximum zoom.
const worldSize = 2 ** MAX_ZOOM * 256;

// Limiting the scrolling area of our map to the size of the entire image
const RESTRICT_AREA = [
    [-PIC_WIDTH / 2, -PIC_HEIGHT / 2],
    [PIC_WIDTH / 2, PIC_HEIGHT / 2],
];
</script>

<style scoped lang="scss">
@import "@/pages/catalog/map/styles/map-catalog-page.scss";
</style>
