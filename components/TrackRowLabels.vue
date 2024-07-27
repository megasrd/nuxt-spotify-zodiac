<template>
  <div class="track-grid px-3 pb-2 border-b border-slate-600 mb-5">
    <label class="text-sm font-semibold text-slate-400">
      #
    </label>     
    <label class="text-sm font-semibold text-slate-400">
      Title
    </label> 
    <label class="text-sm font-semibold text-slate-400">
      Album
    </label>  
    <label class="md:block hidden text-sm font-semibold text-slate-400">
      Duration
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
    grid-template-columns: 0.1fr 1fr 1fr;
    gap: 12px;
  }
  @media (min-width: 768px) {
    .track-grid {
      grid-template-columns: 0.05fr 1fr 1fr 0.1fr;
    }
  }
</style>