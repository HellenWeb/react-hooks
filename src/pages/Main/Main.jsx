import React, { useState } from 'react';
import './main-style.scss'
import {Navbar} from '../../element-page/Navbar/Navbar'
import {Footer} from '../../element-page/Footer/Footer'
import { faMouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export const Main = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="main__content">
                    <h1>{count}</h1>
                    <button onClick={() => setCount(count + 1)}>
                        Click
                    </button>
                    <div className="main__subtitle">
                        <img src="https://www.iconpacks.net/icons/2/free-click-icon-2384-thumb.png"></img>
                        <a>Clicks</a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Main;