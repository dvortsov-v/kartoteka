<template>
    <div class="advertisement-page">
        <UiContainer class="advertisement-page__wrapper">
            <UiBreadcrumbs class="advertisement-page__breadcrumbs"/>
            <h1 class="advertisement-page__title h1">Реклама</h1>
            <main class="advertisement-page__main">
                <section class="advertisement-page__section advertisement-page-description">
                    <div class="advertisement-page-description__head">
                        <h4 class="advertisement-page-description__title advertisement-page-section-title">
                            Непременно змечательный и емкий заголовок о пользе проекта для пользователей и бизнеса
                        </h4>
                        <div class="advertisement-page-description__description">
                            <p class="advertisement-page-description__text">
                                Нашей целью является предоставление достоверных сведений об участниках российского бизнеса, а также создание удобных информационных ресурсов и инструментов для размещения заинтересованными лицами данных, подлежащих публичному раскрытию в соответствии с законодательством Российской Федерации.
                            </p>
                            <p class="advertisement-page-description__text">
                                Компания kartoteka.ru представляет собой молодой и сплоченный коллектив профессионалов, постоянно совершенствующих свой уровень и практикующих индивидуальный подход к каждому клиенту.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="advertisement-page__section advertisement-page-diagrams">
                    <div class="advertisement-page-diagrams__head">
                        <h5 class="advertisement-page-diagrams__title h5">
                            Статистика
                        </h5>
                        <ul class="advertisement-page-diagrams__list">
                            <li v-for="diagram in sectionAdvertising" class="advertisement-page-diagrams__item">
                                <p class="advertisement-page-diagrams__name">{{ diagram.title }}</p>
                                <picture v-if="diagram.img" class="advertisement-page-diagrams__picture">
                                    <source
                                        :srcset="`/picture/${diagram.img}1.webp`"
                                        type="image/webp"
                                    >
                                    <img
                                        :src="`/picture/${diagram.img}1.jpg`"
                                        :alt="diagram.title"
                                        class="advertisement-page-diagrams__img"
                                    >
                                </picture>
                                <p v-for="point in diagram.points" class="advertisement-page-diagrams__point advertisement-page-point">
                                    <span class="advertisement-page-point__val">{{point.value}}</span>
                                    <span class="advertisement-page-point__name">{{point.name}}</span>
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
                <section class="advertisement-page__section advertisement-page-statistic">
                    <ul class="advertisement-page-statistic__list">
                        <li v-for="itemCase in statisticAdvertising" :key="`advertisement-page-statistic-${itemCase.id}`" class="advertisement-page-statistic__item">
                            <div class="advertisement-page-statistic__case advertisement-page-statistic-case">
                                <div class="advertisement-page-statistic-case__icon">
                                    <svg-icon :name="`statistic/${itemCase.icon}`" class="advertisement-page-statistic-case__svg" />
                                </div>
                                <div class="advertisement-page-statistic-case__info">
                                    <span class="advertisement-page-statistic-case__number h3">{{ itemCase.number }}</span>
                                    <span class="advertisement-page-statistic-case__name">{{ itemCase.name }}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section class="advertisement-page__section advertisement-page-accommodation">
                    <h5 class="advertisement-page-accommodation__title h5">
                        Стоимость размещения
                    </h5>
                    <p class="advertisement-page-accommodation__description">
                        Главная страница
                    </p>
                    <div class="advertisement-page-accommodation__content">
                        <picture class="advertisement-page-accommodation__picture">
                            <source
                                :srcset="`/picture/accommodation-advertisement.webp`"
                                type="image/webp"
                            >
                            <img
                                :src="`/picture/accommodation-advertisement.jpg`"
                                alt="Главная страница"
                                class="advertisement-page-accommodations__img"
                            >
                        </picture>
                        <div class="advertisement-page-accommodation__places">
                            <p
                                v-for="placeAccommodation in placeAccommodations"
                                class="advertisement-page-accommodation__place"
                            >
                                <span class="advertisement-page-accommodation__name">{{placeAccommodation.name}}</span>
                                <span class="advertisement-page-accommodation__val">{{placeAccommodation.value}}</span>
                            </p>
                        </div>
                    </div>
                </section>
                <section class="advertisement-page__section advertisement-page-information">
                    <h4 class="advertisement-page-information__title advertisement-page-section-title">
                        Информация
                    </h4>
                    <ul class="advertisement-page-information__list">
                        <li v-for="itemCase in informationCase" :key="`advertisement-page-information-${itemCase.id}`" class="advertisement-page-information__item">
                            <div class="advertisement-page-information__case advertisement-page-information-case">
                                <div class="advertisement-page-information-case__info">
                                    <span class="advertisement-page-information-case__name">{{ itemCase.name }}</span>
                                    <span v-if="itemCase.extension" class="advertisement-page-information-case__extension">{{ itemCase.extension }}</span>
                                </div>
                                <div class="advertisement-page-information-case__footer">
                                    <div class="advertisement-page-information-case__icon">
                                        <svg-icon :name="`information/${itemCase.icon}`" class="advertisement-page-information-case__svg" />
                                    </div>
                                    <UiButton @click="navigateTo(`/documents/${itemCase.url}`, {open: {target: '_blank'}})" type="button" theme="gray" class="advertisement-page-information-case__download advertisement-page-information-download">
                                        <div class="advertisement-page-information-download__wrap">
                                            <span class="advertisement-page-information-download__text">{{ getTextBtn(Boolean(itemCase.extension)) }}</span>
                                            <svg-icon name="arrow-right" class="advertisement-page-information-download__svg" />
                                        </div>
                                    </UiButton>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
            </main>
        </UiContainer>
    </div>
</template>

<script setup lang="ts">
import {informationCase} from "~/constants/informationCase";
import {statisticAdvertising, sectionAdvertising, placeAccommodations} from "~/constants/statisticPage";

useHead({
    title: 'Реклама',
});
definePageMeta({
    nameRoute: 'Реклама',
})

const getTextBtn = (isExtension: boolean) => isExtension ? 'Открыть' : 'Смотреть';
</script>

<style scoped lang="scss">
@import "@/pages/advertisement/styles/advertisement-page.scss";
</style>
