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
                            srcset="/images/car-main.webp"
                            type="image/webp"
                        >
                        <img
                            src="/images/car-main.jpg"
                            alt="Mercedes-Benz GLC Coupé"
                            class="product-page-information__img"
                        >
                    </picture>
                    <Swiper
                        v-if="carImage.length > 0"
                        v-bind="sliderOption"
                        :modules="sliderModules"
                        class="product-page-information__slider product-page-slider"
                    >
                        <SwiperSlide
                            v-for="image in carImage"
                            :key="`product-image-${image.id}`"
                            class="product-page-slider__slide"
                        >
                            <picture class="product-page-slider__picture">
                                <source
                                    :srcset="`/assets/images/${image.img}.webp`"
                                    type="image/webp"
                                >
                                <img
                                    :src="`/assets/images/${image.img}.jpg`"
                                    :alt="image.img"
                                    class="product-page-slider__img"
                                >
                            </picture>
                        </SwiperSlide>
                        <div class="main-page-banners__pagination"></div>
                    </Swiper>
                    <div class="product-page-information__description product-page-information-description">
                        <p class="product-page-information-description__text">
                            Солидный, мощный, ультрасовременный и невероятно грациозный – Mercedes-Benz GLC Coupe – такую машину хочется купить здесь и сейчас. Цена значения имеет, но далеко не первичное.
                        </p>
                        <p class="product-page-information-description__text">
                            Автомобиль стоит того: новый Мерседес-Бенц ГЛЦ Купе (С253) помимо совершенной эстетики собрал в себе характеристики маневренного городского авто, динамичного спортивного купе и практичного внедорожника.
                        </p>
                        <p class="product-page-information-description__text">
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
                        <ul class="product-page-information-characteristics__tabs">
                            <li v-for="tab in productCharacteristic" :key="`product-tab-${tab.id}`" class="product-page-information-characteristics__item">
                                <div class="product-page-information-characteristics__tab product-page-information-characteristics-category">
                                    <UiChoices v-model:checked="activeTab" @update:checked="handleChoice" :value="tab.id" name="view" class="product-page-information-characteristics-category__choice" inputType="radio">
                                        <template #visibleElement="{isChecked}">
                                            <div
                                                :class="classesTabs(isChecked)"
                                                class="product-page-information-characteristics-category__wrap"
                                            >
                                                <span class="product-page-information-characteristics-category__text">{{tab.name}}</span>
                                            </div>
                                        </template>
                                    </UiChoices>
                                </div>
                            </li>
                        </ul>
                        <div class="product-page-information-characteristics__section">
                            <div class="product-page-information-characteristics__head">
                                <h4 class="product-page-information-characteristics__title">Анализ цены</h4>
                                <UiButtonLink class="product-page-information-more">
                                    <span class="product-page-information-more__text">
                                        Подробнее
                                    </span>
                                    <svg-icon name="arrow-right" class="product-page-information-more__icon" />
                                </UiButtonLink>
                            </div>
                            <p class="product-page-information-characteristics__paragraph">
                                <span class="product-page-information-characteristics__name">
                                    <span class="product-page-information-characteristics__text">Оценочная стоимость</span>
                                </span>
                                <span class="product-page-information-characteristics__value">1 255 500 ₽</span>
                            </p>
                            <p class="product-page-information-characteristics__paragraph">
                                <span class="product-page-information-characteristics__name">
                                    <span class="product-page-information-characteristics__text">Инвентаризированная стоимость</span>
                                </span>
                                <span class="product-page-information-characteristics__value">не указана</span>
                            </p>
                            <p class="product-page-information-characteristics__paragraph">
                                <span class="product-page-information-characteristics__name">
                                    <span class="product-page-information-characteristics__text">Балансовая стоимость</span>
                                </span>
                                <span class="product-page-information-characteristics__value">не указана</span>
                            </p>
                        </div>
                    </div>
                    <div class="product-page-information__warning product-page-information-warning">
                        <svg-icon name="alert" class="product-page-information-warning__icon"/>
                        <span class="product-page-information-warning__text">Цены носят справочный характер и не является публичной офертой</span>
                    </div>
                </div>
                <div class="product-page__base product-page-base">
                    <div class="product-page-base__info">
                        <span class="product-page-base__price">20 000 156 ₽</span>
                        <ul class="product-page-base__statuses">
                            <li class="product-page-base__item">
                                <div class="product-page-base__status product-page-status product-page-status--orange">
                                    Стоимость ниже оценочной на 20%
                                </div>
                            </li>
                            <li class="product-page-base__item">
                                <div class="product-page-base__status product-page-status product-page-status--green">
                                    Идут торги
                                </div>
                            </li>
                        </ul>
                        <div class="product-page-base__incorporate product-page-incorporate">
                            <span class="product-page-incorporate__text">
                                В составе
                                <span class="product-page-incorporate__text--bold">лота №3</span>
                            </span>
                            <span class="product-page-incorporate__price">
                                стоимостью 36 314 305 ₽
                            </span>
                        </div>
                    </div>
                    <div class="product-page-base__buttons">
                        <UiButton class="product-page-base__buy product-page-base-button">
                            <span class="product-page-base-button__text">
                                Хочу купить
                            </span>
                        </UiButton>
                        <UiButton
                            theme="gray"
                            class="product-page-base__favorites"
                        >
                            <svg-icon name="star-line" class="product-page-base__icon" />
                        </UiButton>
                    </div>
                    <div class="product-page-base__salesman product-page-salesman">
                        <span class="product-page-salesman__title">Продавец</span>
                        <span class="product-page-salesman__name">Назаренко Юрий Павлович</span>
                        <span class="product-page-salesman__registration">На сайте с июня 2023</span>
                        <UiButton theme="transparent" class="product-page-salesman__phone product-page-salesman-phone">
                            <svg-icon name="phone" class="product-page-salesman-phone__icon"/>
                            <span class="product-page-salesman-phone__text">+7 <span class="product-page-salesman-phone__text--blue">показать телефон</span></span>
                        </UiButton>
                        <div class="product-page-salesman__contacts">
                            <NuxtLink class="product-page-salesman__contact">
                                <svg-icon :name="`socials/tg`" class="product-page-salesman__icon"/>
                            </NuxtLink>
                            <NuxtLink class="product-page-salesman__contact">
                                <svg-icon :name="`socials/whatsapp`" class="product-page-salesman__icon"/>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="product-page__additional product-page-additional">
                <UiButtonLink class="product-page-additional__history">История публикаций</UiButtonLink>
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
import {carImage} from "~/constants/carImage";
import {productCharacteristic} from "~/constants/productCharacteristic";
const sliderOption = {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    slidesPerView: 9,
    observer: true,
    observeParents: true,
    spaceBetween: 8,
}
const sliderModules = [];


const activeTab: Ref<number> = ref(1);

const classesTabs = (isChecked: boolean) => ({
    'product-page-information-characteristics-category__wrap--active': isChecked,
})
const handleChoice = (value: number) => {
    activeTab.value = value;
}

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


</script>

<style scoped lang="scss">
@import '@/pages/catalog/product/styles/product-page.scss';

</style>
