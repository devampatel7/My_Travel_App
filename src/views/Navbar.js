import React from 'react';
import ReactDom from 'react-dom';
import './Navbar.css'

const Navbar = () => {
    return(
        <div className="head">
            <nav>
                <a href="" className="logo">Home</a>
                <a href="">About Us</a>
                <a href="">Services</a>
                <a href="">Contact</a>
                <a href="" id="login">Login</a>
            </nav>


        
        </div>
    )
}

export default Navbar;