<template>
    <div class="card-product">
        <div class="card-product__information card-product-information">
            <picture class="card-product-information__picture">
                <source
                    srcset="/assets/images/product.webp"
                    type="image/webp"
                >
                <img
                    src="/assets/images/product.jpg"
                    alt="card-product"
                    class="card-product-information__img"
                >
            </picture>
            <div class="card-product-information__description">
                <h3 class="card-product-information__title">
                    Доля участия ООО «Агрофирма Дрожжановская» в размере 33% от уставного капитала ООО «Дружба»
                </h3>
                <p class="card-product-information__text">
                    Описание с характеристиками товара, которые заполняются при добавлении карточки. Максимальное описание в 2 строки.
                </p>
            </div>
            <div class="card-product-information__addition">
                <h3 class="card-product-information__price">10 568 206 ₽</h3>
                <div class="card-product-information__status card-product-status card-product-status--orange">
                    Стоимость ниже оценочной на 20%
                </div>
                <div class="card-product-information__incorporate card-product-incorporate">
                    <span class="card-product-incorporate__text">
                        В составе
                        <span class="card-product-incorporate__text--bold">лота №3</span>
                    </span>
                    <span class="card-product-incorporate__price">
                        стоимостью 36 314 305 ₽
                    </span>
                </div>
            </div>
        </div>
        <div class="card-product-actions card-product__actions">
            <div class="card-product-actions__box">
                <UiButton
                    theme="gray"
                    class="card-product-actions__favorites"
                >
                    <svg-icon name="star-line" class="card-product-actions__icon" />
                </UiButton>
                <div class="card-product-actions__addition card-product-actions-addition">
                    <span class="card-product-actions-addition__number">№ 124115</span>
                    <span class="card-product-actions-addition__date">20.03.2022, 12:32</span>
                    <span class="card-product-actions-addition__city">Республика Башкортостан</span>
                </div>
            </div>
            <div class="card-product-actions__buttons">
                <UiButton
                    theme="gray"
                    class="card-product-actions__consultation card-product-actions-button"
                >

                    <span class="card-product-actions-button__text">
                        Консультация
                    </span>
                </UiButton>
                <UiButton class="card-product-actions__buy card-product-actions-button">
                    <span class="card-product-actions-button__text">
                        Хочу купить
                    </span>
                </UiButton>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
@import "@/components/Common/styles/card-product.scss";
</style>
