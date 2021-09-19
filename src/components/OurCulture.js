import React, { Component } from 'react';
import culturephoto1 from '../media/ourculturefirst.jpg';
import culturephoto2 from '../media/ourculturesecond.jpg';
import culturephoto3 from '../media/ourculturethird.jpg';
import outside from '../media/outside.jpg';
import job from '../media/jobapplication.jpg';

import CultureSection1 from './OurCulture Components/CultureSection1';
import OurOffice from './OurCulture Components/OurOffice';
import OurBrand from './OurCulture Components/OurBrand';
import JobApp from './OurCulture Components/JobApp';
import InsideSkull from './OurCulture Components/InsideSkull';

class OurCulture extends Component {
    render() {
        return (
            <div >
                <CultureSection1 img={culturephoto1}/>
                <OurOffice img={culturephoto2}/>
                <CultureSection1 img={outside}/>
                <OurBrand img={culturephoto3}/>
                <JobApp img={job}/>
                <InsideSkull />
            </div>
        )
    }
}

export default OurCulture
