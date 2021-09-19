import React, { Component } from 'react'

class Buttons extends Component {
    render() {
        return (
            <div className="col-md-3 p-3 socialmedia">
                <h6>HEAR IT FIRST</h6>
                <p>Exceptional quality. Ethical factories. Sign up to enjoy free U.S. shipping and returns on your first order.</p>
                {/* <input type="email" placeholder="Sign up for emails" /> */}
                <button>Subscribe</button>
            </div>
        )
    }
}

export default Buttons
