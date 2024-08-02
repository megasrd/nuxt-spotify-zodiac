<template>
  <div>
    <div v-if="status === 'pending'">
      <Loader />
    </div>
    <div v-else>
      <h2 class="text-5xl font-bold"> Recent </h2>      
      <div class="mt-12">
        <TrackRowLabels />    
        <template v-for="(item, key) in recent.items" :key="key">
          <TrackRow 
            v-if="item.track !== null"
            :to="`/track/${item.track.id}`" 
            :key-index="key"
            :image="item.track.album.images[2].url"
            :trackTitle="item.track.name"
            :artists="item.track.artists"
            :albumTitle="item.track.album.name"
            :explicit="item.track.explicit"
            :track-duration="item.track.duration_ms"  />  
        </template>            
      </div>       
    </div>          
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'spotify'
  });
  
  const spotify_store = useSpotifyStore();
  const { status, data: recent } = await useLazyAsyncData('recent', () => $fetch(`https://api.spotify.com/v1/me/player/recently-played`, {
    headers: spotify_store.headers
  }));      

</script>