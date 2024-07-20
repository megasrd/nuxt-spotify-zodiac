export default defineNuxtRouteMiddleware(async (to, from) => {

  // skip middleware on server
  if (import.meta.server) return;  

  //skip if the login page
  if (from.path == '/login') return;

  const setTokenTimestamp = () => window.localStorage.setItem('spotify_token_timestamp', Date.now());
  const EXPIRATION_TIME = 3600 * 1000;
  const getTokenTimestamp = () => window.localStorage.getItem('spotify_token_timestamp');  

  const setLocalAccessToken = token => {
    setTokenTimestamp();
    window.localStorage.setItem('access_token', token);
  };    

  const refreshAccessToken = async () => {
    await $fetch('/api/refresh-token', {
      method: 'POST',
      body: {
        refresh_token: window.localStorage.getItem('refresh_token')
      }
    }).then((res) => {      
      setLocalAccessToken(res.access_token);
    })
  } 

  // If token has expired
  if (Date.now() - getTokenTimestamp() > EXPIRATION_TIME) {
    console.warn('Access token has expired, refreshing...');
    refreshAccessToken();
  }      

  if (window.localStorage.getItem('access_token') == null) {
    const route = useRoute();
    await $fetch('/api/access-token', {
      method: 'POST',
      lazy: false,
      server: false,
      body: {
        code: route.query.code
      }
    }).then((res) => {
      window.localStorage.setItem('refresh_token', res.refresh_token);
      setLocalAccessToken(res.access_token)
    })        
  }  

})