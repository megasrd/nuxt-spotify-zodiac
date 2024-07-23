<template>
  <div class="md:w-10/12 mx-auto">
    <div class="relative w-full min-h-80 bg-slate-800 rounded-2xl overflow-hidden">
      <div class="px-8 py-8 absolute top-0 left-0 w-full h-full z-50 bg-gray-800 bg-opacity-50">
        <div class="flex flex-wrap items-end content-center gap-6 h-full">
          <img class="w-60 h-60 object-cover object-center rounded-2xl shadow" :src="album.images[0].url" />
          <div>
            <h2 class="text-3xl text-white font-bold"> {{ album.name }} </h2>      
            <h2 class="text-xl text-white font-semibold mt-2"> {{ album.label }} </h2>            
          </div>
        </div>
      </div>
      <img class="absolute top-0 left-0 w-full h-full object-cover object-top blur-md" :src="album.images[2].url" />      
    </div>
    <div class="mt-12">
      <div class="track-grid pb-2 border-b border-slate-600 mb-6">
        <label class="text-sm font-semibold text-slate-400">
          #
        </label>
        <label class="text-sm font-semibold text-slate-400">
          Title
        </label>  
        <label class="text-sm font-semibold text-slate-400">
          Album
        </label> 
        <label class="text-sm font-semibold text-slate-400">
          Duration
        </label>                        
      </div>
      <NuxtLink :to="`/track/${item.id}`" class="track-grid cursor-pointer py-3 px-4 rounded-2xl hover:bg-slate-800 transition-colors ease-in-out" v-for="(item, key) in album.tracks.items" :key="key">
        <div>
          {{ key + 1 }}
        </div>
        <div>
          <div class="flex flex-wrap items-center gap-3">
            <div>
              <label class="text-base font-semibold text-white"> {{ item.name }} </label>
              <span class="block">
                <span class="inline-block bg-gray-500 text-xs font-bold w-5 mr-3 text-center" v-if="item.explicit">
                  E
                </span>
                <div class="inline-block text-xs text-slate-400 mr-3" v-for="artist in item.artists" :key="artist.name">
                  {{ artist.name }}
                </div>
              </span>
            </div>
          </div>
        </div>
        <div>  
          <label class="text-sm text-slate-300">
            {{ item.name }}
          </label>
        </div>
        <div>       
          {{ unixToMinutes(item.duration_ms) }}
        </div>                    
      </NuxtLink>      
    </div>    
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'spotify'
  });  

  const route = useRoute();
  const spotify_store = useSpotifyStore();
  const albumID = route.params.id;

  const unixToMinutes = (timestamp) => {
    let m = new Date(timestamp).getMinutes()
    let s = new Date(timestamp).getSeconds()
    m = (m<10) ? '0' + m : m;
    s = (s<10) ? '0' + s : s;

    return `${m}:${s}`;
  }  

  const album = await $fetch(`https://api.spotify.com/v1/albums/${albumID}`, {
    headers: spotify_store.headers
  });
  
</script>

<style lang="scss" scoped>
  .track-grid {
    display: grid;
    align-items: center;
    grid-template-columns: 0.05fr 1fr 1fr 0.1fr;
  }
</style>