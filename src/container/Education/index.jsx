import React from "react";
import "./style.css"
import Title from "../../components/title";
import LogoSCC from "../../assets/images/Logo_SCC.jpg"

export default function Education({refSection}) {
    return(      
        <div ref={refSection} className="education-container">
            <Title 
                    title={"EDUCATION"}
                    colorText={"#fdd741"}
            />
            <div className="education-img">
                <img src={LogoSCC} alt="logoScc" />

            </div>
            <div className="education-text">
                    <div >Santa Cruz Convent School</div>
                    <div >
                        <div >M.1-M.3 GPAX: 3.65</div>
                        <div >M.4-M.6 GPAX: 3.5</div>
                    </div>
                </div>
            
        </div>
        
    )
}
