import React from 'react';
import CartWidget from '../cartWidget/CartWidget';
import "./NavBar.css"

const NavBar = () => {
    return <div className='container'>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid ">
                <a className="navbar" href="#">The Wine Cellar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" >
                        <li className="nav-item">
                            <a className="nav-link fs-4"  href="#">Tintos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-4" href="#">Blancos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-4" href="#">Espumosos</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link fs-4" href="#">Espirituosos</a>
                        </li>
                    </ul>
                </div>
                <div className='m-2'>
                    <CartWidget />
                </div>

            </div>

        </nav>
    </div>
}


export default NavBar;