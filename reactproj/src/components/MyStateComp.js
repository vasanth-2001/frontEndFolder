import React, { Component } from "react";

class MyStateComp extends Component {
    constructor() {
        super();
        this.state = {
            empName: "Ajay",
            empSal: 86544
        }
    }
    changeStateData = () =>{
        // window.alert("hi");
        this.setState({empName:"vasanth",  empSal:this.state.empSal+2000});
        // this.setState((prevState)=>({empName:"vasanth",empSal:prevState.empSal+2000}));
    }

    render() {
        return (
            <div>
                <h2>this is MyStateComp</h2>
                <p>Employee Name: <strong>{this.state.empName}</strong><br/>
                    Employee salary: <strong>{this.state.empSal}</strong>
                </p>
                <button type="button" className="btn btn-primary" onClick={() => this.changeStateData()}>Change state data</button>
            </div>
        )
    }
}
export default MyStateComp;