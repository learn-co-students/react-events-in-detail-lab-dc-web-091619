// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
    render() {
        return <button onClick={(event) => {
            event.persist()
            const mouseCoor = [event.clientX, event.clientY];
            this.props.onReceiveCoordinates(mouseCoor);
        }}></button>
    }
}