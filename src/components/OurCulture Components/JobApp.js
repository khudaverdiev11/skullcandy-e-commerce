import React, { Component } from 'react'

class JobApp extends Component {
    render() {
        return (
            <div className="container-fluid p-0 pb-5 text-center">
                <img src={this.props.img} alt="photo not found" className="w-100 d-block mb-4" />
                <button type="button" className="btn btn-light ps-5 pe-5 pt-2 pb-2" style={{borderRadius:'0'}}>BROWSE CAREERS</button>
            </div>
        )
    }
}

export default JobApp
