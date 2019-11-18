// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
    createXAndY = (event) => {
        // console.log(this.props.onReceiveCoordinates)
        // console.log(event.clientX, event.clientY)
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render(){
        return (
            <button onClick={this.createXAndY}></button>
        )
    }
}

export default CoordinatesButton