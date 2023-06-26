import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
//image of footer footer song
import OneDay from "../image/OneDay.jpg"
function Footer() {
  return (
    <div className="footer">
       <div className="footer__left">
        <img className="footer__albumLogo" src={OneDay} alt="" />
        <div className="footer__songInfo">
          <h4>One Day</h4>
          <p>Nic D</p>
        </div>
       </div>

       <div className="footer__center">
        <ShuffleIcon className="footer__green"/>
        <SkipPreviousIcon className="footer__icon"/>
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
        <SkipNextIcon className="footer__icon"/>
        <RepeatIcon className="footer__green"/>

       </div>

       <dov className="footer__right">
       <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider  />
          </Grid>
        </Grid>
       </dov>
    </div>
  )
}

export default Footer
