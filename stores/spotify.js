export const useSpotifyStore = defineStore('spotifyStore', {
    state: () => ({
      access_token: 'access_token',
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
      }        
    }
  })
  