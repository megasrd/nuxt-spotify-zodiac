<template>
  <div>
    <h2 class="text-5xl font-bold"> Top Artists </h2>
    <div class="mt-12">
      <div class="grid grid-cols-3 gap-4">
        <div class="flex flex-wrap px-4 py-3 rounded hover:bg-slate-800 cursor-pointer w-full" v-for="(artist, key) in top_artists.items" :key="key">
          <img class="md:w-4/12 h-40 object-cover" :src="artist.images[1].url" />
          <div class="md:w-8/12 px-5">
            <label class="text-white font-medium text-xl leading-tight block mb-2"> {{key + 1}}# {{ artist.name }} </label>
            <div class="flex flex-wrap gap-3">
              <label v-for="(genre, index) in artist.genres" :key="index" class="text-slate-300 inline-block font-medium text-xs px-2 rounded-xl bg-green-700 uppercase"> 
                {{ genre }} 
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>      
  </div>
</template>

<script setup>

  definePageMeta({
    layout: 'spotify'
  });

  const spotify_store = useSpotifyStore();

  let isLoaded = ref(false);
  let top_artists;

  if (process.client) {        
      if (localStorage.getItem("access_token")) {
        await spotify_store.getTopArtists()
        top_artists = spotify_store.top_artists;    
        console.log(top_artists)
        isLoaded = true;      
      }      
    }
</script>