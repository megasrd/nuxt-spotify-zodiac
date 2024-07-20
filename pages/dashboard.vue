<template>
  <div class="my-12">    
    <template v-if="isLoaded">
      <ProfileInfo :user="user" />
      <div class="grid grid-cols-2 gap-12 justify-center mt-24 px-12">
        <div class="">
          <h3 class="text-lg font-bold mb-5 text-white"> Top artists this month </h3>
          <div class="flex flex-wrap gap-4">
            <div class="px-4 py-3 rounded hover:bg-slate-800 cursor-pointer" v-for="(artist, key) in top_artists.items" :key="key">
              <img class="w-32 h-32 object-cover rounded-full mb-4" :src="artist.images[1].url" />
              <label class="text-white font-medium text-lg leading-tight block mb-2"> {{ artist.name }} </label>
              <label class="text-slate-300 font-medium text-sm uppercase"> {{ artist.type }} </label>
            </div>
          </div>
        </div>   
        <div class="">
          <h3 class="text-lg font-bold mb-5 text-white"> Top tracks of all time </h3>
          <div class="grid grid-cols-4 gap-4">
            <div class="px-4 py-3 rounded hover:bg-slate-800 cursor-pointer w-full" v-for="(track, key) in top_tracks.items" :key="key">
              <img class="w-full mb-4" :src="track.album.images[1].url" />
              <label class="text-white font-medium text-lg leading-tight block mb-2"> {{ track.name }} </label>
              <label v-for="(artist, _key) in track.artists" :key="_key" class="text-slate-300 font-medium text-sm leading-tight block">  
                {{ artist.name }}
              </label>
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
