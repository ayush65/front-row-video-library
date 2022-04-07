import React from 'react'
import { useFilter } from '../../context/filter-context'
import { Navbar } from '../Navbar/Navbar'
import Sidebar from '../VideoListing/Sidebar/Sidebar'
import "./Watchlater.css"
import Watchlatercard from './WatchlaterCard/Watchlatercard'

function Watchlater() {
    const { state } = useFilter();
    const watchlateritems = state.default.filter(
      (item) => item.isWatchlater
    );
    console.log(watchlateritems)

  return (
    <div className="watchlater-container">
        <Navbar/>
        <Sidebar/>
        <h1 className="cart-items-heading"> My Watchlist ({watchlateritems.length})</h1>
        <div className="watchcard-container">
        {watchlateritems.map((item) => (
          <Watchlatercard item={item} />
        ))}
        </div>
    </div>
  )
}

export default Watchlater