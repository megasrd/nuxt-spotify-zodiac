export const useSpotifyStore = defineStore('spotifyStore', {
    state: () => ({
      access_token: 'access_token',
      user_info: {},
      recently_played: {}
    }),
    actions: {
      setAccessToken(value) {
        this.access_token = value;
      },
      async getUser() {
        const user_info = await $fetch('/api/get-user', {
            method: 'POST',
            body: {
                access_token: this.access_token
            }
        })
        this.user_info = user_info;
      },
      async getRecentlyPlayed() {
        const recently_played = await $fetch('/api/get-recently-played', {
            method: 'POST',
            body: {
                access_token: this.access_token
            }
        })
        this.recently_played = recently_played;
      }      
    }
  })
  