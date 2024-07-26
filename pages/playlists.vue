<template>
  <div>  
    <h2 class="text-5xl font-bold"> Playlists </h2>
    <div class="mt-12">
      <div class="display-grid-lg mt-4">
        <div v-for="(album, index) in playlists.items" :key="index">
          <SpotifyImage :to="`/playlist/${album.id}`" :image-src="album.images[0].url" :heading="album.name" :description="`Tracks: ${album.tracks.total}`" />
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

  const playlists = await $fetch(`https://api.spotify.com/v1/me/playlists`, {
    headers: spotify_store.headers
  });  
  
</script>

<style>

</style>