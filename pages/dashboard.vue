<template>
  <div class="my-12">    
    <template v-if="isLoaded">
      <ProfileInfo :user="user" />
      <div class="grid grid-cols-1 gap-12 justify-center mt-24 px-12">
        <div class="">
          <h3 class="text-lg font-bold mb-5 text-white"> Top artists this month </h3>
          <div class="flex flex-wrap gap-4">
            <div class="px-4 py-3 rounded hover:bg-slate-800 cursor-pointer" v-for="(artist, key) in top_artists.items" :key="key">
              <img class="w-40 h-40 object-cover rounded-full mb-4" :src="artist.images[1].url" />
              <label class="text-white font-medium text-lg leading-tight block mb-2"> {{ artist.name }} </label>
              <label class="text-slate-300 font-medium text-sm uppercase"> {{ artist.type }} </label>
            </div>
          </div>
        </div>      
      </div>
    </template>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'spotify'
  });
  const spotify_store = useSpotifyStore();

  let isLoaded = ref(false);
  let user;
  let top_artists;

  if (process.client) {    
      if (localStorage.getItem("access_token") === 'undefined' || localStorage.getItem("access_token") === null) {
        const route = useRoute();
        const cb = {
          code: route.query.code
        };
        await $fetch('/api/access-token', {
          method: 'POST',
          lazy: false,
          server: false,
          body: {
            code: cb.code
          }
        }).then((res) => {
          localStorage.setItem("access_token", res.access_token);
          localStorage.setItem("refresh_token", res.refresh_token);
        })
      }
      await spotify_store.getUser();
      await spotify_store.getTopArtists();

      user = spotify_store.user_info;
      top_artists = spotify_store.top_artists;       

      isLoaded = true;            
    }
</script>
