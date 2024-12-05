import React,{Component} from "react";
import safari from '../assets/safari_car.jfif';
import harrier from '../assets/Harrirer.jfif';

class ToggleImgComp extends Component{


    constructor(){
        super();

        this.state={
            imgpic1:safari,
            imgpic2:harrier,
            button:0
        }

    }
    
    
    toggleImage = () => {
        this.setState((prevState) => ({
            button: prevState.button + 1,
            imgpic1: prevState.button % 2 === 0 ? prevState.imgpic2 : safari
        }))
    };


            

    


    render() {
        return(
            <div>
                <h2>This is Toggle Image Class Component</h2>
                <div>
                    <img src={this.state.imgpic1} alt="safari" style={{width:"100px",height:"safari"}}></img>
                </div>
                <button type="button" onClick={()=>this.toggleImage()}>ToggleImage</button>

            </div>
        )
        }

    }


export default ToggleImgComp;