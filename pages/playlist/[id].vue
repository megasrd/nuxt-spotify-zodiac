<template>
  <div>
    <div v-if="status === 'pending'">
      <Loader />
    </div>    
    <div v-else class="flex flex-wrap mx-auto">
      <div class="lg:w-4/12 md:w-3/12 w-full">
        <SpotifyImage class="max-w-72 w-full mx-auto block" :image-src="playlist.images[0].url" />
        <h2 class="text-center font-bold text-xl text-white mt-5"> {{ playlist.name }} </h2>
        <h4 class="text-center font-semibold text-sm text-slate-300 mt-2"> By {{ playlist.owner.display_name }} </h4>
      </div>
      <div class="lg:w-8/12 md:w-9/12 w-full md:mt-0 mt-12">
        <TrackRowLabels />    
        <template v-for="(item, key) in playlist.tracks.items" :key="key">
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

  const route = useRoute();
  const spotify_store = useSpotifyStore();
  const playlistID = route.params.id;

  const { status, data: playlist } = await useLazyAsyncData('playlist', () => $fetch(`https://api.spotify.com/v1/playlists/${playlistID}`, {
    headers: spotify_store.headers
  }));   

</script>