// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component{
    buttonClicked = (event) => {
        // console.log(event)
        // console.log(this.props.delay)
        // console.log(this.props.onDelayedClick)
        event.persist();
        // setTimeout(function(){this.props.onDelayedClick(event)}, this.props.delay);

        setTimeout(() => this.props.onDelayedClick(event), this.props.delay);
    }

    render(){
        return <button onClick={this.buttonClicked}/>
    }
}

export default DelayedButton