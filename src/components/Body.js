import React from 'react'
import "./Body.css"
import Header from './Header'
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDataLayerValue } from '../DataLayer'
import SongRow from './SongRow';

function Body(spotify) {

  const[{running_playlist},dispatch] = useDataLayerValue();

  return (
    <div className='body'>
        <Header spotify={spotify}/>

        <div className="body__info">
          <img src={running_playlist?.images[0].url} alt="" />
          <div className="body__infoText">
            <strong>PLAYLIST</strong>
            <h2>Eccentric</h2>
            <p>{running_playlist?.description}</p>
          </div>
        </div>

        <div className="body__songs">
          <div className="body__icons">
              <PlayCircleFilledIcon className='body__shuffle'/>
              <FavoriteIcon fontSize='large'/>
              <MoreHorizIcon/>  
          </div>

          {/* List of songs */}
          {running_playlist?.tracks.items.map(item=>(
          
            <SongRow track={item.track}/>
          ))}
        </div>
    </div>
  )
}

export default Body
