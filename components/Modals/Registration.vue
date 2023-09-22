<template>
    <VueFinalModal>
        Регистрация
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
