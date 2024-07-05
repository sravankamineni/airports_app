import React from 'react';
import './index.css';

const Sidebar = ({ onClick }) => {
    return (
        <div className="sidebar">
            <ul>
                <li onClick={() => onClick('HOME')}>HOME</li>
                <li onClick={() => onClick('DASHBOARD SERVICES')}>DASHBOARD SERVICES</li>
                <li onClick={() => onClick('AIRPORTS')}>AIRPORTS</li>
                <li onClick={() => onClick('VIDEOS')}>VIDEOS</li>
                <li onClick={() => onClick('OTHERS')}>OTHERS</li>
            </ul>
            
        </div>
    );
};

export default Sidebar;
