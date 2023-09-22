<template>
    <VueFinalModal>
        <div class="modal-catalog-menu">
            <div class="catalog-page-main__filters-top">
                <span class="catalog-page-main__filters-name">Фильтр</span>
                <button @click="emit('close')" class="catalog-page-main__filters-close">
                    <svg-icon name="close"/>
                </button>
            </div>
            <CatalogCategories :categories="categoriesStore.categories" class="catalog-page-main__categories" />
            <CatalogFilters class="catalog-page-main__filters" />
        </div>
    </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'
import {useCategoriesStore} from "~/store/useCategoriesStore";
const categoriesStore =  useCategoriesStore()
const emit = defineEmits(['close'])
</script>

<style scoped lang="scss">
@import '@/components/Modals/styles/modal-catalog-menu.scss';
</style>
