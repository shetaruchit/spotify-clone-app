import React from 'react';
import spotify_bw from "../image/Spotify_Logo_RGB_White.png";
import "../components/Login.css";
import { loginUrl } from '../spotify';

function Login() {
  return (
    <div className='login'>
       {/* spotify logo */}
       {/* Login with Spotify button */}

       <img src={spotify_bw} alt=""/>
       <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login
