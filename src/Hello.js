import React from "react";

class Hello extends React.Component {

    render(){
        let {name, surname} = this.props
        return(
            <>
                <h1>This is an hello message</h1>
                <p>Ciao {name} {surname}!</p>
            </>
        )
    }
}

export default Hello;