<template>
    <div class="catalog-filters">
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
                        v-model:checked="onlyPhoto"
                        class="catalog-filters-checkbox"
                    >
                        <span class="catalog-filters-checkbox__text">
                            Только с фото
                        </span>
                    </UiChoices>
                </li>
                <li class="catalog-filters-list__item">
                    <UiChoices
                        v-model:checked="partOfLot"
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
                        v-model:checked="status.value"
                        class="catalog-filters__checkbox catalog-filters-checkbox"
                    >
                        <span class="catalog-filters-checkbox__text">
                            {{ status.name }}
                        </span>
                    </UiChoices>
                </li>
            </ul>
            <UiButtonLink class="catalog-filters__more catalog-filters-more">
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
                    <UiDatePicker v-model="val" class="catalog-filters-fields__input"></UiDatePicker>
                </div>
                <div class="catalog-filters-fields__field">
                    <UiDatePicker class="catalog-filters-fields__input"></UiDatePicker>
                </div>
            </div>
        </div>
        <div class="catalog-filters__section">
            <h6 class="catalog-filters__title catalog-filters-title">Регион имущества</h6>
            <UiMultiSelect v-model="selectRegions" :options="options" multiple placeholder="Все" class="catalog-filters__selector"></UiMultiSelect>
        </div>
        <div class="catalog-filters__bottom">
            <UiButton type="submit" class="catalog-filters__more">Показать 1 453 товаров</UiButton>
            <UiButtonLink type="reset" class="catalog-filters__more">Сбросить</UiButtonLink>
        </div>
    </div>

</template>
<script setup lang="ts">

const onlyPhoto: Ref<boolean> = ref(false);
const partOfLot: Ref<boolean> = ref(false);
const val: Ref<Date | null> = ref(null);
const options: Ref<[]> = ref(['Все','Брянск','Витебск','Октябрь','Москва']);
const selectRegions: Ref<[]> = ref();

const listStatus: Ref<{id: number, name: string, value: boolean}[]> = ref([
    {
        id: 0,
        name: 'Проведена инвентаризация',
        value: false,
    },
    {
        id: 1,
        name: 'Проведена оценка',
        value: false,
    },
    {
        id: 2,
        name: 'Объявлены торги',
        value: false,
    },
    {
        id: 3,
        name: 'Идут торги',
        value: false,
    },
    {
        id: 4,
        name: 'Торги завершены, имущество не продано',
        value: false,
    },
])

</script>

<style scoped lang="scss">
@import "@/components/Catalog/styles/catalog-filters.scss";
</style>
