<template>
    <div class="office-menu">
        <ul class="office-menu__list">
            <li
                v-for="route in pagesListOfAuthUser"
                :key="`office-menu-${route.id}`"
                class="office-menu__item"
            >
                <NuxtLink
                    @click="$emit('close')"
                    :to="route.path"
                    class="office-menu__link office-menu-link"
                    exactActiveClass="office-menu-link--active"
                >
                    <svg-icon class="office-menu-link__icon" :name="route.icon" />
                    <span class="office-menu-link__name">{{ route.name }}</span>
                    <span v-if="route.count" class="office-menu-link__count">
                        <template v-if="route.id === isFavoriteId" >
                            +
                        </template>
                        {{ route.count }}
                    </span>
                </NuxtLink>
            </li>
        </ul>
        <div class="office-menu__bottom">
            <button
                @click="userLogout(userToken)"
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
import {usePagesListOfAuthUser} from "~/components/Common/composable/usePagesListOfAuthUser";
import {logout} from "~/api/UserApi";
import {useUser} from "~/composable/request/useUser";
defineEmits(['close']);
const userToken = useCookie('userToken');
const pagesListOfAuthUser = usePagesListOfAuthUser()
const {userLogout} = useUser()
const isFavoriteId = 3;
</script>

<style scoped lang="scss">
@import "@/components/Common/styles/office-menu.scss";
</style>
