<template>
    <div class="office-layout">
        <div class="office-layout__wrapper">
            <Header />
            <div class="office-layout__page">
                <UiContainer class="orders-page__wrap">
                    <UiBreadcrumbs class="news-list-page__breadcrumbs"/>
                    <slot></slot>
                </UiContainer>
            </div>
        </div>
        <Footer class="office-layout__footer"/>
        <ModalsContainer />
    </div>
</template>
<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'
</script>
