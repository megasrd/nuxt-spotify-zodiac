<template>
  <NuxtLink class="cursor-pointer group" :to="props.to"> 
    <div class="w-full relative rounded-lg overflow-hidden"> 
      <div class="flex items-center justify-center icon w-full h-full bg-black bg-opacity-50 absolute top-0 left-0 right-0 bottom-0 m-auto fill-white group-hover:opacity-100 opacity-0 transition-all ease-in-out">
        <svg class="w-8 h-8 fill-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
      </div>
      <NuxtImg class="w-full h-full md:max-w-48 md:max-h-48 bg-slate-700 object-cover" loading="lazy" :src="props.imageSrc" />
    </div>          
    <label class="cursor-pointer text-sm font-semibold text-slate-100 mt-3 block"> {{ props.heading }} </label>
    <label v-if="props.description" class="cursor-pointer text-xs font-light text-slate-300 mt-1 block"> {{ props.description }} </label>
  </NuxtLink> 
</template>

<script setup>
  const props = defineProps({
    to: {
      type: String,
      default: '/'
    },
    imageSrc: {
      type: String
    },
    heading: {
      type: String
    },
    description: {
      type: String
    }    
  })
</script>

<style>

</style>