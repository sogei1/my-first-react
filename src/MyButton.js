import React from "react";

class MyButton extends React.Component {

    render(){
        return(
            <button onClick={this.props.handleClick}>
                {this.props.text}
            </button>
        )
    }    
}

export default MyButton