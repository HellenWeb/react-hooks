import React from 'react'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper navbar blue lighten-2">
                <div className="container">
                    <a href="/" className="brand-logo"><FontAwesomeIcon style={{marginRight: 10}} icon={faReact} />Click</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">Home</a></li>
                        <li><a href="/main">Main</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;