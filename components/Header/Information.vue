<template>
    <div class=" header-information">
        <div class="header-information__description header-information-description">
            <span class="header-information-description__text">Вестник государственной регистрации</span>
            <NuxtLink to="/" class="header-information-description__link">kartoteka.ru</NuxtLink>
        </div>
        <div class="header-information__phone header-information-phone">
            <svg-icon name="phone" class="header-information-phone__icon"/>
            <span class="header-information-phone__numbers">8 800 100-85-55</span>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "@/components/Header/styles/header-information.scss";
</style>
