<template>
    <div class="advertisement-page">
        <UiContainer class="advertisement-page__wrapper">
            <UiBreadcrumbs class="advertisement-page__breadcrumbs"/>
            <h1 class="advertisement-page__title h1">Реклама</h1>
            <main class="advertisement-page__main">
                <section v-for="section in sectionAdvertising" class="advertisement-page__section advertisement-page-description">
                    <div class="advertisement-page-description__head">
                        <h4 class="advertisement-page-description__title advertisement-page-section-title">
                            {{ section.title }}
                        </h4>
                        <p
                            v-if="section.description"
                           class="advertisement-page-description__description"
                        >
                            {{ section.description }}
                        </p>
                        <template v-for="point in section.points">
                            <div class="advertisement-page-description__description">
                                <p class="advertisement-page-description__name">
                                    {{ point.name }}
                                </p>
                                <p
                                    v-if="point.value"
                                   class="advertisement-page-description__value"
                                >
                                    {{ point.value }}
                                </p>
                            </div>
                            <picture v-if="point.img" class="advertisement-page-description__picture">
                                <source
                                    :srcset="`/images/${point.img}.webp`"
                                    type="image/webp"
                                >
                                <img
                                    :src="`/images/${point.img}.jpg`"
                                    :alt="point.name"
                                    class="advertisement-page-description__img"
                                >
                            </picture>
                        </template>
                    </div>
                </section>
                <section class="advertisement-page__section advertisement-page-statistic">
                    <h4 class="advertisement-page-statistic__title advertisement-page-section-title">
                        Статистика
                    </h4>
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
                <section v-if="false" class="advertisement-page__section advertisement-page-information">
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
import {statisticAdvertising, sectionAdvertising} from "~/constants/statisticPage";

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
