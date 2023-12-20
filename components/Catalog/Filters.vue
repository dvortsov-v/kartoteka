<template>
    <form class="catalog-filters">
        <template v-if="filtersCategory.length > 0">
            <div
                v-for="filter in filtersCategory"
                class="catalog-filters__section"
            >
                <h6 class="catalog-filters__title catalog-filters-title">{{ filter.name }}</h6>
                <template v-if="filter.type === 'select'">
                    <UiMultiSelect
                        v-model="filterForm[`filters[${filter.id}]`]"
                        :options="filter.options"
                        :searchable="false"
                        placeholder="Все"
                        trackBy="id"
                        label="value"
                        class="catalog-filters__selector"
                    />
                </template>
                <template v-else-if="filter.type === 'date'">
                    <div class="catalog-filters__fields catalog-filters-fields">
                        <div class="catalog-filters-fields__field">
                            <UiDatePicker v-model="filterForm[`filters[${filter.id}]`]" class="catalog-filters-fields__input"></UiDatePicker>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div class="catalog-filters__fields catalog-filters-fields">
                        <div class="catalog-filters-fields__field">
                            <UiInput
                                v-model="filterForm[`filters[${filter.id}]`]"
                                :type="filter.type"
                                class="catalog-filters-fields__input"
                            />
                        </div>
                    </div>
                </template>
            </div>
        </template>
        <template v-else>
            <div class="catalog-filters__section">
                <h6 class="catalog-filters__title catalog-filters-title">Цена, ₽</h6>
                <div class="catalog-filters__fields catalog-filters-fields">
                    <div class="catalog-filters-fields__field">
                        <UiInput v-model="formData.price_to"  type="number" placeholder="от" class="catalog-filters-fields__input" />
                    </div>
                    <div class="catalog-filters-fields__field">
                        <UiInput v-model="formData.price_from"  type="number" placeholder="до" class="catalog-filters-fields__input" />
                    </div>
                </div>
                <ul class="catalog-filters__list catalog-filters-list">
                    <li class="catalog-filters-list__item">
                        <UiChoices
                            v-model:checked="formData.has_image"
                            class="catalog-filters-checkbox"
                        >
                            <span class="catalog-filters-checkbox__text">
                                Только с фото
                            </span>
                        </UiChoices>
                    </li>
                    <li class="catalog-filters-list__item">
                        <UiChoices
                            v-model:checked="formData.is_lot"
                            class="catalog-filters-checkbox"
                        >
                            <span class="catalog-filters-checkbox__text">
                                В составе лота
                            </span>
                            <div class="catalog-filters__hint"></div>
                        </UiChoices>
                    </li>
                </ul>
            </div>
            <div class="catalog-filters__section">
                <h6 class="catalog-filters__title catalog-filters-title">Статус объекта</h6>
                <ul class="catalog-filters__list catalog-filters-list">
                    <li
                        v-for="status in listStatus"
                        :key="`catalog-page-status-${status.id}`"
                        class="catalog-filters-list__item"
                    >
                        <UiChoices
                            v-model:checked="formData.status"
                            name="status"
                            :value="status.value"
                            :checked="formData.status.includes(status.name)"
                            class="catalog-filters__checkbox catalog-filters-checkbox"
                        >
                            <span class="catalog-filters-checkbox__text">
                                {{ status.name }}
                            </span>
                        </UiChoices>
                    </li>
                </ul>
                <UiButtonLink
                    v-if="false"
                    class="catalog-filters__more catalog-filters-more"
                >
                    <svg-icon name="adding" class="catalog-filters-more__icon" />
                    <span class="catalog-filters-more__text">
                        Показать еще
                    </span>
                </UiButtonLink>
            </div>
            <div class="catalog-filters__section">
                <h6 class="catalog-filters__title catalog-filters-title">Период торгов</h6>
                <div class="catalog-filters__fields catalog-filters-fields">
                    <div class="catalog-filters-fields__field">
                        <UiDatePicker v-model="formData.bargaining_to" class="catalog-filters-fields__input"></UiDatePicker>
                    </div>
                    <div class="catalog-filters-fields__field">
                        <UiDatePicker v-model="formData.bargaining_from" class="catalog-filters-fields__input"></UiDatePicker>
                    </div>
                </div>
            </div>
            <div class="catalog-filters__section">
                <h6 class="catalog-filters__title catalog-filters-title">Регион имущества</h6>
                <UiMultiSelect
                    v-model="formData.region_ids"
                    :options="regions"
                    multiple placeholder="Все"
                    trackBy="id"
                    label="name"
                    class="catalog-filters__selector"
                />
            </div>
        </template>
        <div class="catalog-filters__bottom">
            <UiButton
                @click.prevent="updateDataFilter"
                type="submit"
                class="catalog-filters__more"
            >
                Показать {{ countProduct }} товаров
            </UiButton>
            <UiButtonLink
                @click.prevent="resetForm"
                type="reset"
                class="catalog-filters__more"
            >
                Сбросить
            </UiButtonLink>
        </div>
    </form>
</template>
<script setup lang="ts">
import {useRegions} from "~/composable/request/useRegions";
import {ParamsProduct} from "~/api/ProductsApi";
import {LocationQueryValue} from "vue-router";
import {PropType} from "@vue/runtime-core";
import {filtersOfCategory} from "~/definitions/interfaces/Categories";
import {useProductsCount} from "~/composable/request/useProductsCount";

const route = useRoute();
const router = useRouter();

const emit = defineEmits(['submitFilters']);
defineProps({
    filtersCategory: {
        type: Array as PropType<filtersOfCategory[]>,
        default: () => ([]),
    }
})
const {regions, getRegions} = useRegions();
await getRegions();

const listStatus = ref<{id: number, name: string, value: string}[]>([
    {
        id: 0,
        name: 'Проведена инвентаризация',
        value: 'Проведена инвентаризация',
    },
    {
        id: 1,
        name: 'Проведена оценка',
        value: 'Проведена оценка',
    },
    {
        id: 2,
        name: 'Объявлены торги',
        value: 'Объявлены торги',
    },
    {
        id: 3,
        name: 'Идут торги',
        value: 'Идут торги',
    },
    {
        id: 4,
        name: 'Торги завершены, имущество не продано',
        value: 'Торги завершены, имущество не продано',
    },
])
const countProduct = ref(0);
const formData = ref<ParamsProduct>({
    price_to: Number(route?.query?.price_to),
    price_from: Number(route?.query?.price_from),
    has_image: route.query?.has_image ? JSON.parse(String(route.query?.has_image)) : false,
    is_lot: route.query?.is_lot ? JSON.parse(String(route.query?.is_lot)) : false,
    region_ids: route?.query?.region_ids,
    bargaining_to: route?.query?.bargaining_to,
    bargaining_from: route?.query?.bargaining_from,
    status: route?.query?.status || [],
    category_ids: route.params.id,
    name: route?.query?.name ? String(route?.query?.name) : '',
});
const filterForm = ref({});
const paramsSubmit = computed(() => {
    return Object.entries(unref(formData)).reduce((acc: {[x: string] : LocationQueryValue | LocationQueryValue[]}, current: [string, (number | boolean | string[] | LocationQueryValue | LocationQueryValue[])]) => {
        if(Array.isArray(current[1]) && (current[1].length > 0) && current[0] === 'region_ids' ) {
            acc[current[0]] = current[1].map((item) => item.id).join(',');
        } else if(current[1]) {
            acc[current[0]] = current[1];
        }

        return acc;
    }, {})
})
const parsedFilterCategory = computed(() => {
   return Object.entries(filterForm.value).reduce((acc: {[x: string]: string | number}, current) => {
        if(Array.isArray(current[1]) && current[1].length > 0) {
            acc[current[0]] = current[1].map((item) => item.id).join(',');
        } else if(current[1].hasOwnProperty('id')) {
            acc[current[0]] = current[1].id;
        } else if(current[1]) {
            acc[current[0]] = current[1];
        }

        return acc;
    }, {})
})
const resetForm = () => {
    router.push({query: undefined});

    formData.value = {
        has_image: false,
        is_lot:  false,
        region_ids: [],
        bargaining_to: '',
        bargaining_from: '',
        status: [],
        category_ids: route.params.id,
        name: '',
    }

    emit('submitFilters');
}

const updateDataFilter = () => {
    router.push({
        query: {
            ...route.query,
            ...unref(parsedFilterCategory),
            has_image: unref(paramsSubmit)?.has_image,
            is_lot: unref(paramsSubmit)?.is_lot,
            region_ids: unref(paramsSubmit)?.region_ids,
            bargaining_to: unref(paramsSubmit)?.bargaining_to,
            bargaining_from: unref(paramsSubmit).bargaining_from,
            status: unref(paramsSubmit)?.status,
            price_to: unref(paramsSubmit)?.price_to,
            price_from: unref(paramsSubmit)?.price_from,
            name: unref(paramsSubmit)?.name,
        },
    });

    emit('submitFilters');
}

watch(paramsSubmit, async (params) => {
    countProduct.value = await useProductsCount(params);
},{immediate: true})

watch(parsedFilterCategory, async (filterParams) => {
    countProduct.value = await useProductsCount(filterParams);
},{immediate: true})

</script>

<style scoped lang="scss">
@import "@/components/Catalog/styles/catalog-filters.scss";
</style>
