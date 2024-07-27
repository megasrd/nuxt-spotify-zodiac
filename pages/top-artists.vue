<template>
  <div>
    <h2 class="text-5xl font-bold"> Top Artists </h2>
    <div class="mt-12">
      <div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        <NuxtLink :to="`/artist/${artist.id}`"  class="group flex flex-wrap items-center md:px-4 py-3 rounded hover:bg-slate-800 cursor-pointer w-full" v-for="(artist, key) in top_artists.items" :key="key">
          <div class="md:w-4/12 w-5/12">
            <SpotifyImage :to="`/artist/${artist.id}`" :image-src="artist.images[1].url" />
          </div>          
          <div class="md:w-8/12 md:px-5 pl-6 w-7/12">
            <span class="text-white font-bold text-xl leading-tight block md:mb-5 mb-3"> {{key + 1}}# {{ artist.name }} </span>
            <span class="text-slate-300 font-medium text-sm leading-tight block mb-2"> Followers: {{ artist.followers.total.toLocaleString() }} </span>
            <span class="text-slate-300 font-medium text-sm leading-tight block"> Popularity: {{ artist.popularity }}% </span>            
            <SpotifyButton :to="`/artist/${artist.id}`" class="mt-5">
              View Artist
            </SpotifyButton>
          </div>
        </NuxtLink>
      </div>
    </div>      
  </div>
</template>

<script setup>

  definePageMeta({
    layout: 'spotify'
  });

  const spotify_store = useSpotifyStore();

  const top_artists = await $fetch(`https://api.spotify.com/v1/me/top/artists?limit=12`, {
    headers: spotify_store.headers
  });  

</script>