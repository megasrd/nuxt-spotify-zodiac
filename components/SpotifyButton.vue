<template>
  <NuxtLink class="btn" :class="props.theme" :to="props.to" :target="props.external ? '_blank': '_self'">
    <slot> </slot>
  </NuxtLink>
</template>

<script setup>
  const props = defineProps({
    theme: {
      type: String,
      default: 'default'
    },
    to: {
      type: String,
      default: '/'
    },
    external: Boolean
  })
</script>

<style lang="scss" scoped>
  .btn {
    @apply inline-block px-4 py-2 text-sm text-center font-semibold rounded-3xl;
  }
  .btn.default {
    @apply bg-blue-800 text-white transition-colors ease-in-out;
    &:hover {
      @apply bg-blue-700;
    }
  }
</style>