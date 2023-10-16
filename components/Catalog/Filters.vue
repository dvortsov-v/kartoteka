<template>
    <form class="catalog-filters" @change="console.log(123)">
        <div class="catalog-filters__section">
            <h6 class="catalog-filters__title catalog-filters-title">Цена, ₽</h6>
            <div class="catalog-filters__fields catalog-filters-fields">
                <div class="catalog-filters-fields__field">
                    <UiInput type="number" placeholder="от" class="catalog-filters-fields__input" />
                </div>
                <div class="catalog-filters-fields__field">
                    <UiInput type="number" placeholder="до" class="catalog-filters-fields__input" />
                </div>
            </div>
            <ul class="catalog-filters__list catalog-filters-list">
                <li class="catalog-filters-list__item">
                    <UiChoices
                        v-model="formData.has_image"
                        class="catalog-filters-checkbox"
                    >
                        <span class="catalog-filters-checkbox__text">
                            Только с фото
                        </span>
                    </UiChoices>
                </li>
                <li class="catalog-filters-list__item">
                    <UiChoices
                        v-model="formData.is_lot"
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
                        :isChecked="formData.status.includes(status.value)"
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
                v-model="formData.regins_ids"
                :options="regions"
                multiple placeholder="Все"
                track-by="id"
                label="name"
                class="catalog-filters__selector"
            />
        </div>
        <div class="catalog-filters__bottom">
            <UiButton type="submit" class="catalog-filters__more">Показать 1 453 товаров</UiButton>
            <UiButtonLink type="reset" class="catalog-filters__more">Сбросить</UiButtonLink>
        </div>
    </form>
</template>
<script setup lang="ts">
import {useRegions} from "~/composable/request/useRegions";
import {ParamsProduct} from "~/api/ProductsApi";
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
const formData = ref<ParamsProduct>({
    has_image: false,
    is_lot:  false,
    regins_ids: '',
    bargaining_to: '',
    bargaining_from: '',
    status: [],
})
</script>

<style scoped lang="scss">
@import "@/components/Catalog/styles/catalog-filters.scss";
</style>
