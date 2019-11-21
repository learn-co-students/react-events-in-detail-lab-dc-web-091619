// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component{

  render() {
    return(
      <button onClick={this.click}>Delay Button</button>
    )
  }

  click = (event) => {
    event.persist();
    //keeps the event object logged
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay)
  }
  //setTimeout takes two arguments
}

export default DelayedButton
