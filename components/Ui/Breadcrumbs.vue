<template>
    <nav class="ui-breadcrumbs">
<!--        {{pathArray}}-->
        <pre>{{ $route }}</pre>
<!--        <ul class="ui-breadcrumbs__list">-->
<!--            <li class="ui-breadcrumbs__item">-->
<!--                <nuxt-link-->
<!--                    to="/"-->
<!--                    class="ui-breadcrumbs__link"-->
<!--                >-->
<!--&lt;!&ndash;                    {{ item.title }}&ndash;&gt;-->
<!--                </nuxt-link>-->
<!--            </li>-->
<!--            <li-->
<!--                v-for="(item, i) in breadcrumbs"-->
<!--                :key="i"-->
<!--                class="ui-breadcrumbs__item"-->
<!--            >-->
<!--                <nuxt-link-->
<!--                    :to="item.to"-->
<!--                    class="ui-breadcrumbs__link"-->
<!--                >-->
<!--                    {{ item.title }}-->
<!--                </nuxt-link>-->
<!--            </li>-->
<!--        </ul>-->
    </nav>
</template>
<script setup lang="ts">
const route = useRoute()

const pathArray = route.path;

console.log(route)

// const breadcrumbs = computed(() => {
//    pathArray;
//
//     return pathArray.map((path, indexPath, array) => ({
//             to: indexPath === (array.length - 1) ? `/${path}` : `/${path}/`,
//             title: path.toString().replace('-', ' '),
//         }))
//     }
// )
</script>

<style scoped lang="scss">
@import "@/components/Ui/styles/container.scss";
</style>
