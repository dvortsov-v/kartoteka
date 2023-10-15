<template>
    <div v-if="product" class="product-page">
        <UiContainer class="product-page__wrapper">
            <UiBreadcrumbs class="product-page__breadcrumbs"/>
            <div class="product-page__block">
                <div class="product-page__head product-page-head">
                    <h1 class="product-page-head__title h4">
                        {{ product.name }}
                    </h1>
                    <div class="product-page-head__additional">
                        <span class="product-page-head__number">№ 124115</span>
                        <span class="product-page-head__date">20.03.2022, 12:32</span>
                    </div>
                </div>
                <div class="product-page__information product-page-information">
                    <picture class="product-page-information__picture">
                        <img
                            :src="product.image"
                            :alt="product.name"
                            class="product-page-information__img"
                        >
                    </picture>
                    <Swiper
                        v-if="carImage.length > 0"
                        v-bind="sliderOption"
                        class="product-page-information__slider product-page-slider"
                    >
                        <SwiperSlide
                            v-for="image in carImage"
                            :key="`product-image-${image.id}`"
                            class="product-page-slider__slide"
                        >
                            <picture class="product-page-slider__picture">
                                <img
                                    :src="product.image"
                                    :alt="product.name"
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
                        <h4 class="product-page-information-location__title h4">Адрес</h4>
                        <p class="product-page-information-location__text">
                            423819, республика Татарстан, Набережные Челны, проспект Московский, зд 109а, помещение 1006
                        </p>
                        <div class="product-page-information-location__maps">
                            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac48980baba79783d543298607a4295cf9a39fdce85ab80f82f513a53d1209b82&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
                        </div>
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
                            v-for="activeSection in sectionInformation"
                            :key="`product-information-${activeSection.id}`"
                            class="product-page-information-characteristics__section"
                        >
                            <div :id="`product-section-${activeSection.id}`" class="product-page-information-characteristics__head">
                                <h4 class="product-page-information-characteristics__title h4">{{ activeSection.title }}</h4>
                                <UiButtonLink v-if="activeSection.fullFields" class="product-page-information-more">
                                    <span class="product-page-information-more__text">
                                        Подробнее
                                    </span>
                                    <svg-icon name="arrow-right" class="product-page-information-more__icon" />
                                </UiButtonLink>
                            </div>
                            <p v-for="field in activeSection.fields" class="product-page-information-characteristics__paragraph">
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
                        <UiButton
                            @click="modalOffer.open"
                            class="product-page-base__buy product-page-base-button"
                        >
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
                        <div class="product-page-salesman__person">
                            <span class="product-page-salesman__title">Продавец</span>
                            <span class="product-page-salesman__name">Назаренко Юрий Павлович</span>
                            <span class="product-page-salesman__registration">На сайте с июня 2023</span>
                        </div>
                        <div class="product-page-salesman__connect">
                            <UiButton theme="transparent" class="product-page-salesman__phone product-page-salesman-phone">
                                <svg-icon name="phone" class="product-page-salesman-phone__icon"/>
                                <span class="product-page-salesman-phone__text">
                                    +7
                                    <span v-if="isShowPhone" class="product-page-salesman-phone__number">900-000-00-00</span>
                                    <ButtonLink v-else @click="toogleIsShowPhone" class="product-page-salesman-phone__text--blue">показать <span class="product-page-salesman-phone__text--desc">телефон</span></ButtonLink></span>
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
                    <CommonCardProduct :listProducts="products"  class="catalog-page-main__list" />
                    <div class="product-page__advertising"></div>
                </div>
            </div>
        </UiContainer>
    </div>
</template>

<script lang="ts" setup>
import {carImage} from "~/constants/carImage";
import {getProductRequest} from "~/api/ProductsApi";
import {parcePrice} from "~/composable/parcePrice";
import {Product} from "~/definitions/interfaces/Products";
import ButtonLink from "~/components/Ui/ButtonLink.vue";
import {scrollToElem} from "~/composable/useScrollTo";
import {useProducts} from "~/composable/request/useProducts";
import {useModalList} from "~/components/Modals/composable/useModalList";

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


const {
    products,
    getProducts,
} = useProducts()

getProducts();

const sectionInformation = [
    {
        id: 0,
        title: 'Информация о торгах',
        fields: [
            {
                name: 'Вид торгов',
                text: 'Публичное предложение/Открытая форма предложения о цене',
            },
            {
                name: 'Место проведения',
                link: {
                    text:'ТП «Фабрикант»',
                    href: '',
                },
            },
            {
                name: 'Период торгов',
                text: '25.10.2022 12:00 — 28.10.2023 12:00',
            },
            {
                name: 'Приём заявок',
                text: '25.10.2022 12:00 — 28.10.2023 12:00',
            },
        ]
    },
    {
        id: 1,
        title: 'Анализ цены',
        fields: [
            {
                name: 'Оценочная стоимость',
                text: '6 314 304 ₽ ',
            },
            {
                name: 'Инвентаризированная стоимость',
                text: 'не указана',
            },
            {
                name: 'Балансовая стоимость',
                text: 'не указана',
            },
            {
                name: 'Стоимость на 3 торгах',
                text: '6 314 304 ₽ ',
            },
            {
                name: 'Стоимость на 2 торгах',
                text: '6 314 304 ₽ ',
            },
            {
                name: 'Стоимость на 1 торгах',
                text: '6 314 304 ₽ ',
            },
        ]
    },
    {
        id: 2,
        title: 'Характеристики',
        fields: [
            {
                name: 'Сумма деб. задолженности (₽)',
                text: '6 314 304,83',
            },
            {
                name: 'ИНН дебитора',
                text: '1650319389',
            },
            {
                name: 'ОГРН дебитора',
                text: '1151650019289',
            },
            {
                name: 'КПП дебитора',
                text: '165001001',
            },
        ]
    },
    {
        id: 3,
        title: 'Информация о должнике',
        fullFields: [
            {
                name: '№ дела',
                text: 'А65-4196/2021',
            },
            {
                name: 'ИНН',
                text: '1650319389',
            },
            {
                name: 'Должник',
                text: 'ООО НПЦ «Нефтехимэнергоснаб»',
            },
            {
                name: 'Адрес',
                text: '423819, республика Татарстан, Набережные Челны, проспект Московский, зд 109а, помещение 1006',
            },
            {
                name: 'Дата регистрации',
                text: '17.12.1999',
            },
            {
                name: '№ дела',
                text: 'А65-4196/2021',
            },
            {
                name: 'ИНН',
                text: '1650319389',
            },
            {
                name: 'Должник',
                text: 'ООО НПЦ «Нефтехимэнергоснаб»',
            },
            {
                name: 'Адрес',
                text: '423819, республика Татарстан, Набережные Челны, проспект Московский, зд 109а, помещение 1006',
            },
            {
                name: 'Дата регистрации',
                text: '17.12.1999',
            },
        ],
        fields: [
            {
                name: '№ дела',
                text: 'А65-4196/2021',
            },
            {
                name: 'ИНН',
                text: '1650319389',
            },
            {
                name: 'Должник',
                text: 'ООО НПЦ «Нефтехимэнергоснаб»',
            },
            {
                name: 'Адрес',
                text: '423819, республика Татарстан, Набережные Челны, проспект Московский, зд 109а, помещение 1006',
            },
            {
                name: 'Дата регистрации',
                text: '17.12.1999',
            },
        ]
    },
];
const tabs = sectionInformation.map(section => {
    const {id, title} = section;

    return {id, title}
})
const activeTab: Ref<number> = ref(0);
const isShowPhone = ref(false);
const classesTabs = (isChecked: boolean) => ({
    'product-page-information-characteristics-category__wrap--active': isChecked,
})
const handleChoice = (value: number) => {
    activeTab.value = value;
    scrollToElem(`#product-section-${value}`)
}
const toogleIsShowPhone = () => {
    isShowPhone.value= !isShowPhone.value;
}
const route = useRoute();

const product: Product | object =  await getProductRequest(route.params.id);
const {modalOffer} = useModalList()
</script>

<style scoped lang="scss">
@import '@/pages/catalog/product/styles/product-page.scss';

</style>
