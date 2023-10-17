<template>
    <div class="main-page-recommendations">
        <div class="main-page-recommendations__wrap">
            <h3 class="main-page-recommendations__title h3">
                Рекомендуем
            </h3>
            <div class="main-page-recommendations__products">
                <ul class="main-page-recommendations__list">
                    <li v-for="product in products" class="main-page-recommendations__item">
                        <CommonCardProduct :product="product" />
                    </li>
                </ul>
                <div class="main-page-recommendations__advertising main-page-recommendations-advertising">
                    <ul class="main-page-recommendations-advertising__list">
                        <li v-for="banner in bannersProduct" class="main-page-recommendations-advertising__item">
                            <picture class="main-page-recommendations-advertising__picture">
                                <img
                                    :src="`images/${banner.img}`"
                                    class="main-page-recommendations-advertising__img"
                                >
                            </picture>
                        </li>
                    </ul>
                </div>
            </div>
            <UiButton @click="navigateTo('/catalog')" theme="transparent" class="main-page-recommendations__more">
                Все предложения
            </UiButton>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {bannersProduct} from "~/constants/banners";
import {useProducts} from "~/composable/request/useProducts";

const {
    products,
    getProducts,
} = useProducts()

getProducts();

</script>
<style scoped lang="scss">
@import "@/components/MainPage/styles/main-page-recommendations.scss";
</style>
