import React from "react";
import MyButton from "./MyButton";

class Counter extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            myCounter: 0,
            savedValue: undefined
        }
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleSave = this.handleSave.bind(this)
    }

    handleIncrement() {
        this.setState((oldState) => ({myCounter: oldState.myCounter + 1}),
        () => {
            console.log(this.state.myCounter)
        })
    }

    handleSave(){
        this.setState({savedValue: this.state.myCounter})
    }

    componentDidMount(){
        console.log("component did mount")
    }

    componentWillUnmount(){
        console.log("component will unmount")
    }

    componentDidUpdate(){
        console.log("Component did update")
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shoud component update")
        console.log(nextProps)
        console.log(nextState)
        return true
    }



    render(){
        const chechParity = this.state.myCounter % 2 === 0 ? "pari" : "dispari"

        return (
            <>
                <h1>Counter: {this.state.myCounter}</h1>
                <p>Saved value: {this.state.savedValue}</p>
                <MyButton text="Increment" handleClick={this.handleIncrement}></MyButton>
                <MyButton text={`salva ${chechParity}`} handleClick={this.handleSave}></MyButton>
            </>
        )
    }
}

export default Counter;