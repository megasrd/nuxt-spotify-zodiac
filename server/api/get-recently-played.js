
export default defineEventHandler(async (event) => {

    const body = await readBody(event);

    const headers = {
        'Authorization': `Bearer ${body.access_token}`
    }

    const getRecentlyPlayed = await $fetch('https://api.spotify.com/v1/me/player/recently-played', { headers })    
    return getRecentlyPlayed;
})
  