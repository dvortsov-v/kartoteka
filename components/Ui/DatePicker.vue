<template>
    <VueDatePicker
        v-bind="$attrs"
        :clearable="false"
        :auto-apply="true"
        :action-row="{
            showSelect: false,
            showCancel: false,
            showNow: false,
            showPreview: false,
        }"
        :enable-time-picker="false"
        format="dd.MM.yyyy"
        class="ui-datepicker"
    >
        <template #dp-input="{ value}">
            <input class="ui-datepicker__input" type="text" :value="value" :placeholder="placeholder"/>
        </template>
        <template #input-icon>
            <svg-icon name="calendar" class="ui-datepicker__icon" />
        </template>
    </VueDatePicker>
</template>

<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
defineProps({
    placeholder: {type: String, default: 'ДД.ММ.ГГГГ'},
})
</script>

<style scoped lang="scss">
@import "@/components/Ui/styles/ui-datepicker.scss";
</style>
