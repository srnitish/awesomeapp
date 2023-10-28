import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
           <>
           <div className="container-full">
                <div className="row">
                    <div className="col">
                        <h3 className='text-start bg-black p-2 text-white'>Contact Form</h3>
                    </div>
                </div>
            </div>
           </>
        );
    }
}

export default Header;