import React,{Component} from "react";

import whatsapp from '../assets/whatsapp.jfif';
import sumo from '../assets/sumo.jfif';
import safari from '../assets/safari_car.jfif';
import harrier from '../assets/Harrirer.jfif';
class MultipleImgComp extends Component{
    

    constructor(){
        super();

        this.state={
            imgpic1:sumo,
            imgpic2:safari,
            imgpic3:harrier,
            imgpic4:whatsapp,
            button:0
        }

    }
    
    
    toggleImage = (value) => {
        if(value===1){
            this.setState((prevState) => ({
                imgpic1: prevState.imgpic4
            }))
        }
        else if(value===2){
            this.setState((prevState) => ({
                imgpic1: prevState.imgpic2
            }))
        }
        else if(value===3){
            this.setState((prevState) => ({
                imgpic1: prevState.imgpic3
            }))
        }
        else if(value===4){
            this.setState((prevState) => ({
                imgpic1: sumo
            }))
        }
        
    };


            

    


    render() {
        return(
            <div>
                <h2>This is Toggle Image Class Component</h2>
                <div>
                    <img src={this.state.imgpic1} alt="sumo" style={{width:"100px",height:"sumo"}}></img>
                </div>
                <button type="button" onClick={()=>this.toggleImage(1)}>whatsapp</button>
                <button type="button" onClick={()=>this.toggleImage(2)}>safari</button>
                <button type="button" onClick={()=>this.toggleImage(3)}>harrier</button>
                <button type="button" onClick={()=>this.toggleImage(4)}>sumo</button>

            </div>
        )
        }

    }


export default MultipleImgComp;