
import { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token
      })
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });

        console.log("ME>>",user)
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists:playlists,
        });

        // console.log("fuck",playlists);
      });

       spotify.getPlaylist("3yJRgiB1vAKDWtJTmGpVUY").then((response)=>{
        dispatch({
          type:"SET_RUNNING_PLAYLIST",
          running_playlist:response
        });

        console.log("CURR",response);
      });


    }
    // console.log("I HEAVE TOKEN>>", token);
  }, []);

  // console.log(":ruct >>",token)
  return (
    <div className="app">
      {
        token ? (<Player spotify={spotify} />) : (<Login />)
      }

    </div>
  );
}

export default App;
