import React, {useEffect} from 'react'


import Aos from "aos";
import "aos/dist/aos.css"


const GetInTouch = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
    return (
        <div>
            <div className="middle">
                <h3 data-aos="zoom-in">Get In Touch</h3>
                <a className="btn facebook" data-aos="fade-up" href="#">
                    <i className="fab fa-facebook-f" />
                </a>
                <a className="btn twitter" data-aos="fade-up" href="#">
                    <i className="fab fa-twitter" />
                </a>
                <a className="btn google" data-aos="fade-up" href="#">
                    <i className="fab fa-google" />
                </a>
                <a className="btn instagram" data-aos="fade-up" href="#">
                    <i className="fab fa-instagram" />
                </a>
                <a className="btn youtube" data-aos="fade-up" href="#">
                    <i className="fab fa-youtube" />
                </a>
            </div>
        </div>
    )
}

export default GetInTouch
