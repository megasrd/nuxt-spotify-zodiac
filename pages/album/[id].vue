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
    </div>
    <div class="mt-12">
      <TrackRowLabels />    
        <template v-for="(item, key) in album.tracks.items" :key="key">
          <TrackRow 
            v-if="item !== null"
            :to="`/track/${item.id}`" 
            :key-index="key"
            :trackTitle="item.name"
            :artists="item.artists"
            :albumTitle="album.name"
            :explicit="item.explicit"
            :track-duration="item.duration_ms"  />  
        </template>             
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

  const album = await $fetch(`https://api.spotify.com/v1/albums/${albumID}`, {
    headers: spotify_store.headers
  });

  console.log(album)
  
</script>

<style lang="scss" scoped>
  .track-grid {
    display: grid;
    align-items: center;
    grid-template-columns: 0.05fr 1fr 1fr 0.1fr;
  }
</style>