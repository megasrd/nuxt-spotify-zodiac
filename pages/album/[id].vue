<template>
  <div class="md:w-10/12 mx-auto">
    <Banner :heading="album.name" :image="album.images[1].url" :descriptions="[album.label]">
      <!-- <SpotifyButton :to="artist.info.external_urls.spotify" :external="true" class="mt-3"> 
        Open in Spotify
      </SpotifyButton>          -->
    </Banner>  
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
  
</script>