<template>
  <div>
    <div v-if="isLoaded">
      <h2 class="text-5xl font-bold"> Top Tracks </h2>
      <div class="mt-12">
        <div class="track-grid pb-2 border-b border-slate-600">
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
        <div class="track-grid" v-for="(item, key) in top_tracks.items" :key="key">
          <div>
            {{ key + 1 }}
          </div>
          <div>
            <div class="flex flex-wrap items-center gap-3">
              <img :src="item.album.images[2].url" class="w-18 rounded-lg" />
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
              {{ item.album.name }}
            </label>
          </div>
          <div>       
            {{ unixToMinutes(item.duration_ms) }}
          </div>                    
        </div>      
      </div>
    </div>
    <div v-else>
      <Loader />
    </div>
  </div>  
</template>

<script setup>
  definePageMeta({
    layout: 'spotify'
  });

  const unixToMinutes = (timestamp) => {
    let m = new Date(timestamp).getMinutes()
    let s = new Date(timestamp).getSeconds()
    m = (m<10) ? '0' + m : m;
    s = (s<10) ? '0' + s : s;

    return `${m}:${s}`;
  }

  const spotify_store = useSpotifyStore();

  let isLoaded = ref(false);
  let top_tracks;

  if (process.client) {        
      if (localStorage.getItem("access_token")) {
        await spotify_store.getTopTracks()
        top_tracks = spotify_store.top_tracks;    
        isLoaded = true;      
      }      
    }  
</script>

<style lang="scss" scoped>
  .track-grid {
    display: grid;
    align-items: center;
    grid-template-columns: 0.05fr 1fr 1fr 0.1fr;
    grid-gap: 12px;
    margin-bottom: 32px;
  }
</style>