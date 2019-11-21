import React from 'react'

const DelayedButton =(props) => {
  console.log("from DelayedButton", props)

  let handleClick = (event) => {
    event.persist()
    setTimeout( () => {props.onDelayedClick(event)}, props.delay )
  }
    
  return (
    <button onClick={handleClick}>Delay</button>
  )
}

export default DelayedButton