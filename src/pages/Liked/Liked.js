import React from 'react'
import { useFilter } from '../../context/filter-context';
import { Navbar } from '../Navbar/Navbar'
import Sidebar from '../VideoListing/Sidebar/Sidebar'
import LikedCard from './LikedCard/LikedCard';
import "./Liked.css"

function Liked() {
    const { state } = useFilter();
    const likeditems = state.default.filter(
      (item) => item.isLiked
    );
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <h1 className="cart-items-heading"> My Liked ({likeditems.length})</h1>
        <div className="watchcard-container">
        {likeditems.map((item) => (
          <LikedCard item={item} />
        ))}
        </div>
    </div>
  )
}

export default Liked