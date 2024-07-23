
export default defineEventHandler(async (event) => {

    const body = await readBody(event);
    const config = useRuntimeConfig();

    let client_id = config.public.CLIENT_ID;; 
    let client_secret = config.public.CLIENT_SECRET;
    let redirect_uri = config.public.REDIRECT_URI;

    const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

    const headers = {
        'Authorization': `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    const params = new URLSearchParams({
        code: body.code,
        redirect_uri: redirect_uri,
        grant_type: 'authorization_code' 
    })
    
    const getToken = await $fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers,
        body: params
    })    
    return getToken;
})
  