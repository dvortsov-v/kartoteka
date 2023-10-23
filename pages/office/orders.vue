<template>
    <OfficeLayout title="Заявки" countObjects="25" class="orders-page">
        <main class="orders-page__main">
            <div class="orders-page__filters">
                <ul class="orders-page__tabs orders-page-tabs">
                    <li v-for="tab in tabs" :key="`orders-page-tabs-${tab.id}`" class="orders-page-tabs__item">
                        <div class="orders-page-tabs__tab orders-tabs">
                            <UiChoices v-model:checked="activeTab" @update:checked="handleChoice" :value="tab.id" name="view" class="orders-tabs__choice" inputType="radio">
                                <template #visibleElement="{isChecked}">
                                    <div
                                        :class="classesTabs(isChecked)"
                                        class="orders-tabs__wrap"
                                    >
                                        <span class="orders-tabs__text">{{tab.name}}</span>
                                        <span class="orders-tabs__count">15</span>
                                    </div>
                                </template>
                            </UiChoices>
                        </div>
                    </li>
                </ul>
                <CommonViewsSetting class="orders-page__view" @change="changeViews" />
            </div>
            <CommonProductList
                :listProducts="products"
                :isCompactedView="isCompactedView"
                isProductInOrder
                class="orders-page__products"
            />
            <UiPagination :paginationDate="paginationDate" class="orders-page__navigation" />
        </main>
    </OfficeLayout>
</template>

<script setup lang="ts">
import {useProducts} from "~/composable/request/useProducts";
useHead({
    title: 'Личный кабинет',
});

definePageMeta({
    nameRoute: 'Личный кабинет',
});
const {
    products,
    paginationDate,
    getProducts,
} = useProducts()

getProducts()

const tabs = [
    {
        id: 0,
        name: 'Все',
    },
    {
        id: 1,
        name: 'В обработке',
    },
    {
        id: 2,
        name: 'Выполнены',
    },
];
const views: Ref<string> = ref('rows');
const activeTab: Ref<number> = ref(0);

const changeViews = (value: string) => {
    views.value = value
}
const classesTabs = (isChecked: boolean) => ({
    'orders-tabs__wrap--active': isChecked,
})
const handleChoice = (value: number) => {
    activeTab.value = value;
}
const isCompactedView: ComputedRef<boolean> = computed(() => unref(views) === 'tiles');
</script>

<style scoped lang="scss">
@import '@/pages/office/styles/orders-page.scss';
</style>
