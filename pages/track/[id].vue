<template>
  <div>
    <div v-if="status === 'pending'">
      <Loader />
    </div>        
    <div v-else class="lg:w-10/12 w-full mx-auto">
      <template v-if="track">
        <Banner :heading="track.name" :image="track.album.images[1].url" :descriptions="[`Album: ${track.album.name }`, `Release Date: ${track.album.release_date }`]">
          <SpotifyButton :to="track.external_urls.spotify" :external="true" class="mt-3"> 
            Open in Spotify
          </SpotifyButton>     
        </Banner>  
      </template>
      <div class="mt-12">
        <h3 class="md:text-2xl text-lg font-bold text-white text-left"> Featured Artists </h3>
        <div class="flex flex-wrap mt-8 px-4 gap-8">
          <template v-for="artist in track.artists">
            <template v-if="artist">
              <NuxtLink :key="artist.name" :to="`/artist/${artist.id}`" class="font-semibold text-slate-200 text-xl hover:underline">
                {{  artist.name  }}
              </NuxtLink>
            </template>
          </template>        
        </div>
        <h3 class="mt-16 md:text-2xl text-lg font-bold text-white text-left"> Audio Features </h3>
        <div class="mt-8 flex flex-wrap gap-4">    
          <canvas class="md:w-8/12 px-4" id="audio-features"></canvas>
        </div>       
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
  const trackID = route.params.id;

  let track, trackFeatures;
  const { status, data: trackData } = await useAsyncData('trackData', async () => {
    const [_track, _trackFeatures] = await Promise.all([
      await $fetch(`https://api.spotify.com/v1/tracks/${trackID}`, {
        headers: spotify_store.headers
      })
    ])
    track = _track;
  });    

  //Chart.js
  import { Chart } from 'chart.js/auto';

  onMounted(() => {

  });

</script>