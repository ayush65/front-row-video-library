import React from 'react'
import {Navbar} from "../Navbar/Navbar"
import Sidebar from "../VideoListing/Sidebar/Sidebar"
import Historycard from './Historycard/Historycard'
import {useFilter} from "../../context/filter-context"

function History() {
    const { state } = useFilter();
    const historyitems = state.default.filter(
      (item) => item.isInHistory
    );
  return (
    <div>
        <Navbar />
        <Sidebar />
        <h1 className="cart-items-heading"> My History ({historyitems.length})</h1>
        <div className="watchcard-container">
        {historyitems.map((item) => (
          <Historycard item={item} />
        ))}
    </div>
    </div>
  )
}

export default History