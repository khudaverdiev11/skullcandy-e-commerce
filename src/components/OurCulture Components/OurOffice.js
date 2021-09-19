import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"

const OurOffice = (props) => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-7 pt-3 pb-3 office" data-aos="fade-right">
                    <img src={props.img} alt="photo not found" />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-5 pt-3 pb-3 col-lg-5 text" data-aos="fade-left">
                    <p className="officetext ps-4 pe-4">Our office in Park City, Utah, proudly sits in the heart of the Wasatch Mountains at exactly 6,434 feet. Since we’re the kind of people who tend to be inspired by skyscrapers of the natural variety, we can think of no better place to work</p>
                </div>
            </div>
        </div>
    )
}

export default OurOffice
