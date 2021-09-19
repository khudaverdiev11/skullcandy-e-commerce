import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"

const CultureSection1 = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
    return (
        <div className="container-fluid p-0" data-aos="fade-up">
            <img src={props.img} alt="photo not found" className="w-100 d-block" />
            <div className="contenttext ">
                <h1 className="sectionhead">{props.head}</h1>
                <p className="sectionparagraph">{props.text}<br></br>{props.text2}</p>
            </div>
        </div>
    )

}

export default CultureSection1
