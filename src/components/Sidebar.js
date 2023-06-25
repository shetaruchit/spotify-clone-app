import React from 'react'
import spotify_bw from "../image/Spotify_Logo_RGB_White.png";
import "./Sidebar.css"
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../DataLayer';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    // console.log(playlists);

    return (

        <div className="sidebar">
            <img className="sidebar__logo" src={spotify_bw} alt="" />

            <SidebarOption Icon={HomeIcon} title="Home" />
            <SidebarOption Icon={SearchIcon} title="Search" />
            <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />

           
            {playlists?.items?.map((playlists) => (
                <SidebarOption title={playlists.name} />
            ))}
        </div>
    )
}

export default Sidebar
