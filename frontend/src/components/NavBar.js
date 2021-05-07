import React from 'react'
import NavBarBackground from '/Users/paigekelly/flatiron/projects/cueme/frontend/src/images/nav-bar.png'


export default function NavBar() {
    return (
        <nav id="nav-bar">
            {/* <img id="nav-bar-background" src={NavBarBackground} alt="nav-bar"/> */}
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
}
