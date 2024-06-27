import querystring from 'querystring';

export default defineNuxtRouteMiddleware(async (to, from) => {

  let client_id = '12883f075a9e4c1e8711f37adda0fae2';
  let redirect_uri = 'http://localhost:3000/dashboard';  

  const generateRandomString = length => {
      let text = '';
      const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for (let i = 0; i < length; i++) {
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
  }; 

  const state = generateRandomString(16);
  const scope = 'user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public';    
  await navigateTo(`https://accounts.spotify.com/authorize?${querystring.stringify({
    response_type: 'code', 
    client_id: client_id,       
    scope: scope,
    redirect_uri: redirect_uri,
    state: state,         
  })}`, {
    external: true
  })    
})
  