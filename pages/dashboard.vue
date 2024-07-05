<template>
  <div class="my-12">    
    <template v-if="isLoaded">
      <ProfileInfo :user="user" />
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
      console.log(recently_played);

      isLoaded = true;
    }
</script>
