<template>
    <div class="map-catalog-page">
        <UiContainer class="map-catalog-page__wrapper">
            <main class="map-catalog-page__main map-catalog-page-main">
                <aside class="map-catalog-page-main__aside">
                </aside>
                <section class="map-catalog-page-main__section">
<!--                            clusterBalloonContentLayout: customBalloonContentLayout,-->
<!--                            :markerId="product.id"-->
<!--                            :center="[55.751574, 37.573856]"-->
<!--                            :zoom="1000"-->
<!--                            :coordinates="[product.lat, product.lng]"-->
                    <client-only>
<!--                            :markerId="product.id"-->
<!--                            :coordinates="[product.lat, product.lng]"-->
                        <YandexMap
                            :coordinates="[products[0].lat, products[0].lng]"
                            :zoom="10"
                            class="map-catalog-page-main__maps">
                            <YandexMarker
                                v-for="product in products"
                                :markerId="product.id"
                                :coordinates="[product.lat, product.lng]"
                            ></YandexMarker>
                        </YandexMap>
                    </client-only>
                </section>
            </main>
        </UiContainer>
    </div>
</template>
<script setup lang="ts">
import {YandexMap, YandexMarker} from 'vue-yandex-maps';
import {useProducts} from "~/composable/request/useProducts";
const {
    products,
    getProducts,
} = useProducts();

getProducts()
</script>

<style scoped lang="scss">
@import "@/pages/catalog/map/styles/map-catalog-page.scss";
</style>
