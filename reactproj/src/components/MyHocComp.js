import React, { Component } from 'react'


const MyHocComp = (WrapperComp,val)=> {
    class Hoc extends Component{
        constructor(props) {
          super(props)
        
          this.state = {
             count:0
          }
        }
        incrementCounter=()=>{
            // this.setState({count:this.state.count+1});
            this.setState((prevState)=>({count:prevState.count+val}));
        }

        render(){
            return <WrapperComp count={this.state.count} incrementCounter={this.incrementCounter}></WrapperComp>
        }
    }
    
  return Hoc;
}


export default MyHocComp