import React, { useState } from 'react';
import './NavBar.css';

export const NavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return(
        <>
            <nav className="nav">
                <div className='nav-header'>
                    <h2 className='nav-name'>Nicholas Curwood</h2>
                    <button 
                        className={`nav-toggle ${isNavExpanded ? 'active' : ''}`}
                        onClick={() => setIsNavExpanded(!isNavExpanded)}
                    >☰</button>
                </div>
                <div className={`nav-buttons ${isNavExpanded ? 'active' : ''}`}>
                  <button>About Me</button>
                  <button>Projects</button>
                  <button>Certifications</button>
                  <button>Contact</button>
                </div>
            </nav>
        </>
    );
};

const DropDownProfile = () => {
    return (
        <div className='toggle-dropdown'>
            <ul>
                <li>About Me</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
