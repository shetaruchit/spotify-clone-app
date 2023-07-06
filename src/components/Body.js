import React from 'react'
import "./Body.css"
import Header from './Header'
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDataLayerValue } from '../DataLayer'
import SongRow from './SongRow';
import { green } from '@mui/material/colors';

function Body(spotify) {

  const [{ running_playlist }, dispatch] = useDataLayerValue();

  return (
    <div className='body'>
      
      <div className="body__uper">
        <Header spotify={spotify} />
        <div className="body__info">
          <img src={running_playlist?.images[0].url} alt="" />
          <div className="body__infoText">
            <strong>Playlist</strong>
            <h2>Eccentric</h2>
            <p>{running_playlist?.description}</p>
          </div>
        </div>
      </div>

      <div className="body__lower">

        <div className="body__songs">
          <div className="body__icons">
            <PlayCircleFilledIcon sx={{ color: green[500] }} className='body__shuffle' />
            <FavoriteIcon sx={{ color: green[500] }} fontSize='large' />
            <MoreHorizIcon />
          </div>

          {/* List of songs */}
          {running_playlist?.tracks.items.map(item => (

            <SongRow track={item.track} />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Body
