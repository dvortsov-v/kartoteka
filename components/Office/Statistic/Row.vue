<template>
    <tr class="statistic-page-table-row">
        <th class="statistic-page-table-row__ceil statistic-page-table-row__ceil--date">
            <span class="statistic-page-table-row__name">{{ formattedDate }}</span>
        </th>
        <th class="statistic-page-table-row__ceil statistic-page-table-row__ceil--price">
            <span class="statistic-page-table-row__name">{{ infoStatistic.name }}</span>
        </th>
        <th class="statistic-page-table-row__ceil statistic-page-table-row__ceil--name">
            <span class="statistic-page-table-row__name">{{ parceFormatPrice }}</span>
        </th>
        <th class="statistic-page-table-row__ceil statistic-page-table-row__ceil--orders">
            <span class="statistic-page-table-row__name">{{ infoStatistic.orders_count }}</span>
        </th>
        <th class="statistic-page-table-row__ceil statistic-page-table-row__ceil--favorites">
            <span class="statistic-page-table-row__name">{{ infoStatistic.favorites_count }}</span>
        </th>
        <th class="statistic-page-table-row__ceil statistic-page-table-row__ceil--views">
            <span class="statistic-page-table-row__name">{{ infoStatistic.show_count }}</span>
        </th>
        <th class="statistic-page-table-row__ceil statistic-page-table-row__ceil--status">
            <CommonStatus theme="green" class="statistic-page-table-row__status">{{ infoStatistic.status }}</CommonStatus>
            <OfficeStatisticActions class="statistic-page-table-row__actions"/>
        </th>
    </tr>
</template>

<script setup lang="ts">
import {PropType} from "@vue/runtime-core";
import {Product} from "~/definitions/interfaces/Products";
import {ComputedRef} from "vue";
import {parcePrice} from "~/composable/parcePrice";
import {format} from "date-fns";

const props = defineProps({
    infoStatistic: Object as PropType<Product>,
})

const currentDate = new Date();
const parceFormatPrice:ComputedRef<string> = computed(() => `${parcePrice(props.infoStatistic?.price || '')} ₽`);
const formattedDate:ComputedRef<string> = computed(() => format(new Date(props.infoStatistic?.created_at || '' ), 'dd.MM.yyyy'))

</script>

<style scoped lang="scss">
@import "@/components/Office/Statistic/styles/statistic-page-table-row.scss";
</style>
