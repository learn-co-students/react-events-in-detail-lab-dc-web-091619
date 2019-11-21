import React from 'react'

const CoordinatesButton = (props) => {
  
  let handleClick = (event) => {
    props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  return (
    <button onClick={handleClick}>Get Coordinates</button>
  )
}

export default CoordinatesButton