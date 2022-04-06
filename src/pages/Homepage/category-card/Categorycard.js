import React from 'react'
import './Categorycard.css'
import axios from "axios";
import { useState,useEffect } from "react";


const  Categorycard = () =>  {

  const[data,setData]=useState([])

  async function getCategories() {
    try {
      const response = await axios.get("/api/categories");
      const res = response.data.categories;
      setData(res);

    } catch (error) {
      console.error(error);
    }
  }
   getCategories();

  return (
    <div className="Categorycard">
  <h1 className="Categorycard-heading">Categories</h1>
  <div className="card-grid">{
            data.map((item) => {
              return <div key={item._id} className="card card-shadow">
                <div className="card-header card-image">
                  <img src={item.img} alt=""/>
                </div>
                <h1 className="card-body">
                  {item.Name}
                </h1>
                <h1 className="card-body">
                  {item.description}
                </h1>
              </div>
            })
    }
    </div>
    </div>
  )
}

export default Categorycard