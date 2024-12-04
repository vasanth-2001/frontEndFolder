import React, { Component } from 'react'
import MyHocComp from './MyHocComp';

class HoverCounterComp extends Component {
//     constructor(){
//         super();
//         this.state={
//             count:0
//         }
//     }
//   hoverCount =()=>{
//         this.setState({count:this.state.count+1});
        
//     }

  render() {
    return (
      <div>
         <h2>This is hover counter component</h2>
         {/* <p>Counter value is : <strong></strong>{this.state.count}</p>
         <h2 onMouseOver={()=>this.hoverCount()}>hover onme to increment counter value</h2> */}
          <p>Counter value is :<strong>{this.props.count}</strong></p>
          <h2 onMouseOver={this.props.incrementCounter}>hover onme to increment counter value</h2>
      </div>
    )
  }
}
export default MyHocComp(HoverCounterComp,15)
