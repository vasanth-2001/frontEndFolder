import React from "react";

const MyMemoComp=(props)=>{
    console.log('memo-comp render');
    return(
        <div>
            <p>{props.empName}</p>
        </div>
    )
    
}
export default MyMemoComp;