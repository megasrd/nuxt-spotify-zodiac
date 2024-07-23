<template>
  <div class="my-12">    
    <template v-if="isLoaded">
      <ProfileInfo :user="user" />
      <div class="md:grid md:grid-cols-2 gap-12 justify-center md:mt-24 mt-12 md:px-12">
        <div class="md:py-0 pt-4 pb-3">
          <h3 class="text-lg font-bold mb-5 text-white md:px-0 px-6"> Top artists this month </h3>
          <div class="flex md:flex-wrap flex-nowrap md:gap-4 gap-2 w-full md:overflow-x-visible overflow-x-scroll">
            <div class="md:w-unset px-4 py-3 w-40 flex-grow flex-shrink-0 rounded hover:bg-slate-800 cursor-pointer" v-for="(artist, key) in top_artists.items" :key="key">
              <NuxtLink :to="`/artist/${artist.id}`"> 
                <img class="w-32 h-32 object-cover rounded-full mb-4" :src="artist.images[1].url" />
                <label class="text-white font-medium text-lg leading-tight block mb-2"> {{ artist.name }} </label>
                <label class="text-slate-300 font-medium text-sm uppercase"> {{ artist.type }} </label>
              </NuxtLink>
            </div>
          </div>
        </div>   
        <div class="md:py-0 pt-2 pb-12">
          <h3 class="text-lg font-bold mb-5 text-white md:mt-0 mt-6 md:px-0 px-6"> Top tracks of all time </h3>
          <div class="md:grid md:grid-cols-4 flex flex-nowrap gap-4 w-full md:overflow-x-visible overflow-x-scroll">
            <div class="px-4 py-3 rounded hover:bg-slate-800 cursor-pointer flex-grow flex-shrink-0 md:w-full w-40" v-for="(track, key) in top_tracks.items" :key="key">
              <NuxtLink :to="`/track/${track.id}`"> 
                <img class="w-full mb-4" :src="track.album.images[1].url" />
                <label class="text-white font-medium text-lg leading-tight block mb-2"> {{ track.name }} </label>
                <label v-for="(artist, _key) in track.artists" :key="_key" class="text-slate-300 font-medium text-sm leading-tight block">  
                  {{ artist.name }}
                </label>
              </NuxtLink>
            </div>
          </div>
        </div>              
      </div>
    </template>
    <template v-else>
      <Loader />
    </template>
  </div>
</template>

<script setup>

  definePageMeta({
    layout: 'spotify'
  });

  const spotify_store = useSpotifyStore();

  let isLoaded = ref(false);
  let user, top_artists, top_tracks;

  if (process.client) {    
    
      
      if (localStorage.getItem("access_token")) {

        await spotify_store.getUser();
        await spotify_store.getTopArtistsShort()
        await spotify_store.getTopTracksShort();

        user = spotify_store.user_info;
        top_artists = spotify_store.top_artists_short;    
        top_tracks = spotify_store.top_tracks_short;

        isLoaded = true;      

      }      
    }
</script>
