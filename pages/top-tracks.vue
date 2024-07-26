<template>
    <div>
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
</template>

<script setup>
  definePageMeta({
    layout: 'spotify'
  });

  const spotify_store = useSpotifyStore();

  const top_tracks = await $fetch(`https://api.spotify.com/v1/me/top/tracks?limit=20`, {
    headers: spotify_store.headers
  }); 
</script>