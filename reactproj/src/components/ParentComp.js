import React, { Component } from "react";
import ChildComp from "./ChildComp";
import MyPureComp from "./MyPureComp";
import MyMemoComp from "./MYMemoComp";

class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empName: "vasanth",
            empSal: 20000
        }
    }
    
    Employee=()=>{
        this.setState((prevState)=>({empName:"Vaasnth Rajendran",empSal:prevState.empSal+5000}))
    }
    render(){
        const {empName,empSal} =this.state;   //destructuring of state
        const {gender,contact} =this.props;   //destructuring of props
        return(
            <div>
                <h2>This is Parent Component</h2>
                {/* <p>Name :<strong>{this.state.empName}</strong> ,Salary : <strong>{this.state.empSal}</strong></p> */}
                <p>Name :<strong>{empName}</strong> ,Salary : <strong>{empSal}</strong></p>
                {/* <p>Gender :<strong>{this.props.gender}</strong> ,contact : <strong>{this.props.contact}</strong></p> */}
                <p>Gender :<strong>{gender}</strong> ,contact : <strong>{contact}</strong></p>
                <button type='button' onClick={()=>this.Employee()} className="btn btn-primary">Change state data</button>
                <hr/>
                
                {/* <ChildComp name="Sathish" sal={8798464}/> */}
                <ChildComp name={empName} sal={empSal} manageState={this.Employee}/>
                <MyPureComp empName={empName}/>
                <hr/>
                <MyMemoComp empName={empName}/>
            </div>
        )
    }

}
export default ParentComp;