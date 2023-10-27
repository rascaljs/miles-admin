<script setup lang="ts">
import AppConfig from './AppConfig.vue';
</script>

<template>
  <div class="layout-wrapper">
    <app-config></app-config>
    <div class="layout-mask"></div>
  </div>
</template>

<style lang="scss">
.layout-wrapper {
  @include scrollbar(8px, #e1e1e1);
}
</style>
