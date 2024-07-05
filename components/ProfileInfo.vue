<template>
  <div class="max-w-2xl mx-auto">
    <img class="w-36 h-36 rounded-full mx-auto mb-6 bg-slate-800"/>
    <h2 class="text-center font-bold text-5xl"> Regan-Jay Dee </h2>
    <div class="grid grid-cols-3 gap-4 mt-4 mx-auto max-w-sm">
        <div class="text-center">
            <label class="font-bold text-xl block mb-2"> 2 </label>
            <p class="uppercase text-xs font-normal text-slate-400"> FOLLOWERS </p>
        </div>
        <div class="text-center">
            <label class="font-bold text-xl block mb-2"> 2 </label>
            <p class="uppercase text-xs font-normal text-slate-400"> FOLLOWING </p>
        </div>
        <div class="text-center">
            <label class="font-bold text-xl block mb-2"> 2 </label>
            <p class="uppercase text-xs font-normal text-slate-400"> PLAYLISTS </p>
        </div>                
    </div>
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
