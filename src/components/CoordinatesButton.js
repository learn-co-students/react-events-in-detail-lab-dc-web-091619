import React from "react"

export default class CoordinatesButton extends React.Component{
   
    clickFunc = event => {
       this.props.onReceiveCoordinates([event.pageX, event.pageY])
    }
    
    render(){
        return(
            <div>
                <button onClick={this.clickFunc} ></button>
            </div>
        )
    }

}