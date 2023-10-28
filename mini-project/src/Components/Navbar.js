import React from 'react';

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg nav-pad justify-content-between align-items-baseline" style={{backgroundColor: props.mode==="black"?"#eee":"gray"}} >
                {/* <div className="container"> */}
                    {/* <div className='row'> */}
                    {/* <div className='col-md-10 d-flex'> */}
                    <a className={`navbar-brand text-${props.mode==="black"?"black":"white"}`}>{props.title}</a>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className={`nav-link active text-${props.mode==="black"?"black":"white"}`}  aria-current="page">Home</a>
                        </li>
                    </ul>
                    
                    </div>
                    {/* </div> */}

                    <div className='col-md-2 pr-20'>
                    <div className="form-check form-switch switch-wd">
                <input onClick={props.switchMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className={`form-check-label text-${props.mode==="black"?"black":"white"}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
                    </div>

                    {/* </div> */}
                {/* </div> */}
                
            </nav>
        </div>
    );
}

export default Navbar;