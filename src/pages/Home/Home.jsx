import React from 'react'
import './home-style.scss'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Navbar} from '../../element-page/Navbar/Navbar'
import {Footer} from '../../element-page/Footer/Footer'

export const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="intro">
                    <div className="intro__title">
                        <img className="intro__img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"></img>
                        <h1>App</h1>
                    </div>
                    <p className="intro__subtitle">prod. by Hellen</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}