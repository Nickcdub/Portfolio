import React, { useState, Suspense } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Intro } from './components/Intro';

// Lazy load components that are not immediately visible
const AboutMe = React.lazy(() => import('./components/AboutMe').then(module => ({ default: module.AboutMe })));
const Projects = React.lazy(() => import('./components/Projects').then(module => ({ default: module.Projects })));
const Certifications = React.lazy(() => import('./components/Certifications').then(module => ({ default: module.Certifications })));
const Contacts = React.lazy(() => import('./components/Contacts').then(module => ({ default: module.Contacts })));

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="content-wrapper">
            <NavBar />
            <Intro />
            <Suspense fallback={<div className="loading">Loading...</div>}>
                <AboutMe />
                <Projects />
                <Certifications />
                <Contacts />
            </Suspense>
            <p className="read-the-docs">
                A Vite and React app created by Nicholas Curwood
            </p>
        </div>
    );
}

export default App;