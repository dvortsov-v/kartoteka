<template>
    <tr class="statistic-page-table-row-header">
        <th class="statistic-page-table-row-header__ceil statistic-page-table-row-header__ceil--date">
            <span class="statistic-page-table-row-header__name">Дата</span>
            <svg-icon name="sort-item" class="statistic-page-table-row-header__sort" />
        </th>
        <th class="statistic-page-table-row-header__ceil statistic-page-table-row-header__ceil--price">
            <span class="statistic-page-table-row-header__name">Название</span>
        </th>
        <th class="statistic-page-table-row-header__ceil statistic-page-table-row-header__ceil--name">
            <span class="statistic-page-table-row-header__name">Стоимость</span>
        </th>
        <th class="statistic-page-table-row-header__ceil statistic-page-table-row-header__ceil--orders">
            <span class="statistic-page-table-row-header__name">Заявки</span>
            <svg-icon name="sort-item" class="statistic-page-table-row-header__sort" />
        </th>
        <th class="statistic-page-table-row-header__ceil statistic-page-table-row-header__ceil--favorites">
            <span class="statistic-page-table-row-header__name">В избранном</span>
            <svg-icon name="sort-item" class="statistic-page-table-row-header__sort" />
        </th>
        <th class="statistic-page-table-row-header__ceil statistic-page-table-row-header__ceil--views">
            <span class="statistic-page-table-row-header__name">Просмотры</span>
            <svg-icon name="sort-item" class="statistic-page-table-row-header__sort" />
        </th>
        <th class="statistic-page-table-row-header__ceil statistic-page-table-row-header__ceil--status">
            <span class="statistic-page-table-row-header__name">Статус</span>
        </th>
    </tr>
</template>

<script setup lang="ts">
defineProps({
    infoStatistic: Object,
})
const isShowAction = ref(false);

const setIsShowAction = () => {
    isShowAction.value = !isShowAction.value
}
</script>

<style scoped lang="scss">
@import "@/components/Office/Statistic/styles/statistic-page-table-row-header.scss";
</style>
