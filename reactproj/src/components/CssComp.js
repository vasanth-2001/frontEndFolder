import React from "react"
import './external.css'
import mymodule from "./mycss.module.css"
const CssComp = ()=>{
    let circle={
        width:true?"100px":"200px",
        height:true?"100px":"200px",
        borderRadius:"50%",
        border:false?"2px solid red" : "5px solid green",
        margin: auto
    }
    return (
        <div>
            {/* 1. use of internal css */}
            <h1 style={{color:'blue',backgroundColor :"aqua"}}>This is Css Componenet</h1>
            <p style={circle}>Hello</p>
            {/* 2. use of external css  */}
            <div className="txtPrimary"> Hello vimal</div>
            <div className="txtDanger"> Hello Vicky</div>
            {/* 3.use of module css */}
            <div className={mymodule.special}>Hello</div>


        </div>
    )
}
export default CssComp;