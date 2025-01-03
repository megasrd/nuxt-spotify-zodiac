<template>
  <div class="lg:w-10/12 w-full mx-auto">
    <div v-if="status === 'pending'">
        <Loader />
     </div>
     <div v-else>
      <Banner :heading="artist.info.name" :image="artist.info.images[1].url" :descriptions="[`Followers: ${artist.info.followers.total.toLocaleString()}`]">
        <SpotifyButton :to="artist.info.external_urls.spotify" :external="true" class="mt-3"> 
          Open in Spotify
        </SpotifyButton>         
      </Banner>
      <div class="mt-12">
        <h3 class="text-2xl font-bold text-white mb-4"> Popular Tracks </h3>
        <div>
          <TrackRowLabels />    
          <template v-for="(item, key) in artist.topTracks.tracks" :key="key">
            <TrackRow 
              v-if="item !== null && key < 3"
              :to="`/track/${item.id}`" 
              :key-index="key"
              :image="item.album.images[2].url"
              :trackTitle="item.name"
              :artists="item.artists"
              :albumTitle="item.album.name"
              :explicit="item.explicit"
              :track-duration="item.duration_ms"  />  
          </template>           
        </div>      
        <h3 class="text-2xl font-bold text-white mt-8 mb-4"> Albums </h3>
        <div class="display-grid-md mt-4">
          <template v-for="(album, index) in artist.albums.items" :key="index">
            <SpotifyImage v-if="album" :to="`/album/${album.id}`" :image-src="album.images[1].url" :heading="album.name" :description="album.release_date" />
          </template>
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
  const artistID = route.params.id;

  let artist = {
    info: {},
    albums: {},
    topTracks: {}
  }  

  const { status, data: artist_data } = await useLazyAsyncData('artist_data', async () => {
    const [_info, _albums, _topTracks] = await Promise.all([
      await $fetch(`https://api.spotify.com/v1/artists/${artistID}`, {
        headers: spotify_store.headers
      }),
      await $fetch(`https://api.spotify.com/v1/artists/${artistID}/albums`, {
        headers: spotify_store.headers
      }),
      await $fetch(`https://api.spotify.com/v1/artists/${artistID}/top-tracks`, {
        headers: spotify_store.headers
      })        
    ])
    artist.info = _info;
    artist.albums = _albums
    artist.topTracks = _topTracks
  })  

</script>