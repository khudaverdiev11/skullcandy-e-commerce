import React, { useEffect } from 'react'
import Photo1 from '../../media/mainphoto1.jpg'
import Photo2 from '../../media/mainphoto2.jpg'
import Photo3 from '../../media/mainphoto3.jpg'

import Aos from "aos";
import "aos/dist/aos.css"


const MainContainer =()=> {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, []);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-xs-12 col-md-8 col-lg-8 firstcol" data-aos="fade-right">
                        <img src={Photo1} className="firstphoto" alt="firstphotonotfound" />
                        <div className="firstphotocontent">
                            <h1 className="photo1head">ART WITH A PURPOSE</h1>
                            <p className="photo1paragraph">With its positive, playful vibe, Hannah Eddy's fun illustration reminds us <br /> to keep our minds open and our planet safe.</p>
                            <a href="#" className="photo1button">SHOP EXCLUSIVE HESH® EVO</a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xs-12 col-md-4 col-lg-4 secondcol" data-aos="fade-left">
                        <div className="seconddiv">
                            <img src={Photo2} className="secondphoto" alt="secondphotonotfound" />
                            <div className="secondphotocontent">
                                <h6 className="photo2head">TRUE FREEDOM. AMPLIFIED</h6>
                                <a href="#" className="photo2content">Shop indy evo ~ </a>
                            </div>
                            <img src={Photo3} className="thirdphoto" alt="thirdphotonotfound" />
                            <div className="thirdphotocontent">
                                <h6 className="photo3head">YOUR LOST BUDS ARE <br /> JUST A CLICK AWAY</h6>
                                <a href="#" className="photo3content">Shop tile enabled products ~ </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default MainContainer
