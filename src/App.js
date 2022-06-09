import React from "react";
import Counter from "./Counter";
import HelloContainer from "./HelloContainer";

class App extends React.Component {
    render(){
        return(
            <>
                <HelloContainer></HelloContainer>
                <Counter></Counter>
            </>
        )
    }
}

export default App;