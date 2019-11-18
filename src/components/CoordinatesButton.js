import React from 'react';

export default class CoordinatesButton extends React.Component {
  render() {
    return <button onClick={this.clicked}>CoordinateButton</button>
  }

  clicked = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
}