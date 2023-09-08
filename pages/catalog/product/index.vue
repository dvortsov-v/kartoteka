<template>
    <div class="product-page">
        <UiContainer class="product-page__wrapper">
            <UiBreadcrumbs class="product-page__breadcrumbs"/>

            <div class="product-page__block">
                <div class="product-page__information product-page-information">
                    <h1 class="product-page-information__title">
                        Mercedes-Benz GLC Coupé
                    </h1>
                    <div class="product-page-information__additional">
                        <span class="product-page-information__number">№ 124115</span>
                        <span class="product-page-information__date">20.03.2022, 12:32</span>
                    </div>
                    <picture class="product-page-information__picture">
                        <source
                            srcset="/assets/images/news-item.webp"
                            type="image/webp"
                        >
                        <img
                            src="/assets/images/news-item.jpg"
                            alt="News Picture"
                            class="news-item__img"
                        >
                    </picture>
                    <div class="product-page-information__slider"></div>
                    <div class="product-page-information__description product-page-information-description">

                        <p class="product-page-information-description__text">
                            Солидный, мощный, ультрасовременный и невероятно грациозный – Mercedes-Benz GLC Coupe – такую машину хочется купить здесь и сейчас. Цена значения имеет, но далеко не первичное.
                        </p>
                        <p class="product-page-information-description__text">
                            Автомобиль стоит того: новый Мерседес-Бенц ГЛЦ Купе (С253) помимо совершенной эстетики собрал в себе характеристики маневренного городского авто, динамичного спортивного купе и практичного внедорожника.
                        Одинаково уверенно себя чувствует в лабиринтах городских улиц, плотном транспортном потоке, на скоростных автомагистралях и грунтовых дорогах далеко за пределами мегаполисов.
                        </p>
                    </div>
                    <div class="product-page-information__location product-page-information-location">
                        <h4 class="product-page-information-location__title">Адрес</h4>
                        <p class="product-page-information-location__text">
                            423819, республика Татарстан, Набережные Челны, проспект Московский, зд 109а, помещение 1006
                        </p>
                        <div class="product-page-information-location__maps"></div>
                    </div>
                    <div class="product-page-information__characteristics product-page-information-characteristics">
                        <div class="product-page-information-characteristics__tabs"></div>
                        <div class="product-page-information-characteristics__section">
                            <h4 class="product-page-information-characteristics__title">Анализ цены</h4>
                            <p class="product-page-information-characteristics__paragraph">
                                <span class="product-page-information-characteristics__name">Оценочная стоимость</span>
                                <span class="product-page-information-characteristics__value">1 255 500 ₽</span>
                            </p>
                            <p class="product-page-information-characteristics__paragraph">
                                <span class="product-page-information-characteristics__name">Инвентаризированная стоимость</span>
                                <span class="product-page-information-characteristics__value">не указана</span>
                            </p>
                            <p class="product-page-information-characteristics__paragraph">
                                <span class="product-page-information-characteristics__name">Балансовая стоимость</span>
                                <span class="product-page-information-characteristics__value">не указана</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="product-page__base product-page-base">
                    <div class="product-page-base__info">
                        <span class="product-page-base__price"></span>
                        <span class="product-page-base__status"></span>
                        <div
                            class="product-page-base__incorporate product-page-base-incorporate"
                        >
                            <span class="product-page-base-incorporate__text">
                                В составе
                                <span class="product-page-base-incorporate__text--bold">лота №3</span>
                            </span>
                            <span class="product-page-base-incorporate__price">
                                стоимостью 36 314 305 ₽
                            </span>
                        </div>
                    </div>
                    <div class="product-page-base__buttons">
                        <UiButton
                            theme="gray"
                            class="product-page-base__favorites"
                        >
                            <svg-icon name="star-line" class="product-page-base__icon" />
                        </UiButton>
                        <UiButton class="product-page-base__buy product-page-base-button">
                            <span class="product-page-base-button__text">
                                Хочу купить
                            </span>
                        </UiButton>
                    </div>
                    <div class="product-page-base__salesman product-page-salesman">
                        <span class="product-page-salesman__title">Продавец</span>
                        <span class="product-page-salesman__name">Назаренко Юрий Павлович</span>
                        <span class="product-page-salesman__registration">На сайте с июня 2023</span>
                        <UiButton theme="gray" class="product-page-salesman__phone product-page-salesman-phone">
                            <svg-icon name="" class="product-page-salesman-phone__icon"/>
                            <span class="product-page-salesman-phone__text">+7 <span class="product-page-salesman-phone__text">показать телефон</span></span>
                        </UiButton>
                        <div class="product-page-salesman__contacts">
                            <div class="product-page-salesman__contact">
                                <NuxtLink class="socials__social">
                                    <svg-icon :name="`socials/`" class="product-page-salesman__icon"/>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-page__additional product-page-additional">
                <ButtonLink class="product-page-additional__history">История публикаций</ButtonLink>
                <div class="product-page-additional__wrap">
                    <span class="product-page-additional__text">Поделиться:</span>
                    <CommonSocial class="product-page-additional__socials" />
                </div>
            </div>
            <div class="product-page__aside">
                <h3 class="product-page__title">Похожие предложения</h3>
                <div class="product-page__wrap">
                    <CatalogList class="catalog-page-main__list" />
                    <div class="product-page__advertising"></div>
                </div>
            </div>
        </UiContainer>
    </div>
</template>

<script lang="ts" setup>
// import {getNamePage} from "~/composable/getNamePage";
//
// useHead({
//     title: getNamePage,
// });
//
// definePageMeta({
//     key: route => route.fullPath,
//     name: getNamePage,
// })

import ButtonLink from "~/components/Ui/ButtonLink.vue";
</script>

<style scoped lang="scss">
@import '@/pages/catalog/product/styles/product-page.scss';

</style>
