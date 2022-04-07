import React from 'react'
import { useFilter } from '../../context/filter-context';
import { Navbar } from '../Navbar/Navbar'
import Sidebar from '../VideoListing/Sidebar/Sidebar'
import Primarycard from "./Playlistcard/Playlistcard"

function Playlist() {
    const { state } = useFilter();
    const playlistitems = state.default.filter(
      (item) => item.isInPlaylist
    );
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <h1 className="cart-items-heading"> My Playlist </h1>
        <div className="watchcard-container">
        {playlistitems.map((item) => (
          <Primarycard item={item} />
        ))}
    </div>
    </div>
  )
}

export default Playlist