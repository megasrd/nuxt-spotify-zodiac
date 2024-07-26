<template>
  <div>
    <div v-if="isLoaded">
      <h2 class="text-5xl font-bold"> Top Tracks </h2>
      <div class="mt-12">
        <TrackRowLabels />    
        <template v-for="(item, key) in top_tracks.items" :key="key">
          <TrackRow 
            v-if="item !== null"
            :to="`/track/${item.id}`" 
            :key-index="key"
            :image="item.album.images[2].url"
            :trackTitle="item.name"
            :artists="item.artists"
            :albumTitle="item.album.name"
            :explicit="item.explicit"
            :track-duration="item.duration_ms"  />  
        </template>           
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