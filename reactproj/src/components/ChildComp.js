import React from "react";

const ChildComp=(props)=>{
    const {name,sal,manageState}=props;
    return (<div>
        <h1>This is Child Component</h1>
        {/* <div> Name : <strong>{props.name}</strong> Salary :<strong>{props.sal}</strong></div> */}
        {/* <h2 onMouseOver={props.manageState}>Change Data</h2> */}
        <div> Name : <strong>{name}</strong> Salary :<strong>{sal}</strong></div>
        <h2 onMouseOver={manageState}>Change Data</h2>
        </div>
    )
}

export default ChildComp;