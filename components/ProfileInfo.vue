<template>
  <div class="max-w-2xl mx-auto">
    <img v-if="user.images.length > 0" class="md:w-48 md:h-48 w-36 h-36 rounded-full mx-auto mb-6 bg-slate-800" :src="user.images[0]?.url">
    <h2 class="md:text-center font-bold md:text-4xl text-3xl"> Welcome, {{ user.display_name }}. </h2>
  </div>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object,
    default: () => {}
  }  
})
</script>
