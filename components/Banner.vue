<template>
  <div class="relative w-full bg-slate-800 rounded-t-2xl overflow-hidden">
    <div :style="`background: linear-gradient(180deg, ${stringToHexColor(props.heading)}, #0f172a)`" class="px-8 py-8 w-full h-full z-50 bg-gray-800 bg-opacity-50">
      <div class="xl:flex xl:flex-wrap xl:items-end xl:content-center xl:gap-6 h-full">
        <img class="xl:w-60 xl:h-60 w-32 h-32 object-cover object-center rounded-2xl shadow" :src="props.image" />
        <div class="xl:mt-0 mt-6">
          <h2 class="lg:text-4xl md:text-2xl text-xl text-white font-bold mb-3"> {{ props.heading }} </h2>      
          <h2 v-for="item in descriptions" :key="item" class="md:text-lg text-base text-slate-200 font-semibold mt-1"> 
            {{ item }} 
          </h2>      
          <slot>

          </slot>
        </div>
      </div>
    </div>           
  </div>
</template>

<script setup>
  const props = defineProps({
    heading: {
      type: String
    },
    descriptions: {
      type: Array
    },    
    image: {
      type: String
    },
  });

  function stringToHexColor(str) {
    // Hash the string to get a unique integer
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    // Convert the hash to a hex color code
    let color = '#';
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xFF;
        color += ('00' + value.toString(16)).slice(-2);
    }
    return color;
}    
</script>

<style>

</style>