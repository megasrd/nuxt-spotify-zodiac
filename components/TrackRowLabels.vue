<template>
  <div class="track-grid px-3 pb-2 border-b border-slate-600 mb-5">
    <label v-for="label in props.labels" :key="label" class="text-sm font-semibold text-slate-400">
      {{ label }}
    </label>                       
  </div>
</template>

<script setup>
  const props = defineProps({
    labels: {
      type: Array,
      default: () => ['#', 'Title', 'Album', 'Duration']
    },
  })
</script>

<style lang="scss" scoped>
  .track-grid {
    display: grid;
    align-items: center;
    grid-template-columns: 0.05fr 1fr 1fr 0.1fr;
  }
</style>