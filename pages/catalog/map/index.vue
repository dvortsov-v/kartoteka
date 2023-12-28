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
import type { YMap } from '@yandex/ymaps3-types';
import type { YMapClusterer } from '@yandex/ymaps3-types/packages/clusterer';
import type { YMapLocation } from '@yandex/ymaps3-types/imperative/YMap';
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
    var customBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="max-width: 190px" class=cluster-balloon>'+
            '<ul class=list>',
            // Выводим в цикле список всех геообъектов.
            '{% for geoObject in properties.geoObjects %}',
            '<li><a href=# data-placemarkid="@{{ geoObject.id }}" class="list_item">@{{ geoObject.properties.balloonContentHeader|raw }}</a></li>',
            '{% endfor %}',
            '</ul>' +
            '</div>'+
            '<div style="max-width: 360px" class="cluster-balloon-content"></div>'
    );

    const loadingObjectManager = new ymaps.LoadingObjectManager('https://petr.burov.fvds.ru/api/map/get?bbox=%b', {
        clusterize: true,
        clusterHasBalloon: true,
        clusterBalloonContentLayout: customBalloonContentLayout,
        clusterBalloonMinHeight: 400,
        clusterBalloonMinWidth: 600,
        clusterNumbers: [5, 10, 15, 20, 25],
        clusterIconShape: {
            type: 'Rectangle',
            coordinates: [[0, 0], [40, 40]]
        },
        geoObjectOpenBalloonOnClick: true
    });

    // Создание собственного вида маркеров
    const myCustomBalloonLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="custom-balloon-layout">' +
        '<h3 class="custom-balloon-header">$[properties.name]</h3>' +
        '<div class="custom-balloon-content">$[properties.description]</div>' +
        '</div>'
    );

    const myCustomIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="custom-icon-layout">$[properties.iconContent]</div>'
    );

    const myCustomIcon = ymaps.templateLayoutFactory.createClass(
        '<div class="custom-icon">$[properties.iconContent]</div>'
    );
    myMap.geoObjects.add(loadingObjectManager);

    loadingObjectManager.objects.options.set({
        balloonShadow: false,
        balloonLayout: myCustomBalloonLayout,
        balloonContentLayout: myCustomIconContentLayout,
        balloonPanelMaxMapArea: 0
    });
}

onMounted(() => {
    ymaps.ready(initMap);
})

const {
    products,
} = useProducts();

const map = shallowRef<YMap | undefined>();
const clusterer = shallowRef<YMapClusterer | null>(null);
const localLocation = shallowRef<YMapLocation | null>(null);
const setting = {
    location: localLocation || {
        center: [37.617644, 55.755819],
        zoom: 10,
    },
}
</script>

<style scoped lang="scss">
@import "@/pages/catalog/map/styles/map-catalog-page.scss";
</style>
