import React, { useState } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Intro } from './components/Intro';
import { AboutMe } from './components/AboutMe';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Contacts } from './components/Contacts';


function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <NavBar />
            <Intro />
            <AboutMe />
            <Projects />
            <Certifications />
            <Contacts />
            <p className="read-the-docs">
                A Vite and React app created by Nicholas Curwood
            </p>
        </>
    );
}

export default App;