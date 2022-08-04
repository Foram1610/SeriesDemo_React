import React from 'react'
import './App.css'
const Card = (props) => {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgsrc} alt={props.nm} className="card_img" />
        <div className="card_info">
          <span className="card_cat"> {props.cat}</span>
          <h2 className="card_title">{props.nm}</h2>
          <a href={props.redirect} target="_blank">
            <button className='btn'>Watch Now!!</button>
            
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card