<template>
    <div class="products-setting">
        <div class="products-setting__sort products-setting-sort">
            <UiChoices
                v-for="sortItem in sortList"
                :key="`catalog-page-sort-${sortItem.value}`"
                v-model:checked="typeSorting"
                @update:checked="resetSortDescending"
                :value="sortItem.value"
                name="sort"
                class="products-setting-sort__tab"
                inputType="radio"
            >
                <template #visibleElement="{isChecked}">
                    <div
                        :class="classesSort(isChecked)"
                        class="products-setting-sort__wrap"
                    >
                        <span
                            @click="toogleSortDescending"
                            class="products-setting-sort__text"
                        >
                            {{ sortItem.text }}
                        </span>
                        <svg-icon
                            v-if="isChecked"
                            name="select-down" class="products-setting-sort__icon"
                        />
                    </div>
                </template>
            </UiChoices>
            <UiButton
                theme="transparent"
                @click="modalCatalogSort.open()"
                class="products-setting-sort__open"
            >
                <span class="ui-pagination__text">
                    {{ findSelectTypeSorting }}
                </span>
            </UiButton>
        </div>
        <CommonViewsSetting class="products-setting__view" @change="changeViews" />
    </div>
</template>

<script setup lang="ts">
import {useModalCatalogSort} from "~/components/Modals/composable/useModalCatalogSort";
import {ComputedRef} from "vue";
defineProps({
    sortList: Array,
})
const emit = defineEmits(['setIsCompactedView'])

const views: Ref<string> = ref('rows');
const typeSorting: Ref<string> = ref('price');
const sortDescending: Ref<boolean> = ref(false);
const {
    modalCatalogSort,
    findSelectTypeSorting
} = useModalCatalogSort();
const isCompactedView: ComputedRef<boolean> = computed(() => unref(views) === 'tiles');
const changeViews = (value: string) => {
    views.value = value
}
const resetSortDescending = (newValue: string) => {
    sortDescending.value = false;
    typeSorting.value = newValue
}
const toogleSortDescending = () => {
    sortDescending.value = !sortDescending.value;
}

const classesSort = (isChecked: boolean) => ({
    'products-setting-sort__wrap--active': isChecked,
    'products-setting-sort__wrap--desc' : unref(sortDescending)
})

watch(isCompactedView, (isCompactedViewNew) => {
    emit('setIsCompactedView', isCompactedViewNew);
})
</script>

<style scoped lang="scss">
@import "@/components/Common/styles/products-setting.scss";
</style>
