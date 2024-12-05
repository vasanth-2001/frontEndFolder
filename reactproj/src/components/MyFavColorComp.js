import React, { Component } from 'react'

 class MyFavColorComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         color:"Red"
      }
    }
    // static getDerivedStateFromProps(props){
    //     return {
    //         color:props.newColor
    //     }
    // }
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({color:"pink"})
    //     },2000)
    // }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById("beforeupdate").innerHTML=`Before update My favourite  color was:${prevState.color}`;
    }
    changecolor =()=>{
        this.setState({color:"Blue"});
    }
    componentDidUpdate(){
        document.getElementById("afterupdate").innerHTML=`after update My favourite  color is:${this.state.color}`;
    }
  render() {
    return (
      <div>
        <div>
        My Faviorate Color
        </div>
        <p>Color is : <strong>{this.state.color}</strong></p>
        <div id='beforeupdate'></div>
        <div id='afterupdate'></div>
        <button type='button' onClick={()=>this.changecolor()} className='btn btn-primary'>change color</button>
      </div>
    )
  }
}

export default MyFavColorComp