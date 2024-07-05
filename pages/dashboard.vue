<template>
  <div class="my-12">    
    <template v-if="isLoaded">
      <ProfileInfo :user="user" />
      <div class="grid grid-cols-2 gap-12 justify-center mt-24 px-12">
        <div class="">
          <h3 class="text-lg font-bold mb-5 text-white"> Top Artists </h3>
          <div class="grid grid-cols-2 gap-4">
            <div class="px-4 py-2 rounded bg-slate-800 flex items-center gap-4 mb-4" v-for="(artist, key) in top_artists.items" :key="key">
              <img class="w-16 h-16 object-cover rounded-full" :src="artist.images[1].url" />
              <label class="text-white font-bold text-sm"> {{ artist.name }} </label>
            </div>
          </div>
        </div>
        <div class="">
          <h3 class="text-lg font-bold mb-5 text-white"> Top Artists </h3>
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
      if (localStorage.getItem("access_token") === 'undefined') {
        const route = useRoute();
        const cb = {
          code: route.query.code
        };
        await $fetch('/api/access-token', {
          method: 'POST',
          lazy: true,
          server: false,
          body: {
            code: cb.code
          }
        }).then((res) => {
          localStorage.setItem("access_token", res.access_token);
        })
      }
      await spotify_store.getUser();
      await spotify_store.getTopArtists();

      user = spotify_store.user_info;
      top_artists = spotify_store.top_artists;       

      isLoaded = true;            
    }
</script>
