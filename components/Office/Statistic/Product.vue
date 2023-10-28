<template>
    <div class="statistic-page-product">
        <div class="statistic-page-product__row">
            <div class="statistic-page-product__box">
                <span class="statistic-page-product__name">Дата</span>
                <span class="statistic-page-product__value">20.04.2023</span>
            </div>
            <div class="statistic-page-product__box">
                <span class="statistic-page-product__name">Название</span>
                <span class="statistic-page-product__value">CITROEN Berlingo, 2021</span>
            </div>
            <div class="statistic-page-product__box">
                <span class="statistic-page-product__name">Стоимость</span>
                <span class="statistic-page-product__value">606 000 ₽</span>
            </div>
        </div>
        <div class="statistic-page-product__row">
            <div class="statistic-page-product__box">
                <span class="statistic-page-product__name">Заявки</span>
                <span class="statistic-page-product__value">165</span>
            </div>
            <div class="statistic-page-product__box">
                <span class="statistic-page-product__name">В избранном</span>
                <span class="statistic-page-product__value">485</span>
            </div>
            <div class="statistic-page-product__box">
                <span class="statistic-page-product__name">Просмотров</span>
                <span class="statistic-page-product__value">2 568 998</span>
            </div>
            <div class="statistic-page-product__box statistic-page-product__box--status">
                <span class="statistic-page-product__name">Статус</span>
                <span class="statistic-page-product__value">
                    <CommonStatus theme="green" class="statistic-page-product__status">Выполнено</CommonStatus>
                    <OfficeStatisticActions class="statistic-page-product__actions" />
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import "@/components/Office/Statistic/styles/statistic-page-product.scss";
</style>
