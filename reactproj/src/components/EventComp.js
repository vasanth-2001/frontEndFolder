import React, { Component } from "react";

class EventComp extends Component{
    greeting=()=>{
        window.alert("Hello EveryOne");
    }
    welcome = (...std)=>{
        window.alert(`Welcome you ${std}`);
    }
    render(){
        return(
            <div>
                <h2>
                    This is Event Component
                </h2>
                <button type="button" onClick={()=>this.greeting()}>call greeting</button>
                <button type="button" onClick={()=>this.welcome("vasanth","Nirmal","Nithish")}>call Welcome</button>
                {/* <h2 onMouseOver={()=>this.welcome("vasanth","Nirmal","Nithish")}>Hover on me to call welcome</h2> */}
            </div>
        )
    }
}
export default EventComp;