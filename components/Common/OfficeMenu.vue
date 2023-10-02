<template>
    <div class="office-menu">
        <ul class="office-menu__list">
            <li
                v-for="route in pagesListOfAuthUser"
                :key="`office-menu-${route.id}`"
                class="office-menu__item"
            >
                <NuxtLink
                    :to="route.path"
                    class="office-menu__link office-menu-link"
                    exactActiveClass="office-menu-link--active"
                >
                    <svg-icon class="office-menu-link__icon" :name="route.icon" />
                    <span class="office-menu-link__name">{{ route.name }}</span>
                    <span v-if="(route.name === 'Предложения') || (route.name === 'Заявки')" class="office-menu-link__count"> 234</span>
                </NuxtLink>
            </li>
        </ul>
        <div class="office-menu__bottom">
            <button
                @click="logout(userToken)"
                type="button"
                class="office-menu__logout office-menu-link"
            >
                <svg-icon name="exit" class="office-menu-link__icon" />
                <span class="office-menu-link__name">Выход</span>
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
import {pagesListOfAuthUser} from "~/constants/pagesListOfAuthUser";
import {logout} from "~/api/UserApi";

const userToken = useCookie('userToken');


</script>

<style scoped lang="scss">
@import "@/components/Common/styles/office-menu.scss";
</style>
