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
                    :to="{name: item.name}"
                    exactActiveClass="ui-breadcrumbs__link--active"
                    class="ui-breadcrumbs__link"
                >
                    {{ item.name }}
                </nuxt-link>
            </li>
        </ul>
    </nav>
</template>
<script setup lang="ts">
import {RouteLocationMatched} from "vue-router";

const route = useRoute();

const breadcrumbs:RouteLocationMatched[] = route.matched.reduce((acc: RouteLocationMatched[], current: RouteLocationMatched) => {
    if(Array.isArray(current.name)) {
        current.name.forEach(item => {
            acc.push(item)
        })
    } else {
        acc.push(current)
    }
    return acc;
}, []);
</script>

<style scoped lang="scss">
@import "@/components/Ui/styles/ui-breadcrumbs.scss";
</style>
