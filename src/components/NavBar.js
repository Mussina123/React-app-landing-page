import React from "react"
import logo from '../images/React-logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src= {logo} 
            className="nav--icon" 
            alt='mainlogo' />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}