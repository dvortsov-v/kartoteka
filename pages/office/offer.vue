<template>
    <OfficeLayout title="Предложения" :countObjects="countProductOfCategory" class="offer-page">
        <main class="offer-page__main">
            <div class="offer-page__filters">
                <ul class="offer-page__tabs offer-page-tabs">
                    <li v-for="tab in tabs" :key="`offer-page-tabs-${tab.id}`" class="offer-page-tabs__item">
                        <div class="offer-page-tabs__tab offer-tabs">
                            <UiChoices v-model:checked="activeTab" @update:checked="handleChoice" :value="tab.id" name="view" class="offer-tabs__choice" inputType="radio">
                                <template #visibleElement="{isChecked}">
                                    <div
                                        :class="classesTabs(isChecked)"
                                        class="offer-tabs__wrap"
                                    >
                                        <span class="offer-tabs__text">{{tab.name}}</span>
                                        <span class="offer-tabs__count">15</span>
                                    </div>
                                </template>
                            </UiChoices>
                        </div>
                    </li>
                </ul>
                <CommonViewsSetting class="offer-page__view" @change="changeViews" />
            </div>
            <ul
                v-if="ordersList.length > 0"
                :class="classesList"
                class="offer-page__list"
            >
                <li v-for="order in ordersList" class="offer-page__item">
                    <OfficeOfferProduct
                        :product="order"
                        :isCompactedView="isCompactedView"
                        class="offer-page__product"
                    />
                </li>
            </ul>
            <UiPagination
                v-if="paginationDate"
                :paginationDate="paginationDate"
                class="offer-page__navigation"
            />
        </main>
    </OfficeLayout>
</template>

<script setup lang="ts">
import {Product} from "~/definitions/interfaces/Products";
import {Meta} from "~/definitions/interfaces/Meta";
import {getUserProductsRequest} from "~/api/UserApi";
useHead({
    title: 'Личный кабинет',
});

definePageMeta({
    nameRoute: 'Личный кабинет',
    middleware: 'auth',
});
const ordersList = ref<Product[]>([]);
const paginationDate = ref<Meta>();
const userToken = useCookie('userToken');
const userProduct = async () => {
    const res = await getUserProductsRequest(unref(userToken));
    if(res) {
        ordersList.value = res?.data;
        paginationDate.value = res?.meta;
    }
}
userProduct()

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
    'offer-tabs__wrap--active': isChecked,
})
const handleChoice = (value: number) => {
    activeTab.value = value;
}
const isCompactedView: ComputedRef<boolean> = computed(() => unref(views) === 'tiles');
const countProductOfCategory = computed(() => unref(paginationDate)?.total || 0);

const classesList = computed(() => ({
    'offer-page__list--is-compacted-view': unref(isCompactedView),
}))
</script>

<style scoped lang="scss">
@import '@/pages/office/styles/offer-page.scss';
</style>
