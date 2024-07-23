<template>
  <div class="md:w-10/12 mx-auto">
    <div class="relative w-full min-h-80 bg-slate-800 rounded-2xl overflow-hidden">
      <div class="px-8 py-8 absolute top-0 left-0 w-full h-full z-50 bg-gray-800 bg-opacity-50">
        <div class="flex flex-wrap items-end content-center gap-6 h-full">
          <img class="w-60 h-60 object-cover object-center rounded-2xl shadow" :src="track.album.images[0].url" />
          <div>
            <h2 class="text-5xl text-white font-bold"> {{ track.name }} </h2> 
            <h3 class="text-xl text-slate-300 font-bold mt-2"> Album: {{ track.album.name }} </h3> 
            <h3 class="text-lg text-slate-300 font-bold mt-1"> Release Date: {{ track.album.release_date }} </h3> 
          </div>
        </div>
      </div>
      <img class="absolute top-0 left-0 w-full h-full object-cover object-top blur-md" :src="track.album.images[0].url" />      
    </div>
    <!-- <div class="mt-12">
      <h3 class="text-2xl font-bold text-white"> Albums </h3>
      <div class="grid grid-cols-5 gap-8 mt-4">
        <div class="cursor-pointer group" v-for="(album, index) in artist.albums.items" :key="index">
          <NuxtLink :to="`/album/${album.id}`"> 
            <div class="w-60 h-60 relative rounded-lg overflow-hidden"> 
              <div class="flex items-center justify-center icon w-full h-full bg-black bg-opacity-60 absolute top-0 left-0 right-0 bottom-0 m-auto fill-white group-hover:opacity-100 opacity-0 transition-all ease-in-out">
                <svg class="w-12 h-12 fill-inherit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
              </div>
              <img loading="lazy" :src="album.images[1].url" />
            </div>          
            <label class="text-sm font-semibold text-slate-100 mt-3 block"> {{ album.name }} </label>
            <label class="text-xs font-light text-slate-300 mt-1 block"> {{ album.release_date }} </label>
          </NuxtLink>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>  
  definePageMeta({
    layout: 'spotify'
  });  

  const route = useRoute();
  const spotify_store = useSpotifyStore();
  const trackID = route.params.id;

  const track = await $fetch(`https://api.spotify.com/v1/tracks/${trackID}`, {
    headers: spotify_store.headers
  });

  const trackFeatures = await $fetch(`https://api.spotify.com/v1/audio-features/${trackID}`, {
    headers: spotify_store.headers
  });  

  // const trackAnalysis = await $fetch(`https://api.spotify.com/v1/audio-analysis/${trackID}`, {
  //   headers: spotify_store.headers
  // });    

  console.log(track, trackFeatures);

</script>