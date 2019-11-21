import React from 'react'

export default class CoordinatesButton extends React.Component {
    someFunction = (event) => {
        let x = event.clientX
        let y = event.clientY
        this.props.onReceiveCoordinates([x, y])
    }

    render () {
        return <button onClick={this.someFunction}></button>
    }
}
