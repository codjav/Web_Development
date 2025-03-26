import React from 'react'
import "./Cards.css"

const Cards = (props) => {
  return (
    <div className='Card' style={{overflow:"hidden"}}>
      <h1>{props.title}</h1>
      <h2>{props.desc}</h2>
    </div>
  )
}

export default Cards
