import React, { useEffect } from 'react';

import Photo1 from '../../media/trendingnow1.jpg';
import Photo1hover from '../../media/trendingnow1hover.jpg';

import Photo2 from '../../media/trendingnow2.jpg';
import Photo2hover from '../../media/trendingnow2hover.jpg';

import Photo3 from '../../media/trendingnow3.jpg';
import Photo3hover from '../../media/trendingnow3hover.jpg';

import Aos from "aos";
import "aos/dist/aos.css"


const Boxhover = () => {
    return (
        <div>
            <div className="viewdiv">
                <a className="quickview" href="">+ Quick View</a>
            </div>
        </div>
    )
}

const Mycolumns = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
    return (
        <>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 trend" data-aos="fade-right">
                <img src={Photo1} className="d-block w-100" id="firstcardphoto" alt="" />
                <img src={Photo1hover} className="d-block w-100" id="secondcardphoto" alt="" />
                <Boxhover />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 trend" data-aos="zoom-in">
                <img src={Photo2} className="d-block w-100" id="firstcardphoto" alt="" />
                <img src={Photo2hover} className="d-block w-100" id="secondcardphoto" alt="" />
                <Boxhover />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 trend" data-aos="fade-left">
                <img src={Photo3} className="d-block w-100" id="firstcardphoto" alt="" />
                <img src={Photo3hover} className="d-block w-100" id="secondcardphoto" alt="" />
                <Boxhover />
            </div>
        </>
    )
}


const TrendingNow = () => {
    return (
        <div className="container trending">
            <div className="row">
                <Mycolumns />
            </div>
        </div>
    )
}

export default TrendingNow
