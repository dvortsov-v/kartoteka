<template>
    <VueFinalModal  contentClass="modal-catalog-filters">
        <div class="modal-catalog-filters__content">
            <div class="modal-catalog-filters__header">
                <span class="modal-catalog-filters__name">Фильтр</span>
                <button @click="emit('close')" class="modal-catalog-filters__close">
                    <svg-icon name="close"/>
                </button>
            </div>
            <div class="modal-catalog-filters__scrollbar">
                <CatalogCategories :categories="categoriesStore.categories" />
                <div class="modal-catalog-filters__section">
                    <h6 class="modal-catalog-filters__title modal-catalog-filters-title">Цена, ₽</h6>
                    <div class="modal-catalog-filters__fields modal-catalog-filters-fields">
                        <div class="modal-catalog-filters-fields__field">
                            <UiInput type="number" placeholder="от" class="modal-catalog-filters-fields__input" />
                        </div>
                        <div class="modal-catalog-filters-fields__field">
                            <UiInput type="number" placeholder="до" class="modal-catalog-filters-fields__input" />
                        </div>
                    </div>
                    <ul class="modal-catalog-filters__list modal-catalog-filters-list">
                        <li class="modal-catalog-filters-list__item">
                            <UiChoices
                                v-model:checked="formData.has_image"
                                class="modal-catalog-filters-checkbox"
                            >
                        <span class="modal-catalog-filters-checkbox__text">
                            Только с фото
                        </span>
                            </UiChoices>
                        </li>
                        <li class="modal-catalog-filters-list__item">
                            <UiChoices
                                v-model:checked="formData.is_lot"
                                class="modal-catalog-filters-checkbox"
                            >
                        <span class="modal-catalog-filters-checkbox__text">
                            В составе лота
                        </span>
                                <div class="modal-catalog-filters__hint"></div>
                            </UiChoices>
                        </li>
                    </ul>
                </div>
                <div class="modal-catalog-filters__section">
                    <h6 class="modal-catalog-filters__title modal-catalog-filters-title">Статус объекта</h6>
                    <ul class="modal-catalog-filters__list modal-catalog-filters-list">
                        <li
                            v-for="status in listStatus"
                            :key="`catalog-page-status-${status.id}`"
                            class="modal-catalog-filters-list__item"
                        >
                            <UiChoices
                                v-model:checked="formData.status"
                                name="status"
                                :value="status.value"
                                :checked="formData.status.includes(status.name)"
                                class="modal-catalog-filters__checkbox modal-catalog-filters-checkbox"
                            >
                        <span class="modal-catalog-filters-checkbox__text">
                            {{ status.name }}
                        </span>
                            </UiChoices>
                        </li>
                    </ul>
                    <UiButtonLink
                        v-if="false"
                        class="modal-catalog-filters__more modal-catalog-filters-more"
                    >
                        <svg-icon name="adding" class="modal-catalog-filters-more__icon" />
                        <span class="modal-catalog-filters-more__text">
                    Показать еще
                </span>
                    </UiButtonLink>
                </div>
                <div class="modal-catalog-filters__section">
                    <h6 class="modal-catalog-filters__title modal-catalog-filters-title">Период торгов</h6>
                    <div class="modal-catalog-filters__fields modal-catalog-filters-fields">
                        <div class="modal-catalog-filters-fields__field">
                            <UiDatePicker v-model="formData.bargaining_to" class="modal-catalog-filters-fields__input"></UiDatePicker>
                        </div>
                        <div class="modal-catalog-filters-fields__field">
                            <UiDatePicker v-model="formData.bargaining_from" class="modal-catalog-filters-fields__input"></UiDatePicker>
                        </div>
                    </div>
                </div>
                <div class="modal-catalog-filters__section">
                    <h6 class="modal-catalog-filters__title modal-catalog-filters-title">Регион имущества</h6>
                    <UiMultiSelect
                        v-model="formData.region_ids"
                        :options="regions"
                        multiple
                        placeholder="Все"
                        trackBy="id"
                        label="name"
                        class="modal-catalog-filters__selector"
                    />
                </div>
                <div class="modal-catalog-filters__bottom">
                    <UiButton
                        @click.prevent="updateDataFilter"
                        type="submit"
                        class="modal-catalog-filters__more"
                    >
                        Показать {{ countProduct }} товаров
                    </UiButton>
                    <UiButtonLink
                        @click.prevent="resetForm"
                        type="reset"
                        class="modal-catalog-filters__more"
                    >
                        Сбросить
                    </UiButtonLink>
                </div>
            </div>
        </div>
    </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import {useCategoriesStore} from "~/store/useCategoriesStore";
import {useRegions} from "~/composable/request/useRegions";
import {getProductsCountRequest, ParamsProduct} from "~/api/ProductsApi";
import {LocationQueryValue} from "vue-router";

const emit = defineEmits(['close', 'submitFilters']);
const route = useRoute();
const router = useRouter();
const categoriesStore = useCategoriesStore()
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
    countProduct.value = await getProductsCountRequest(params);
}, {immediate: true})

const submitFilters = (params: ParamsProduct) => {
    emit('submitFilters', {...params, page: null});
    emit('close');
}
</script>

<style scoped lang="scss">
@import '@/components/Modals/styles/modal-catalog-filters.scss';
</style>
<style>
.modal-catalog-filters {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>
