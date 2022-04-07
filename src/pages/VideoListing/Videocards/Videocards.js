import React from 'react'
import './Videocards.css';
import axios from "axios";
import { useState} from "react";
import { AiFillLike  , AiFillDislike} from "react-icons/ai";



function Videocard() {

  const[data,setData]=useState([])

  async function getCategories() {
    try {
      const response = await axios.get("/api/videos");
      const res = response.data.videos;
      setData(res);

    } catch (error) {
      console.error(error);
    }
  }
   getCategories();


  return (
    <div>
<div className="product-container">
<div className="card-grid">
    {
             data.map((item) => {
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
                <button className="btn-product-card"><AiFillLike /></button>
                <button className="btn-product-card"><AiFillDislike /></button>
                </div>
                
                <button className="btn-product-card">Watch Later</button>
              </div>
            })
    }
    </div>
</div>
</div>
  )
}

export default Videocard