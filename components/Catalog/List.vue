<template>
    <ul
        :class="classesList"
        class="catalog-list"
    >
        <li v-for=" item in 17" class="catalog-list__item">
            <CommonCardProduct :isCompactedView="isCompactedView" />
        </li>
    </ul>
</template>
<script setup lang="ts">
const props = defineProps({
    isCompactedView: {
        type: Boolean,
        default: false,
    },
})
const classesList = computed(() => ({
    'catalog-list--is-compacted-view': props.isCompactedView,
}))
</script>

<style scoped lang="scss">
@import "@/components/Catalog/styles/catalog-list.scss";
</style>
