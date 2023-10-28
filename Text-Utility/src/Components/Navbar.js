import React from 'react';
import {Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-pad" style={{backgroundColor: props.mode==="black"?"#eee":"gray"}} >
                <div className="container">
                    <div className='row'>
                    <div className='col-md-7 d-flex'>
                    <Link className={`navbar-brand text-${props.mode==="black"?"black":"white"}`} to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link className={`nav-link active text-${props.mode==="black"?"black":"white"}`}  aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link text-${props.mode==="black"?"black":"white"}`} to="/About">About</Link>
                        </li>
                        {/* <li className="nav-item">
                        <Link className={`nav-link text-${props.mode==="black"?"black":"white"}`} to="#">Pricing</Link>
                        </li> */}
                    </ul>
                    </div>
                    </div>
                    </div>
                </div>
                <div className="form-check form-switch switch-wd">
                <input onClick={props.switchMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className={`form-check-label text-${props.mode==="black"?"black":"white"}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
            </nav>
        </div>
    );
}

export default Navbar;