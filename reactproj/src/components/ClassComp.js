import React, { Component } from "react";

class ClassComp extends Component{
    render(){
        return <>
            <h2>This is class component</h2>
            <p>Name : <strong>{this.props.fname}</strong> Post :<strong>{this.props.post}</strong></p>
            </>
    }
}

export default ClassComp;