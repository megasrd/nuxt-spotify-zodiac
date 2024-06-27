<template>
  <div>
    {{ access_token }}
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';  

  if (process.client) {
    const spotify_store = useSpotifyStore();
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
      navigateTo('/dashboard');
    })
  }

</script>