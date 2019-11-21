// Code CoordinatesButton Component Here
import React, { Component } from 'react';

class CoordinatesButton extends Component {

  render() {
    return(
      <button onClick={this.click}>coordinates button</button>
    )
  }
  click = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }

}

export default CoordinatesButton
