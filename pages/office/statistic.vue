<template>
    <OfficeLayout title="Статистика" class="statistic-page">
        <main class="statistic-page__main">
            <div class="statistic-page__filters">
                <ul class="statistic-page__tabs statistic-page-tabs">
                    <li v-for="tab in tabs" :key="`statistic-page-tabs-${tab.id}`" class="statistic-page-tabs__item">
                        <div class="statistic-page-tabs__tab statistic-tabs">
                            <UiChoices v-model:checked="activeTab" @update:checked="handleChoice" :value="tab.id" name="view" class="statistic-tabs__choice" inputType="radio">
                                <template #visibleElement="{isChecked}">
                                    <div
                                        :class="classesTabs(isChecked)"
                                        class="statistic-tabs__wrap"
                                    >
                                        <span class="statistic-tabs__text">{{tab.name}}</span>
                                    </div>
                                </template>
                            </UiChoices>
                        </div>
                    </li>
                </ul>
                <span class="statistic-page__date">
                    12.07.2024 — 19.07.2024
                </span>
            </div>
            <ul class="statistic-page__list">
                <li v-for="itemCase in statisticCaseOffice" :key="`office-statistic-page-${itemCase.id}`" class="statistic-page__item">
                    <div class="statistic-page__case statistic-page-case">
                        <div class="statistic-page-case__icon">
                            <svg-icon :name="itemCase.icon" class="statistic-page-case__svg" />
                        </div>
                        <div class="statistic-page-case__info">
                            <span class="statistic-page-case__number h3">{{ itemCase.number }}</span>
                            <span class="statistic-page-case__name">{{ itemCase.name }}</span>
                        </div>
                    </div>
                </li>
            </ul>
            <table class="statistic-page__table statistic-page-table">
                <thead class="statistic-page-table__header">
                    <tr class="statistic-page-table__row">
                        <th class="statistic-page-table__ceil statistic-page-table__ceil--date">
                            <span class="statistic-page-table__name">Дата</span>
                            <svg-icon name="sort-item" class="statistic-page-table__sort" />
                        </th>
                        <th class="statistic-page-table__ceil statistic-page-table__ceil--price">
                            <span class="statistic-page-table__name">Название</span>
                        </th>
                        <th class="statistic-page-table__ceil statistic-page-table__ceil--name">
                            <span class="statistic-page-table__name">Стоимость</span>
                        </th>
                        <th class="statistic-page-table__ceil statistic-page-table__ceil--orders">
                            <span class="statistic-page-table__name">Заявки</span>
                            <svg-icon name="sort-item" class="statistic-page-table__sort" />
                        </th>
                        <th class="statistic-page-table__ceil statistic-page-table__ceil--favorites">
                            <span class="statistic-page-table__name">В избранном</span>
                            <svg-icon name="sort-item" class="statistic-page-table__sort" />
                        </th>
                        <th class="statistic-page-table__ceil statistic-page-table__ceil--views">
                            <span class="statistic-page-table__name">Просмотры</span>
                            <svg-icon name="sort-item" class="statistic-page-table__sort" />
                        </th>
                        <th class="statistic-page-table__ceil statistic-page-table__ceil--status">
                            <span class="statistic-page-table__name">Статус</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="statistic-page-table__body">
                <tr class="statistic-page-table__row">
                    <th class="statistic-page-table__ceil statistic-page-table__ceil--date">
                        <span class="statistic-page-table__name">20.04.2023</span>
                    </th>
                    <th class="statistic-page-table__ceil statistic-page-table__ceil--price">
                        <span class="statistic-page-table__name">CITROEN Berlingo, 2021</span>
                    </th>
                    <th class="statistic-page-table__ceil statistic-page-table__ceil--name">
                        <span class="statistic-page-table__name">606 000 ₽</span>
                    </th>
                    <th class="statistic-page-table__ceil statistic-page-table__ceil--orders">
                        <span class="statistic-page-table__name">165</span>
                    </th>
                    <th class="statistic-page-table__ceil statistic-page-table__ceil--favorites">
                        <span class="statistic-page-table__name">485</span>
                    </th>
                    <th class="statistic-page-table__ceil statistic-page-table__ceil--views">
                        <span class="statistic-page-table__name">5 896 489</span>
                    </th>
                    <th class="statistic-page-table__ceil statistic-page-table__ceil--status">
                        <CommonStatus theme="green" class="statistic-page-table__status">Выполнено</CommonStatus>
                        <div class="statistic-page-table__actions statistic-page-table-actions">
                            <button
                                @click="setIsShowAction"
                                type="button"
                                class="statistic-page-table-actions__show"
                            >
                                <svg-icon name="dots" class="statistic-page-table-actions__icon"/>
                            </button>
                            <div
                                v-if="isShowAction"
                                class="statistic-page-table-actions__wrap"
                            >
                                <div class="statistic-page-table-actions__list">
                                    <button
                                        type="button"
                                        class="statistic-page-table-actions__button"
                                    >
                                        Редактировать
                                    </button>
                                    <button
                                        type="button"
                                        class="statistic-page-table-actions__button"
                                    >
                                        Снять с продажи
                                    </button>

                                </div>
                                <div class="statistic-page-table-actions__bottom">
                                    <button
                                        type="button"
                                        class="statistic-page-table-actions__button"
                                    >
                                        Удалить

                                        <svg-icon name="trash" class="statistic-page-table-actions__del" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </th>
                </tr>
                </tbody>

            </table>
            <div class="statistic-page__navigation statistic-page-navigation">
                <UiPagination countPage="5" class="statistic-page-navigation__pagination" />
                <UiButton theme="transparent" class="statistic-page-navigation__more">
                    <svg-icon
                        name="adding"
                        class="statistic-page-navigation__icon"
                    />
                    <span class="statistic-page-navigation__text">
                                Показать ещё
                            </span>
                </UiButton>
                <span class="statistic-page-navigation__show statistic-page-navigation-show">
                            <span class="statistic-page-navigation-show__text">Показано:</span>
                            <span class="statistic-page-navigation-show__count">50 из 120</span>
                        </span>
            </div>
        </main>
    </OfficeLayout>
</template>

<script setup lang="ts">
import {useProductsStore} from "~/store/useProductsStore";
import {statisticCaseOffice} from "~/constants/statisticCaseOffice";
const productsStore = useProductsStore();
productsStore.getProducts();

definePageMeta({
    layout: 'office',
});

const tabs = [
    {
        id: 0,
        name: 'Неделя',
    },
    {
        id: 1,
        name: 'Месяц',
    },
    {
        id: 2,
        name: 'Год',
    },
];

const views: Ref<string> = ref('rows');
const isShowAction = ref(false);
const activeTab: Ref<number> = ref(0);

const changeViews = (value: string) => {
    views.value = value
}

const setIsShowAction = () => {
    isShowAction.value = !isShowAction.value
}
const classesTabs = (isChecked: boolean) => ({
    'statistic-tabs__wrap--active': isChecked,
})
const handleChoice = (value: number) => {
    activeTab.value = value;
}
const isCompactedView: ComputedRef<boolean> = computed(() => unref(views) === 'tiles');
</script>

<style scoped lang="scss">
@import '@/pages/office/styles/statistic-page.scss';
</style>
