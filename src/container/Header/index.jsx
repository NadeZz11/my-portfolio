import React from "react";
import "./style.css"

export default function Header({refHome,refAbout,refEducation,refActivities}) {
    function onClickMenu(ref){
        ref.current.scrollIntoView({behavior: "smooth"})
    }
    return(
            <div className="header-bar"> 
                <h3 className="header-child" onClick={() => onClickMenu(refHome)}>Home</h3>
                <h3 className="header-child" onClick={() => onClickMenu(refAbout)}>About Me</h3>
                <h3 className="header-child" onClick={() => onClickMenu(refEducation)}>Education</h3>
                <h3 className="header-child" onClick={() => onClickMenu(refActivities)}>Activities</h3>
                {/* <h3 className="header-child">Certificate</h3> */}
            </div>
        
    

    )
}
