import React, { useState } from 'react';
import './NavBar.css';

export const NavBar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return(
        <>
            <nav className="nav">
                <div className='nav-header'>
                    <h2 
                        className='nav-name'
                        onClick={() => document.getElementById('Intro').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Nicholas Curwood</h2>
                    <button 
                        className={`nav-toggle ${isNavExpanded ? 'active' : ''}`}
                        onClick={() => setIsNavExpanded(!isNavExpanded)}
                    >☰</button>
                </div>
                <div className={`nav-buttons ${isNavExpanded ? 'active' : ''}`}>
                    <button onClick={() => document.getElementById('About').scrollIntoView({ behavior: 'smooth' })}>
                        About Me
                    </button>
                    <button onClick={() => document.getElementById('Projects').scrollIntoView({ behavior: 'smooth' })}>
                        Projects
                    </button>
                    <button onClick={() => document.getElementById('Certifications').scrollIntoView({ behavior: 'smooth' })}>
                        Certifications
                    </button>
                    <button onClick={() => document.getElementById('Contacts').scrollIntoView({ behavior: 'smooth' })}>
                        Contact
                    </button>
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
