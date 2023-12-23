<template>
    <Multiselect v-bind="$attrs" class="ui-multiselect">
        <template #caret>
            <svg-icon name="chevron-down" class="ui-multiselect__icon"/>
        </template>
        <template #noResult>
            <span class="ui-multiselect__empty">Ничего не найдено</span>
        </template>
        <template #noOptions>
            <span class="ui-multiselect__empty">Cписок пуст</span>
        </template>
    </Multiselect>
</template>

<script setup lang="ts">
import Multiselect from 'vue-multiselect'

</script>

<style scoped lang="scss">
@import "@/components/Ui/styles/ui-multiselect.scss";
</style>
