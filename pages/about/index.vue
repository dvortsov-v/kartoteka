<template>
    <div class="about-page">
        <UiContainer class="about-page__wrapper">
            <UiBreadcrumbs class="about-page__breadcrumbs"/>
            <h1 class="about-page__title h1">О проекте</h1>
            <main class="about-page__main">
                <section class="about-page__section about-page-description">
                    <div class="about-page-description__head">
                        <h4 class="about-page-description__title about-page-section-title">
                            В чем уникальность нашего продукта
                        </h4>
                        <div class="about-page-description__description">
                            <ul class="about-page-description__list">
                                <li class="about-page-description__item">
                                    <p class="about-page-description__text">
                                        - Логичное совмещение торгов с проверкой контрагентов
                                    </p>
                                </li>
                                <li class="about-page-description__item">
                                    <p class="about-page-description__text">
                                        - Импорт данных о торгах из множества уникальных источников (как собственных, так и внешних)
                                    </p>
                                </li>
                                <li class="about-page-description__item">
                                    <p class="about-page-description__text">
                                        - Наличие мощных баз данных о контрагентах и их регулярное пополнение из открытых источников и собственных обновлений
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="about-page-description__head">
                        <h4 class="about-page-description__title about-page-section-title">
                            Достоинства
                        </h4>
                        <div class="about-page-description__description">
                            <ul class="about-page-description__list">
                                <li class="about-page-description__item">
                                    <p class="about-page-description__text">
                                        - Продуманный и мощный интерфейс, адаптированный для разных категорий пользователей
                                    </p>
                                </li>
                                <li class="about-page-description__item">
                                    <p class="about-page-description__text">
                                        - Развитая система фильтров и словарей, позволяющая осуществлять многокритериальные эффективные поиски и выборки
                                    </p>
                                </li>
                                <li class="about-page-description__item">
                                    <p class="about-page-description__text">
                                        - Широкая аудитория, пополняющаяся из разных каналов
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="about-page-description__head">
                        <h4 class="about-page-description__title about-page-section-title">
                            Что это дает
                        </h4>
                        <div class="about-page-description__description">
                            <ul class="about-page-description__list">
                                <li class="about-page-description__item">
                                    <p class="about-page-description__text">
                                        - Упрощение доступа к товарам и услугам российских партнеров
                                    </p>
                                </li>
                                <li class="about-page-description__item">
                                    <p class="about-page-description__text">
                                        - Поиск как по всей стране, так и по заданным регионам
                                    </p>
                                </li>
                                <li class="about-page-description__item">
                                    <p class="about-page-description__text">
                                        - Исключение из сделок лишних посредников
                                    </p>
                                </li>
                                <li class="about-page-description__item">
                                    <p class="about-page-description__text">
                                        - Востребованность в условиях проведения политики импортозамещения
                                    </p>
                                </li>
                                <li class="about-page-description__item">
                                    <p class="about-page-description__text">
                                        - Возможность размещения информации о товарах и услугах за пару минут и не выходя из дома
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="about-page-description__head">
                        <h4 class="about-page-description__title about-page-section-title">
                            Перспективы проекта
                        </h4>
                        <div class="about-page-description__description">
                            <ul class="about-page-description__list">
                                <li class="about-page-description__item">
                                    <p class="about-page-description__text">
                                        - Наращивание аудитории
                                    </p>
                                </li>
                                <li class="about-page-description__item">
                                    <p class="about-page-description__text">
                                        - Наращивание мощности и источников поступления информации о товарах(услугах)
                                    </p>
                                </li>
                                <li class="about-page-description__item">
                                    <p class="about-page-description__text">
                                        - Увеличение числа аналитических, коммуникационных и поисковых сервисов
                                    </p>
                                </li>
                                <li class="about-page-description__item">
                                    <p class="about-page-description__text">
                                        - Подключение новых информационных каналов (новости, оценки, рыночные и финансовые прогнозы, рейтинги и т.д.)
                                    </p>
                                </li>
                                <li class="about-page-description__item">
                                    <p class="about-page-description__text">
                                        - Переход в стадию универсального «портала» или «экосистемы» для бизнеса
                                    </p>
                                </li>
                            </ul>
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
                                    <UiButton  @click="navigateTo(`/documents/${itemCase.url}`, {open: {target: '_blank'}})" type="button" theme="gray" class="about-page-information-case__download about-page-information-download">
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
    nameRoute: 'О проекте',
})

const getTextBtn = (isExtension: boolean) => isExtension ? 'Открыть' : 'Смотреть';
</script>

<style scoped lang="scss">
@import "@/pages/about/styles/about-page.scss";
</style>
