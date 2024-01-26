import React from 'react';
import '../App.css';

export const NavBar = () => {
    return(
        <>
            <nav className="nav">
                <h2 className='nav-name'>Nicholas Curwood</h2>
                <div className='nav-buttons'>
                  <button>About Me</button>
                  <button>Projects</button>
                  <button>Contact</button>
                </div>
            </nav>
        </>
    );
};
