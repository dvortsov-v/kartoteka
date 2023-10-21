<template>
    <VueFinalModal contentClass="modal-catalog-filters">
        <div class="modal-catalog-filters__content">
            <div class="catalog-page-main__filters-top">
                <span class="catalog-page-main__filters-name">Фильтр</span>
                <button @click="emit('close')" class="catalog-page-main__filters-close">
                    <svg-icon name="close"/>
                </button>
            </div>
            <CatalogCategories :categories="categoriesStore.categories" class="catalog-page-main__categories" />
            <CatalogFilters @submitFilters="submitFilters" class="catalog-page-main__filters" />
        </div>
    </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import {useCategoriesStore} from "~/store/useCategoriesStore";
import {ParamsProduct} from "~/api/ProductsApi";
const categoriesStore = useCategoriesStore()

const emit = defineEmits(['close', 'submitFilters']);
const submitFilters = (params: ParamsProduct) => {
    emit('submitFilters', params)
}
</script>

<style scoped lang="scss">
@import '@/components/Modals/styles/modal-catalog-filters.scss';
</style>
<style>
.modal-forgot-password {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>
