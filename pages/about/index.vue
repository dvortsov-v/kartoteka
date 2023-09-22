<template>
    <div class="about-page">
        <UiContainer class="about-page__wrapper">
            <UiBreadcrumbs class="about-page__breadcrumbs"/>
            <h1 class="about-page__title h1">О проекте</h1>
            <main class="about-page__main">
                <section class="about-page__section about-page-description">
                    <div class="about-page-description__head">
                        <h4 class="about-page-description__title about-page-section-title">
                            Непременно змечательный и емкий заголовок о пользе проекта для пользователей и бизнеса
                        </h4>
                        <div class="about-page-description__description">
                            <p class="about-page-description__text">
                                Нашей целью является предоставление достоверных сведений об участниках российского бизнеса, а также создание удобных информационных ресурсов и инструментов для размещения заинтересованными лицами данных, подлежащих публичному раскрытию в соответствии с законодательством Российской Федерации.
                            </p>
                            <p class="about-page-description__text">
                                Компания kartoteka.ru представляет собой молодой и сплоченный коллектив профессионалов, постоянно совершенствующих свой уровень и практикующих индивидуальный подход к каждому клиенту.
                            </p>
                        </div>
                    </div>
                </section>
                <section class="about-page__section about-page-statistic">
                    <h4 class="about-page-statistic__title about-page-section-title">
                        Статистика
                    </h4>
                    <ul class="about-page-statistic__list">
                        <li v-for="itemCase in statisticCase" :key="`about-page-statistic-${itemCase.id}`" class="about-page-statistic__item">
                            <div class="about-page-statistic__case about-page-statistic-case">
                                <div class="about-page-statistic-case__icon">
                                    <svg-icon :name="`statistic/${itemCase.icon}`" class="about-page-statistic-case__svg" />
                                </div>
                                <div class="about-page-statistic-case__info">
                                    <span class="about-page-statistic-case__number h3">{{ itemCase.number }}</span>
                                    <span class="about-page-statistic-case__name">{{ itemCase.name }}</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
                <section class="about-page__section about-page-information">
                    <h4 class="about-page-information__title about-page-section-title">
                        Информация
                    </h4>
                    <ul class="about-page-information__list">
                        <li v-for="itemCase in informationCase" :key="`about-page-information-${itemCase.id}`" class="about-page-information__item">
                            <div class="about-page-information__case about-page-information-case">
                                <div class="about-page-information-case__info">
                                    <span class="about-page-information-case__name">{{ itemCase.name }}</span>
                                    <span v-if="itemCase.extension" class="about-page-information-case__extension">{{ itemCase.extension }}</span>
                                </div>
                                <div class="about-page-information-case__footer">
                                    <div class="about-page-information-case__icon">
                                        <svg-icon :name="`information/${itemCase.icon}`" class="about-page-information-case__svg" />
                                    </div>
                                    <UiButton type="button" theme="gray" class="about-page-information-case__download about-page-information-download">
                                        <div class="about-page-information-download__wrap">
                                            <span class="about-page-information-download__text">{{ getTextBtn(Boolean(itemCase.extension)) }}</span>
                                            <svg-icon name="arrow-right" class="about-page-information-download__svg" />
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
import {statisticCase} from "~/constants/statisticCase";
import {informationCase} from "~/constants/informationCase";

useHead({
    title: 'О проекте',
});
definePageMeta({
    name: 'О проекте',
})

const getTextBtn = (isExtension: boolean) => isExtension ? 'Открыть' : 'Смотреть';
</script>

<style scoped lang="scss">
@import "@/pages/about/styles/about-page.scss";
</style>
