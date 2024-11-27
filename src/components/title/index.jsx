import React from "react";
import "./style.css";

export default function Title({title,colorText}){
    return(
        <div className="text-h1" style={{color:colorText}}>{title}</div>
    )
}