<template>
    <div v-if="product" class="product-page">
        <UiContainer class="product-page__wrapper">
            <UiBreadcrumbs :breadcrumbsList="breadcrumbs" class="product-page__breadcrumbs"/>
            <div class="product-page__block">
                <div class="product-page__head product-page-head">
                    <h1 class="product-page-head__title h4">
                        {{ product.name }}
                    </h1>
                    <div class="product-page-head__additional">
                        <span class="product-page-head__number">№ {{ product.id }}</span>
                        <span class="product-page-head__date">{{ formattedDate }}</span>
                    </div>
                </div>
                <div class="product-page__information product-page-information">
                    <picture class="product-page-information__picture">
                        <img
                            :src="activeImage"
                            :alt="product.name"
                            class="product-page-information__img"
                        >
                    </picture>
                    <Swiper
                        v-if="product.images.length > 0"
                        v-bind="sliderOption"
                        class="product-page-information__slider product-page-slider"
                    >
                        <SwiperSlide
                            v-for="(image, idImg) in product.images"
                            :key="`product-image-${idImg}`"
                            @click="handleClickSlide(image)"
                            :class="classesSlide(image)"
                            class="product-page-slider__slide"
                        >
                            <picture class="product-page-slider__picture">
                                <img
                                    :src="image"
                                    :alt="product.name"
                                    class="product-page-slider__img"
                                >
                            </picture>
                        </SwiperSlide>
                        <div class="main-page-banners__pagination"></div>
                    </Swiper>
                    <div class="product-page-information__description product-page-information-description">
                        <p class="product-page-information-description__text">
                            {{ product.description }}
                        </p>
                    </div>
                    <div class="product-page-information__location product-page-information-location">
                        <h4 class="product-page-information-location__title h4">Адрес</h4>
                        <p class="product-page-information-location__text">
                            {{ product.address }}
                        </p>
                        <client-only>
                            <YandexMap
                                :markerId="product.id"
                                :coordinates="[product.lat, product.lng]"
                                class="product-page-information-location__maps">
                                <YandexMarker
                                    :coordinates="[product.lat, product.lng]"
                                ></YandexMarker>
                            </YandexMap>
                        </client-only>
                    </div>
                    <div class="product-page-information__characteristics product-page-information-characteristics">
                        <ul v-if="tabs.length > 1" class="product-page-information-characteristics__tabs">
                            <li v-for="tab in tabs" :key="`product-tab-${tab.id}`" class="product-page-information-characteristics__item">
                                <div class="product-page-information-characteristics__tab product-page-information-characteristics-category">
                                    <UiChoices v-model:checked="activeTab" @update:checked="handleChoice" :value="tab.id" name="view" class="product-page-information-characteristics-category__choice" inputType="radio">
                                        <template #visibleElement="{isChecked}">
                                            <div
                                                :class="classesTabs(isChecked)"
                                                class="product-page-information-characteristics-category__wrap"
                                            >
                                                <span class="product-page-information-characteristics-category__text">{{tab.title}}</span>
                                            </div>
                                        </template>
                                    </UiChoices>
                                </div>
                            </li>
                        </ul>
                        <div
                            v-for="aboutSection in product.about"
                            :key="`product-information-${aboutSection.id}`"
                            class="product-page-information-characteristics__section"
                        >
                            <div :id="`product-section-${aboutSection.id}`" class="product-page-information-characteristics__head">
                                <h4 class="product-page-information-characteristics__title h4">{{ aboutSection.title }}</h4>
                                <UiButtonLink v-if="aboutSection.fullFields" class="product-page-information-more">
                                    <span class="product-page-information-more__text">
                                        Подробнее
                                    </span>
                                    <svg-icon name="arrow-right" class="product-page-information-more__icon" />
                                </UiButtonLink>
                            </div>
                            <p v-for="field in aboutSection.fields" class="product-page-information-characteristics__paragraph">
                                <span class="product-page-information-characteristics__name">
                                    <span class="product-page-information-characteristics__text">{{ field.name }}</span>
                                </span>
                                <span v-if="field.text" class="product-page-information-characteristics__value">{{ field.text }}</span>
                                <NuxtLink v-if="field.link" :to="field.link.href" class="product-page-information-characteristics__link">{{ field.link.text }}</NuxtLink>
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
                        <span class="product-page-base__price">{{ parcePrice(product?.price || '') }} ₽</span>
                        <ul class="product-page-base__statuses">
                            <li class="product-page-base__item">
                                <div class="product-page-base__status product-page-status product-page-status--green">
                                    {{ product.status }}
                                </div>
                            </li>
                        </ul>
                        <div v-if="product.is_lot" class="product-page-base__incorporate product-page-incorporate">
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
                        <UiButton
                            @click="modalOffer.open"
                            class="product-page-base__buy product-page-base-button"
                        >
                            <span class="product-page-base-button__text">
                                Хочу купить
                            </span>
                        </UiButton>
                        <UiButton
                            @click="handleFavoritesClick(product)"
                            :theme="themeFavoriteBtn(product.id)"
                            class="product-page-base__favorites"
                        >
                            <svg-icon :name="iconFavoriteBtn(product.id)" class="product-page-base__icon" />
                        </UiButton>
                    </div>
                    <div v-if="product.seller" class="product-page-base__salesman product-page-salesman">
                        <div class="product-page-salesman__person">
                            <span class="product-page-salesman__title">Продавец</span>
                            <span class="product-page-salesman__name">{{ product.seller.name }}</span>
                            <span class="product-page-salesman__registration">На сайте с {{ parcedCreateAt }}</span>
                        </div>
                        <div class="product-page-salesman__connect">
                            <UiButton theme="transparent" class="product-page-salesman__phone product-page-salesman-phone">
                                <svg-icon name="phone" class="product-page-salesman-phone__icon"/>
                                <span class="product-page-salesman-phone__text">
                                    +7
                                    <a
                                        v-if="isShowPhone"
                                        :href="`tel:${parcedPhoneHref}`"
                                        class="product-page-salesman-phone__number">
                                        {{ parcedPhone }}
                                    </a>
                                    <ButtonLink
                                        @click="toogleIsShowPhone"
                                        v-else
                                        class="product-page-salesman-phone__text--blue"
                                    >
                                        показать
                                        <span class="product-page-salesman-phone__text--desc">телефон</span>
                                    </ButtonLink>
                                </span>
                            </UiButton>
                            <div v-if="parcedSocials.length > 0" class="product-page-salesman__contacts">
                                <a
                                    v-for="social in parcedSocials"
                                    :key="`product-seller-social-${social.id}`"
                                    :href="social.href"
                                    class="product-page-salesman__contact"
                                >
                                    <svg-icon :name="`socials/${social.icon}`" class="product-page-salesman__icon"/>
                                </a>
                            </div>
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
            <div  v-if="productRelated.length > 0" class="product-page__aside">
                <h3 class="product-page__title">Похожие предложения</h3>
                <div class="product-page__wrap">
                    <CommonProductList :listProducts="productRelated"  class="catalog-page-main__list" />
                    <div class="product-page__advertising"></div>
                </div>
            </div>
        </UiContainer>
    </div>
</template>

<script lang="ts" setup>
import { YandexMap,YandexMarker } from "vue-yandex-maps";
import {parcePrice} from "~/composable/parcePrice";
import ButtonLink from "~/components/Ui/ButtonLink.vue";
import {scrollToElem} from "~/composable/useScrollTo";
import {useModalList} from "~/components/Modals/composable/useModalList";
import {useFavorites} from "~/composable/useFavorites";
import {useProduct} from "~/composable/request/useProduct";

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

const {modalOffer} = useModalList();
const {
    themeFavoriteBtn,
    iconFavoriteBtn,
    handleFavoritesClick,
} = useFavorites();
const {
    product,
    tabs,
    formattedDate,
    parcedSocials,
    parcedCreateAt,
    parcedPhone,
    parcedPhoneHref,
    breadcrumbs,
    productRelated,
    getProduct,
    getProductRelated,
} = useProduct();
await getProduct();
await getProductRelated();

useHead({
    title: unref(product)?.name || '',
});
const activeTab: Ref<number> = ref(0);
const isShowPhone = ref(false);
const activeImage = ref(unref(product).images[0]);
const handleClickSlide = (url: string) => {
    activeImage.value = url;
}
const classesSlide = (url: string) => ({
    'product-page-slider__slide--active': unref(activeImage) === url,
})
const classesTabs = (isChecked: boolean) => ({
    'product-page-information-characteristics-category__wrap--active': isChecked,
})
const handleChoice = (value: number) => {
    activeTab.value = value;
    scrollToElem(`#product-section-${value}`)
}
const toogleIsShowPhone = () => {
    isShowPhone.value = !isShowPhone.value;
}
</script>

<style scoped lang="scss">
@import '@/pages/catalog/product/styles/product-page.scss';

</style>
