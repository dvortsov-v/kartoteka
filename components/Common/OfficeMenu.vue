<template>
    <div class="office-menu">
        <ul class="office-menu__list">
            <li
                v-for="pages in pagesListOfAuthUser"
                :key="`office-menu-${pages.id}`"
                class="office-menu__item"
            >
                <NuxtLink
                    @click="$emit('close')"
                    :to="pages.path"
                    class="office-menu__link office-menu-link"
                    exactActiveClass="office-menu-link--active"
                >
                    <svg-icon class="office-menu-link__icon" :name="pages.icon" />
                    <span class="office-menu-link__name">{{ pages.name }}</span>
                    <span v-if="pages.count" class="office-menu-link__count">
                        <template v-if="pages.id === isFavoriteId" >
                            +
                        </template>
                        {{ pages.count }}
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
