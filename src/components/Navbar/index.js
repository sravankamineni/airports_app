import React from 'react';

import { Avatar } from '@react-spectrum/avatar';
import {defaultTheme, Provider } from '@adobe/react-spectrum';

import './index.css';


const Navbar = ({ onToggleSidebar }) => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-title">hava havai</div>
                <div className='nav-right'>
                    <button className="toggle-button" onClick={onToggleSidebar}>☰</button>
                    <Provider theme={defaultTheme}>
                        <Avatar
                            src="https://res.cloudinary.com/dnmcjyigq/image/upload/v1720104297/Avatar_-_Desktop_-_Light_du0jji.png"
                            alt="default Adobe avatar"
                            size={50}
                        />
                    </Provider>
                   
                  

                </div>
                

            </nav>
           

        </>


    );
};

export default Navbar;
