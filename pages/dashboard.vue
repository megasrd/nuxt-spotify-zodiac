<template>
  <div class="my-12">    
    <ProfileInfo :user="user" />
      <div class="lg:grid lg:grid-cols-2 gap-12 justify-center md:mt-24 mt-12 md:px-12">
        <div class="md:py-0 pt-4 pb-3">
          <div class="flex items-center justify-between md:px-0 px-6 mb-5">
            <h3 class="text-lg font-bold text-white"> Your favourite artists </h3>
            <SpotifyButton to="/top-artists">
              See more
            </SpotifyButton>
          </div>          
          <div class="md:grid md:grid-cols-3 grid-cols-1 flex flex-nowrap w-full md:overflow-x-visible overflow-x-scroll">
            <div class="px-4 py-3 md:w-full w-40 flex-grow flex-shrink-0" v-for="(artist, key) in favourite_artists.items" :key="key">
              <SpotifyImage :to="`/artist/${artist.id}`" :image-src="artist.images[1].url" :heading="artist.name" />
            </div>
          </div>
        </div>   
        <div class="md:py-0 pt-2 pb-12 lg:mt-0 mt-12">
          <div class="flex items-center justify-between md:px-0 px-6 mb-5">
            <h3 class="text-lg font-bold text-white"> Your favourite tracks </h3>
            <SpotifyButton to="/top-tracks">
              See more
            </SpotifyButton>
          </div> 
          <div class="md:grid md:grid-cols-3 grid-cols-1 flex flex-nowrap w-full md:overflow-x-visible overflow-x-scroll">
            <div class="px-4 py-3 md:w-full w-40 flex-grow flex-shrink-0" v-for="(track, key) in favourite_tracks.items" :key="key">
              <SpotifyImage :to="`/track/${track.id}`" :image-src="track.album.images[1].url" :heading="track.name" :description="track.artists[0].name" />
            </div>
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

  let user, favourite_artists, favourite_tracks;
  const { data, pending, error } = await useAsyncData('dashboard', async () => {
    const [_user, _favourite_artists, _favourite_tracks] = await Promise.all([
      await $fetch('https://api.spotify.com/v1/me', {
        headers: spotify_store.headers
      }),
      await $fetch('https://api.spotify.com/v1/me/top/artists?limit=6&time_range=long_term', {
        headers: spotify_store.headers
      }),
      await $fetch('https://api.spotify.com/v1/me/top/tracks?limit=6&time_range=long_term', {
        headers: spotify_store.headers
      })        
    ])
    user = _user;
    console.log(_user);
    favourite_artists = _favourite_artists
    favourite_tracks = _favourite_tracks
  })
  
</script>
