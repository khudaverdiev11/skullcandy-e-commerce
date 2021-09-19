import React, { useEffect } from 'react'
import MainContainer from './Home Components/MainContainer';
import TrendingNow from './Home Components/TrendingNow';
import CultureSection1 from './OurCulture Components/CultureSection1';
import InsideSkull from './OurCulture Components/InsideSkull';
import photodivhome from '../media/photosection.jpg';
import GetInTouch from './Home Components/GetInTouch';




const Home = () => {
    return (
        <div>
            <MainContainer />
            <TrendingNow />
            <CultureSection1
             img={photodivhome}
             head="SHOP OUR HQ STORE" 
             text="6301 North Landmark Drive" 
             text2="Park City, Utah 84098" />
            <InsideSkull />
            <GetInTouch />
        </div>
    )
}

export default Home


