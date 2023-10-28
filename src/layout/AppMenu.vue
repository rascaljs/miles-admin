<script setup lang="ts">
import AppMenuItem from './AppMenuItem.vue';

const model = ref<Record<string, any>[]>([
  {
    label: 'Home',
    items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
  },
  {
    label: 'UI Components',
    items: [
      { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/uikit/button', class: 'rotated-icon' },
      { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/uikit/tree' }
    ]
  },
  {
    label: 'Prime Blocks',
    items: [
      { label: 'Free Blocks', icon: 'pi pi-fw pi-eye', to: '/blocks', badge: 'NEW' },
      {
        label: 'All Blocks',
        icon: 'pi pi-fw pi-globe',
        url: 'https://www.primefaces.org/primeblocks-vue',
        target: '_blank'
      }
    ]
  },
  {
    label: 'Utilities',
    items: [
      {
        label: 'PrimeFlex',
        icon: 'pi pi-fw pi-desktop',
        url: 'https://www.primefaces.org/primeflex/',
        target: '_blank'
      }
    ]
  }
]);
</script>

<template>
  <ul class="layout-menu">
    <template v-for="(item, i) in model" :key="item">
      <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
      <li v-if="item.separator" class="menu-separator"></li>
    </template>
    <li>
      <a href="https://www.primefaces.org/primeblocks-vue/#/" target="_blank">
        <img src="/layout/images/banner-primeblocks.png" alt="Prime Blocks" class="w-full mt-3" />
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped></style>
