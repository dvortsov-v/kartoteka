<template>
    <div class="main-page-recommendations">
        <div class="main-page-recommendations__wrap">
            <h3 class="main-page-recommendations__title h3">
                Рекомендуем
            </h3>
            <ul class="main-page-recommendations__list">
                <li v-for="product in productsStore.products" class="main-page-recommendations__item">
                    <CommonCardProduct :product="product" />
                </li>
            </ul>
            <UiButton @click="navigateTo('/catalog')" theme="transparent" class="main-page-recommendations__more">
                Все предложения
            </UiButton>
        </div>
        <div
            v-if="false"
            class="main-page-recommendations__advertising"
        ></div>
    </div>
</template>
<script lang="ts" setup>
import {useProductsStore} from "~/store/useProductsStore";

const productsStore = useProductsStore()
productsStore.getProducts();
</script>
<style scoped lang="scss">
@import "@/components/MainPage/styles/main-page-recommendations.scss";
</style>
