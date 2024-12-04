import React, { Component } from "react";
class MyPureComp extends Component{
    render(){
        
        return(
            <div>
            <h1>Hello this is MypureComponent</h1>
            <p>{this.empName}</p>
            </div>
        )
    }
}
export default MyPureComp;