<template>
    <nav class="ui-breadcrumbs">
        <ul class="ui-breadcrumbs__list">
            <li class="ui-breadcrumbs__item">
                <nuxt-link
                    to="/"
                    class="ui-breadcrumbs__link"
                >
                    <svg-icon name="home" class="ui-breadcrumbs__icon" />
                </nuxt-link>
            </li>
            <li
                v-for="item in breadcrumbs"
                :key="`ui-breadcrumbs-${item.name}`"
                class="ui-breadcrumbs__item"
            >
                <svg-icon name="chevron-right" class="ui-breadcrumbs__chevron" />
                <nuxt-link
                    :to="item.path"
                    exactActiveClass="ui-breadcrumbs__link--active"
                    class="ui-breadcrumbs__link"
                >
                    {{ getName(item)}}
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>
<script setup lang="ts">
import {RouteLocationMatched} from "vue-router";

const props = defineProps({
    breadcrumbsList: Array,
})

const route = useRoute();

const breadcrumbs = computed(() => props.breadcrumbsList ?? route.matched.reduce((acc: RouteLocationMatched[], current: RouteLocationMatched) => {
    if(Array.isArray(current.name)) {
        current.name.forEach(item => {
            acc.push(item)
        })
    } else {
        acc.push(current)
    }
    return acc;
}, []));

const getName = (item: RouteLocationMatched) => item?.meta?.nameRoute || item.name || '';
</script>

<style scoped lang="scss">
@import "@/components/Ui/styles/ui-breadcrumbs.scss";
</style>
