import React, { Component } from 'react';
import logo from "../../media/Skullcandy Logo-1.svg";
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Navbar = () => {
    const { totalItems } = useCart();
    return (
        <header >
            <nav className="navbar navbar-expand-lg ec-nav">
                <div className="container">
                    <img className="navbar-brand" src={logo} width='180' />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-auto ms-3 mb-2 mb-lg-0 ">
                                <Link to="/" className="nav-link active" >Home</Link>
                            </li>
                            <li className="nav-item me-auto ms-3 mb-2 mb-lg-0 dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" aria-expanded="false">
                                    Shop
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li><Link to="/Earbuds" className="dropdown-item">Earbuds</Link></li>
                                    <li><Link to="/Headphones" className="dropdown-item">Headphones</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item me-auto ms-3 mb-2 mb-lg-0 ">
                                <Link to="/OurCulture" className="nav-link active" >Our Culture</Link>
                            </li>
                            <li className="nav-item me-auto ms-3 mb-2 mb-lg-0 ">
                                <Link to="/Contact" className="nav-link active" >Contact Us</Link>
                            </li>
                        </ul>
                        <form className="d-flex align-items-center">
                            <i className="fas fa-search me-3 ms-3 mb-2 mb-lg-0 "></i>
                            <ul className="navbar-nav me-3 ms-3 mb-2 mb-lg-0 ">
                                <i className="far fa-user"></i>
                            </ul>
                            <Link to="/Cart"><i className="fas fa-shopping-bag me-3 ms-3 mb-2 mb-lg-0 p-2"> <span>{totalItems} items</span> </i></Link>
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
