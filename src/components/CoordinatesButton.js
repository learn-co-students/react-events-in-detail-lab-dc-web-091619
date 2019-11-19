// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
    
    coor = event => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render(){
        return (
            <button onClick={this.coor}>Coordinates</button>
        )
    }
}
 
export default CoordinatesButton
