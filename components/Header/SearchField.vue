<template>
    <div class="search-field">
        <div class="search-field__wrap">
            <input
                placeholder="Поиск имущества"
                type="text"
                class="search-field__input"
            >
            <div class="search-field__map">
                <svg-icon name="geo" class="search-field__geo" />
                <span class="search-field__in">На карте</span>
            </div>
        </div>
        <UiButton class="search-field__submit">
            <span class="search-field__text">Найти</span>
        </UiButton>
    </div>
</template>
<style scoped lang="scss">
@import "@/components/Header/styles/search-field.scss";
</style>

