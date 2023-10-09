<template>
    <div class="offer-product">
        <div class="offer-product__base">
            <picture @click="navigateTo(`/catalog/product/1`)" class="offer-product__picture">
                <source
                    srcset="/images/product.webp"
                    type="image/webp"
                >
                <img
                    src="/images/product.jpg"
                    alt="card-product"
                    class="offer-product__img"
                >
            </picture>
            <h5 class="offer-product__name">Kia Mohave, 2020</h5>
            <span class="offer-product__count">1 шт.</span>
            <span class="offer-product__price">2 500 000 ₽</span>
            <CommonStatus theme="green" class="offer-product__status">Активно</CommonStatus>
            <div class="offer-product__actions offer-product-actions">
                <button
                    @click="setIsShowAction"
                    type="button"
                    class="offer-product-actions__show"
                >
                    <svg-icon name="dots" class="offer-product-actions__icon"/>
                </button>
                <div
                    v-if="isShowAction"
                    class="offer-product-actions__wrap"
                >
                    <div class="offer-product-actions__list">
                        <button
                            type="button"
                            class="offer-product-actions__button"
                        >
                            Редактировать
                        </button>
                        <button
                            type="button"
                            class="offer-product-actions__button"
                        >
                            Снять с продажи
                        </button>

                    </div>
                    <div class="offer-product-actions__bottom">
                        <button
                            type="button"
                            class="offer-product-actions__button"
                        >
                            Удалить

                            <svg-icon name="trash" class="offer-product-actions__del" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="offer-product__additional">
            <span class="offer-product__info">
                <span class="offer-product__date">20.03.2022, 12:32</span>
                <span class="offer-product__geo">Республика Башкортостан</span>
            </span>
            <div class="offer-product__statistic offer-product-statistic">
                <div class="offer-product-statistic__item">
                    <span class="offer-product-statistic__name">Просмотров</span>
                    <span class="offer-product-statistic__value">458</span>
                </div>
                <div class="offer-product-statistic__item">
                    <span class="offer-product-statistic__name">В избранном</span>
                    <span class="offer-product-statistic__value">5 896</span>
                </div>
                <div class="offer-product-statistic__item">
                    <span class="offer-product-statistic__name">Заявок</span>
                    <span class="offer-product-statistic__value">89</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const isShowAction = ref(false);

const setIsShowAction = () => {
    isShowAction.value = !isShowAction.value
}
</script>

<style scoped lang="scss">
@import "@/components/Office/Offer/styles/offer-product.scss";
</style>
