import React from 'react'
import "./Square.css"

const Square = (props) => {
  return (
    <div>
      <button className="square" onClick={props.onSquareClick}>
      {props.value}
      </button>
    </div>
  )
}

export default Square
