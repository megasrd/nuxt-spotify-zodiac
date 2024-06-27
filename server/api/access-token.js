
export default defineEventHandler(async (event) => {

    const body = await readBody(event);

    let client_id = '12883f075a9e4c1e8711f37adda0fae2';
    let client_secret = 'cc53472a96ec44e3ab688683937804e8';
    let redirect_uri = 'http://localhost:3000/dashboard';

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
  