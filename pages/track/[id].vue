<template>
  <div class="lg:w-10/12 w-full mx-auto">
    <Banner :heading="track.name" :image="track.album.images[1].url" :descriptions="[`Album: ${track.album.name }`, `Release Date: ${track.album.release_date }`]">
      <SpotifyButton :to="track.external_urls.spotify" :external="true" class="mt-3"> 
        Open in Spotify
      </SpotifyButton>     
    </Banner>  
    <div class="mt-12">
      <h3 class="text-2xl font-bold text-white text-center"> Audio Features </h3>
      <div class="mt-12 flex flex-wrap gap-4">    
        <canvas class="mx-auto md:w-8/12 px-4" id="audio-features"></canvas>
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

  const track = await $fetch(`https://api.spotify.com/v1/tracks/${trackID}`, {
    headers: spotify_store.headers
  });

  const trackFeatures = await $fetch(`https://api.spotify.com/v1/audio-features/${trackID}`, {
    headers: spotify_store.headers
  });  
  const { acousticness, danceability, energy, instrumentalness, liveness, loudness, speechiness } = trackFeatures;

  //Chart.js
  import { Chart } from 'chart.js/auto';

  onMounted(() => {
    //bar 
    const config = {
      type: 'bar',
      data: {
        labels: [
          'Acousticness',
          'Danceability',
          'Energy',
          'Instrumentalness',
          'Liveness',
          'Speechiness'
        ],
        datasets: [{
          data: [acousticness, danceability, energy, instrumentalness, liveness, speechiness],
          fill: true,
          backgroundColor: [
            'rgba(255, 99, 132, 0.3)',
            'rgba(255, 159, 64, 0.3)',
            'rgba(255, 205, 86, 0.3)',
            'rgba(75, 192, 192, 0.3)',
            'rgba(54, 162, 235, 0.3)',
            'rgba(153, 102, 255, 0.3)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)'
          ],    
          borderWidth: 1          
        }]
      },  
      options: {
        scales: {
          x: {
            grid: {
              color: '#6c6c6c'
            }
          },
          y: {
            grid: {
              color: '#6c6c6c'
            }
          }          
        },
        plugins: {
          legend: {
            display: false
          },          
        },
      },
    };  
    new Chart(document.getElementById('audio-features'), config);
  });

</script>