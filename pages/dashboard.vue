<template>
  <div class="my-12">
    <div v-if="isLoaded" class="max-w-5xl mx-auto bg-slate-900 rounded-2xl py-8 px-5">
      <img class="w-24 h-24 rounded-full mb-6 mx-auto" :src="user.images[1].url" />
      <label class="text-center font-bold text-xl block"> {{ user.display_name }} </label>
      <div class="grid grid-cols-3 gap-8 mt-12">
        <div class="flex flex-wrap bg-slate-700" v-for="(item, key) in recently_played.items" :key="key">
          <div class="w-4/12">
            <img class="w-full" :src="item.track.album.images[2].url" />
          </div>
          <div class="w-8/12 py-5 px-3">
            <h4 class="text-sm font-semibold"> {{ item.track.name }} </h4>
            <h5 class="text-xs italic text-slate-300"> {{ item.track.album.name }} </h5>
          </div>          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const spotify_store = useSpotifyStore();

  let isLoaded = ref(false);
  let user;
  let recently_played;

  if (process.client) {    
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
        spotify_store.setAccessToken(res.access_token); 
      })

      await spotify_store.getUser();
      await spotify_store.getRecentlyPlayed();

      user = spotify_store.user_info;
      recently_played = spotify_store.recently_played;        

      isLoaded = true;
    }
</script>
