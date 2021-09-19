import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
    return (
        <div className="container contactcon">
            <div className="row bg-transparent" data-aos="fade-right">
                <h1>Contact Us</h1>
            </div>
            <div className="row bg-transparent" data-aos="fade-left">
                <h4 style={{ textAlign: 'center' }}>We'd love to hear from you!</h4>
            </div>
            <div className="container-fluid bg-transparent d-flex justify-content-center">
                <div className="row input-container bg-transparent">
                    <div className="col-xs-12" data-aos="zoom-in">
                        <div className="styled-input wide align-center">
                            <input type="text" required />
                            <label>Name</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12" data-aos="fade-right">
                        <div className="styled-input">
                            <input type="text" required />
                            <label>Email</label>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12" data-aos="fade-left">
                        <div className="styled-input" style={{ float: 'right' }}>
                            <input type="text" required />
                            <label>Phone Number</label>
                        </div>
                    </div>
                    <div className="col-xs-12" data-aos="zoom-in">
                        <div className="styled-input wide">
                            <textarea required defaultValue={""} />
                            <label>Message</label>
                        </div>
                    </div>
                    <div className="col-xs-12" data-aos="fade-right">
                        <div className="btn-lrg submit-btn">Send Message</div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Contact
