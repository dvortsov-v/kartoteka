<template>
    <div class="product">
        <div class="product__information product-information">
            <picture class="product-information__picture">
                <source
                    srcset="/assets/images/product.webp"
                    type="image/webp"
                >
                <img
                    src="/assets/images/product.jpg"
                    alt="product"
                    class="product-information__img"
                >
            </picture>
            <div class="product-information__description">
                <h3 class="product-information__title">
                    Доля участия ООО «Агрофирма Дрожжановская» в размере 33% от уставного капитала ООО «Дружба»
                </h3>
                <p class="product-information__text">
                    Описание с характеристиками товара, которые заполняются при добавлении карточки. Максимальное описание в 2 строки.
                </p>
            </div>
            <div class="product-information__addition">
                <h3 class="product-information__price">10 568 206 ₽</h3>
                <div class="product-information__status product-status product-status--orange">
                    Стоимость ниже оценочной на 20%
                </div>
                <div class="product-information__incorporate product-incorporate">
                    <span class="product-incorporate__text">
                        В составе
                        <span class="product-incorporate__text--bold">лота №3</span>
                    </span>
                    <span class="product-incorporate__price">
                        стоимостью 36 314 305 ₽
                    </span>
                </div>
            </div>
        </div>
        <div class="product-actions product__actions">
            <div class="product-actions__box">
                <UiButton
                    theme="gray"
                    class="product-actions__favorites"
                >
                    <svg-icon name="star-line" class="product-actions__icon" />
                </UiButton>
                <div class="product-actions__addition product-actions-addition">
                    <span class="product-actions-addition__number">№ 124115</span>
                    <span class="product-actions-addition__date">20.03.2022, 12:32</span>
                    <span class="product-actions-addition__city">Республика Башкортостан</span>
                </div>
            </div>
            <div class="product-actions__buttons">
                <UiButton
                    theme="gray"
                    class="product-actions__consultation product-actions-button"
                >

                    <span class="product-actions-button__text">
                        Консультация
                    </span>
                </UiButton>
                <UiButton class="product-actions__buy product-actions-button">
                    <span class="product-actions-button__text">
                        Хочу купить
                    </span>
                </UiButton>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts"></script>

<style scoped lang="scss">
@import "@/components/Common/styles/product.scss";
</style>
