import React from 'react'
import { useFilter } from '../../../context/filter-context';
import "./Playlistcard.css"

function Playlistcard({item}) {
    const { dispatch } = useFilter();
    const { _id, title, creator, imgUrl, alt} = item;
  return (
    <div className="playlist-container">
    <div className="card-grid">
              <div key={_id} className="card card-shadow cart-card" >
                <div className="card-header card-image cart-image">
                  <img src={imgUrl} alt={alt}/>
                </div>
                <h1 className="card-body cart-item-align">
                  {title}
                </h1>
                <h1 className="card-body cart-item-align">
                  {creator}
                </h1>

                <button className="btn-product-card cart-btn"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_PLAYLIST",
                              payload: { itemId: _id },
                            })
                          }>Remove from Playlist</button>
                          </div>
    </div>
</div>
  )
}

export default Playlistcard