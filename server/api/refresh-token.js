
export default defineEventHandler(async (event) => {

    const body = await readBody(event);

    let client_id = process.env.CLIENT_ID; 
    let client_secret = process.env.CLIENT_SECRET;
    let redirect_uri = process.env.REDIRECT_URI;

    const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

    const headers = {
        'Authorization': `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    const params = new URLSearchParams({
        refresh_token: body.refresh_token,
        grant_type: 'refresh_token' 
    })
    
    const getToken = await $fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers,
        body: params
    })    
    return getToken;
})
  