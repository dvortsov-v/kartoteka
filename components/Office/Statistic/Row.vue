<template>
    <tr class="statistic-page-table-row">
        <th class="statistic-page-table-row__ceil statistic-page-table-row__ceil--date">
            <span class="statistic-page-table-row__name">20.04.2023</span>
        </th>
        <th class="statistic-page-table-row__ceil statistic-page-table-row__ceil--price">
            <span class="statistic-page-table-row__name">CITROEN Berlingo, 2021</span>
        </th>
        <th class="statistic-page-table-row__ceil statistic-page-table-row__ceil--name">
            <span class="statistic-page-table-row__name">606 000 ₽</span>
        </th>
        <th class="statistic-page-table-row__ceil statistic-page-table-row__ceil--orders">
            <span class="statistic-page-table-row__name">165</span>
        </th>
        <th class="statistic-page-table-row__ceil statistic-page-table-row__ceil--favorites">
            <span class="statistic-page-table-row__name">485</span>
        </th>
        <th class="statistic-page-table-row__ceil statistic-page-table-row__ceil--views">
            <span class="statistic-page-table-row__name">5 896 489</span>
        </th>
        <th class="statistic-page-table-row__ceil statistic-page-table-row__ceil--status">
            <CommonStatus theme="green" class="statistic-page-table-row__status">Выполнено</CommonStatus>
            <OfficeStatisticActions class="statistic-page-table-row__actions"/>
        </th>
    </tr>
</template>

<script setup lang="ts">
defineProps({
    infoStatistic: Object,
})
</script>

<style scoped lang="scss">
@import "@/components/Office/Statistic/styles/statistic-page-table-row.scss";
</style>
