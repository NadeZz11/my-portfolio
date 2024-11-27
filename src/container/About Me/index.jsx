import React from "react";
import "./style.css"
import ImgAbout from "../../assets/images/S__184762400.jpg"
import Icon from "supercons";
import Title from "../../components/title";


export default function AboutMe({refSection}) {
    return(
        <div ref={refSection}className="about-container">
            <Title 
                title = {"ABOUT ME"}
                colorText = {"#c8dded"}
            />
            
            <div className="about-child">
                <div style={{background:"local"}}>
                    <img src={ImgAbout} alt="ImgAbout" className="img-about" />
                    <div  className="about-icon">
                        <a href="https://www.instagram.com/ed_aan/" target="_blank" rel="noopener noreferrer"><Icon glyph="instagram" size={42} className="icon"/></a>
                        <a href="https://www.facebook.com/profile.php?id=100020713662859&locale=th_TH" target="_blank" rel="noopener noreferrer"><Icon glyph="facebook" size={42} className="icon"/></a>
                        
                    </div>
                    
                </div>
                <div className="about-box-right" >
                    <div>NAME : Siripattana Wongkumpoo</div>
                    <div>NICK NAME : Nade </div>
                    <div>DATE OF BIRTH : 1 November 2006</div>
                    <div>NATIONALITY : Thai</div>
                    <div>PHONE : 061-704-4478</div>
                    <div>EMAIL : Siripattana2017@gmail.com</div>
                </div>
                    
            </div>
        </div>

    )
}
