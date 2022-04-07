import React from 'react'
import './Videocards.css';
import axios from "axios";
import { useState} from "react";
import { AiFillLike  , AiFillDislike} from "react-icons/ai";
import { useFilter } from "../../../context/filter-context";


function Videocard() {

  const { state  , dispatch} = useFilter();

  return (
    <div>
<div className="product-container">
<div className="card-grid">
    {
             state.default.map((item) => { 
              return <div key={item._id} className="card card-shadow">
                <div className="card-header card-image">
                  <img src={item.imgUrl} alt=""/>
                </div>
                <h1 className="card-body">
                  {item.title}
                </h1>   
                <h1 className="card-body">
                  {item.creator}
                </h1> 
                <div>
                <button className="btn-product-card">Watch Now</button>
                <button className="btn-product-card card-btn-product"
                                 onClick={() =>
                                  dispatch({
                                    type: "ADD_TO_LIKED",
                                    payload: { itemId: item._id },
                                  })
                                }><AiFillLike /></button>
                <button className="btn-product-card card-btn-product"><AiFillDislike /></button>
                </div>
                
                <button className="btn-product-card"
                 onClick={() =>
                  dispatch({
                    type: "ADD_TO_WATCHLIST",
                    payload: { itemId: item._id },
                  })
                }>Watch Later</button>
              </div>
            })
    }
    </div>
</div>
</div>
  )
}

export default Videocard