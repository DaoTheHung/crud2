import React from "react";
import { useState } from "react";


const Render = (props) => {
  
    return (
        <div >
                  <div className="column1">
                    {props.checkClass ? (<div  className="style-column1 "></div>) : ("") }
                  </div>
                  <div >{props.month}</div>
        </div>
    )
}       



export default Render


