import React from 'react'

import icon1 from '../../media/cultureicon1.png'

import icon2 from '../../media/cultureicon2.png'

import icon3 from '../../media/cultureicon3.png'



const Cards = (props) => {
    return (
        <div className="col-xs-12 col-sm-12 col-md-4 icons">
            <div className="card bg-transparent border-0 pe-5 ps-5 text-center">
                <div className="card-head">
                    <img src={props.img} alt="firsticon" />
                </div>
                <div className="card-title">
                    <h4 className="cardmission">{props.headtext}</h4>
                    <p className="cardtext">{props.titletext}</p>
                </div>
            </div>
        </div>
    )
}


const InsideSkull = () => {
    return (
        <div className="container">
            <div className="row icons pt-5 pb-5">
                <Cards img={icon1} headtext="Mission, Vision and Values" titletext="The Principles that guide the way we work and play" />
                <Cards img={icon2} headtext="Partnerships" titletext="Learn how Skullcandy is doing well by doing good" />
                <Cards img={icon3} headtext="Ambassadors" titletext="Meet the ambassadors that inspire us every day" />
            </div>
        </div>
    )
}

export default InsideSkull
