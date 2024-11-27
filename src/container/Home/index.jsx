// import React from "react";
import React, { useRef } from "react";
import "./style.css"
import ImgProfile from "../../assets/images/S__184762397.jpg"

export default function Home({refSection,refAbout}) {
    
    function onClickMenu(ref){
        ref.current.scrollIntoView({behavior: "smooth"})
    }
    return(
    <div ref={refSection}>
        <div className="home-container">
            <div className="home-text">
                <p style={{display : "flex",gap :"10px"}}>
                    <div>Hi, I'm </div>
                    <b style={{textShadow : "#cbd8f0 0em 0.1em 0.1em"}}>Siripattana</b>
                </p>
                <div>Welcome to my portfolio</div>
                
                <button onClick={() => onClickMenu(refAbout)}>About Me</button>
            </div>
            <img src={ImgProfile} alt="S__184762397" className="img-profile"  />
            
        </div>
        
    </div>
        


    )
}
