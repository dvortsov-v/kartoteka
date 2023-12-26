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
                    {{formatteCurrentdDate }} — 19.07.2024
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
                    <OfficeStatisticRowHeader class="statistic-page-table__row"/>
                </thead>
                <tbody class="statistic-page-table__body">
                    <OfficeStatisticRow
                        v-for="order in ordersList"
                        :key="`office-static-row-${order.id}`"
                        :infoStatistic="order"
                        class="statistic-page-table__row"/>
                </tbody>
            </table>
            <ul class="statistic-page__products statistic-page-products">
                <li class="statistic-page-products__item">
                    <OfficeStatisticProduct class="statistic-page-products__product"/>
                </li>
                <li class="statistic-page-products__item">
                    <OfficeStatisticProduct class="statistic-page-products__product"/>
                </li>
            </ul>
        </main>
    </OfficeLayout>
</template>

<script setup lang="ts">
import {statisticCaseOffice} from "~/constants/statisticCaseOffice";
import {getUserProductsRequest} from "~/api/UserApi";
import {Product} from "~/definitions/interfaces/Products";
import {Meta} from "~/definitions/interfaces/Meta";
import {ParamsProduct} from "~/api/ProductsApi";
import {ComputedRef} from "vue";
import {format} from "date-fns";
useHead({
    title: 'Личный кабинет',
});

definePageMeta({
    nameRoute: 'Личный кабинет',
    middleware: 'auth',
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

const activeTab: Ref<number> = ref(0);
const ordersList = ref<Product[]>([]);
const userToken = useCookie('userToken');
const route = useRoute();

const formatteCurrentdDate:ComputedRef<string> = computed(() => format(new Date(), 'dd.MM.yyyy'))

const userProduct = async (params?: ParamsProduct) => {
    let paramsRequest: ParamsProduct = {};

    if(route.params.id) {
        paramsRequest.category_ids = route.params.id
    }
    const query = params || route?.query

    delete query.name;

    paramsRequest = {...paramsRequest, ...query};

    const res = await getUserProductsRequest(unref(userToken), paramsRequest);

    if(!res?.data || !res?.data.length) {
        showError(createError({
            statusCode: 404,
            message: `Страницы не существует`,
            fatal: true,
        }));
    }

    if(res) {
        ordersList.value = res?.data;
    }
}

const classesTabs = (isChecked: boolean) => ({
    'statistic-tabs__wrap--active': isChecked,
})
const handleChoice = (value: number) => {
    activeTab.value = value;
}

userProduct()

onBeforeRouteUpdate((to) => {
    if(to.query.name === null || to.query.name === undefined || to.query.name === '' || !Boolean(to.query.name)) {
        userProduct(to.query);
    }
})
</script>

<style scoped lang="scss">
@import '@/pages/office/styles/statistic-page.scss';
</style>
