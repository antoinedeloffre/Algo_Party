<script setup lang="ts">
const route = useRoute()

const links = [{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Game',
  icon: 'i-heroicons-bolt',
  to: '/game'
}]
</script>

<template>
  <UHorizontalNavigation :links="links">
    <template #default="{ link }">
      <span class="group-hover:text-primary relative">{{ link.label }}</span>
    </template>
  </UHorizontalNavigation>
</template>