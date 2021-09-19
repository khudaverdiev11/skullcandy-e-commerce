import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"

const OurBrand =(props)=> {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
        return (
            <div className="container-fluid">
                <div className="row pb-5">
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 pt-3 pb-3 text" data-aos="fade-right">
                        <p className="officetext ps-4 pe-4">We’re a diverse bunch at Skullcandy. Walk down any row of desks and you’ll run into the widest range of people you can imagine. From former professional athletes to aspiring filmmakers and band members. But no matter who we are individually, we’re all united by something bigger:<br></br><br></br>
                        Our passion for our brand and for each other.<br></br><br></br>
                        Here’s to the Skull.</p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 pt-3 pb-3 office" data-aos="fade-left">
                        <img src={props.img} alt="photo not found" />
                    </div>
                </div>
            </div>
        )
    
}

export default OurBrand