import React from 'react'
import { useEffect } from 'react'
import search_icon from './assets/search.png'
export default function LocationPanel({inputRef, search}) {

    return (
    <div className="location-container">
      LOCATION
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search"/>
        <img src={search_icon} className="search-icon" onClick={() => {
          search(inputRef.current.value)
        }}/>
      </div>
    </div>
    )
}