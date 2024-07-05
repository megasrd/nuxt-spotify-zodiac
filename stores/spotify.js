export const useSpotifyStore = defineStore('spotifyStore', {
    state: () => ({
      access_token: 'access_token',
      user_info: {},
      recently_played: {},
      top_artists: {}
    }),
    getters: {
      headers(state) {
        const token = localStorage.getItem("access_token");
        return {
          'Authorization': `Bearer ${token}` 
        }
      },
      getAccessToken(state) {
        return localStorage.getItem("access_token");
      }
    },
    actions: {
      setAccessToken(value) {
        this.access_token = value;
        localStorage.setItem("access_token", value);
      },
      async getUser() {
        const user_info = await $fetch('https://api.spotify.com/v1/me', {
          headers: this.headers
        })
        this.user_info = user_info;
      },
      async getRecentlyPlayed() {
        const recently_played = await $fetch('https://api.spotify.com/v1/me/player/recently-played', {
          headers: this.headers
        })
        this.recently_played = recently_played;
      },
      async getTopArtists() {
        const top_artists = await $fetch('https://api.spotify.com/v1/me/top/artists?limit=50&time_range=short_term', {
          headers: this.headers
        })
        this.top_artists = top_artists;
      }               
    }
  })
  