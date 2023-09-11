<template>
  <div class="default-layout">
      <div class="default-layout__wrapper">
          <Header />
          <slot />
      </div>
      <Footer class="default-layout__footer"/>
      <ModalsContainer />
  </div>
</template>
<script setup lang="ts">
import { ModalsContainer } from 'vue-final-modal'
</script>
