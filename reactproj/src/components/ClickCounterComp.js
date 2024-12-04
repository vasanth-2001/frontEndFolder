import React, { Component } from 'react'
import MyHocComp from './MyHocComp';
class ClickCounterComp extends Component {
//     constructor(){
//         super();
//         this.state={
//             count:0
//         }
//     }
//   count =()=>{
//         this.setState({count:this.state.count+1});
        
//     }
  render() {
    return (
      <div>
        <h2>This is click counter ccomponent</h2>
        {/* <p>Counter value is : <strong>{this.state.count}</strong></p> */}
        {/* <button type='button' className='btn btn-primary' onClick={()=>this.count()}>count</button> */}
        <p>Counter value is :<strong>{this.props.count}</strong></p>
        <button type='button' className='btn btn-primary' onClick={this.props.incrementCounter}>counter ++</button>
        
      </div>
    )
  }
}

export default MyHocComp(ClickCounterComp,5) 
