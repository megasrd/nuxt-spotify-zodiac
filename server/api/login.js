
import querystring from 'querystring';

export default defineEventHandler(async (event) => {

    const body = await readBody(event);

    let client_id = process.env.CLIENT_ID; 
    let redirect_uri = process.env.REDIRECT_URI;
    

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
    const url = `https://accounts.spotify.com/authorize?${querystring.stringify({
        response_type: 'code', 
        client_id: client_id,       
        scope: scope,
        redirect_uri: redirect_uri,
        state: state,         
    })}`;
    await sendRedirect(event, url, 302);

})
  