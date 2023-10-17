<template>
    <div class="office__page">
        <UiContainer class="office__wrap">
            <UiBreadcrumbs class="office__breadcrumbs"/>
            <div class="office-page-layout">
                <div class="office-page-layout__header">
                    <h1 class="office-page-layout__title h1"> {{ title }} </h1>
                    <span v-if="countObjects" class="office-page-layout__count">{{ countObjects }} объектов</span>
                </div>
                <div class="office-page-layout__body">
                    <slot></slot>
                    <aside class="office-page-layout__aside">
                        <CommonOfficeMenu class="office-page-layout__menu" />
                    </aside>
                </div>
            </div>
        </UiContainer>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    countObjects: Number,
})
</script>

<style scoped lang="scss">
@import '@/components/Office/styles/office-page-layout.scss';
</style>
