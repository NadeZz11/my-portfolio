import React, {useState, useEffect} from "react";
import "./style.css"
import Title from "../../components/title";
import Slide_1 from "../../assets/images/img_music/DEF63642-5AD4-47D4-BB01-B93E6FE4D0AC.jpg"
import Slide_2 from "../../assets/images/img_music/182202.jpg"
import Slide_3 from "../../assets/images/img_music/182208.jpg"
import Slide_4 from "../../assets/images/img_music/405384790_362754906290480_7235279914494293582_n.jpg"
import Slide_5 from "../../assets/images/img_music/405378147_362754872957150_2221365173647836064_n.jpg"
import Slide_6 from "../../assets/images/img_music/407131656_362755006290470_3212634087845179304_n.jpg"
import Slide_7 from "../../assets/images/img_music/449314351_482487647650538_1029810081790690646_n.jpg"
import Slide_8 from "../../assets/images/img_music/441881814_465981712634465_2226150340545371546_n.jpg"



export default function Activities({refSection}){
    const slides = [Slide_1,Slide_2,Slide_3,Slide_4,Slide_5,Slide_6,Slide_7,Slide_8];
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(()=> {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        },3000);
        return () => clearInterval(interval);
    },[slides.length])

    return(
        <div ref={refSection} className="activities-container">
            <Title
                title={"ACTIVITIES"}
                colorText={"#FFF"}
            />
            <div className="activities-child">
                <section className="activities-img">
                    <div className="slider-wrapper">
                        <div className="slider">
                            <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="active-slide" />
                            {/* <img id="slide-1" src={Slide_1} alt="music img" />
                            <img id="slide-2" src={Slide_2} alt="music img" />
                            <img id="slide-3" src={Slide_3} alt="music img" />
                            <img id="slide-4" src={Slide_4} alt="music img" />
                            <img id="slide-5" src={Slide_5} alt="music img" />
                            <img id="slide-6" src={Slide_6} alt="music img" />
                            <img id="slide-7" src={Slide_7} alt="music img" />
                            <img id="slide-8" src={Slide_8} alt="music img" /> */}
                        </div>
                        
                    </div>
                </section>

                <div className="activities-text">Musician : Tenor Saxophone </div>
            </div>
            





        </div>
    )
}