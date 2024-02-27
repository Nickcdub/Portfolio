import React, {useState, useRef} from "react";
import { useInView } from 'react-intersection-observer'; 
import download from "../assets/img/Download.svg"
import dl1 from '../assets/img/download-pics/AWSCloudPractitioner.png'
import dl2 from '../assets/img/download-pics/CompTIASecurity+.png'
import cert1 from '../assets/img/AWSCloudPractitioner.svg'
import cert2 from '../assets/img/CompTIASecurity+.svg'
import logo1 from '../assets/img/CloudPractitioner.svg';
import logo2 from '../assets/img/Security+.svg';
import './Certifications.css';

const Certs = [
    {
        front: <img src={logo1}/>,
        back: <img src={cert1}/>
    },
    {
        front: <img src={logo2}/>,
        back: <img src={cert2}/>
    }
]

export function Certifications() {

    //For "Fade In" affect on components
    const { ref, inView } = useInView({
        threshold: 0.5, // Trigger when 10% visible
        triggerOnce: true // Trigger animation once
    // use {inView && ( <></> )} Don't forget in parent ref={ref} 
    });

//Functions to style smooth rendering once in view----------------------------------------------------------------
    function hiddenStyle() {
        return {
            opacity: '0',
            transform: 'translateY(100px)',
            transition: 'opacity 1.1s ease-out, transform 1.1s ease-out'
        };
    }

    function visibleStyle() {
        return {
            opacity: '1',
            transform: 'translateY(0)',
            transition: 'opacity 1.1s ease-out, transform 1.1s ease-out' // Ensure transition applies to both states
        };
    }

    const transitionStyle = inView ? visibleStyle() : hiddenStyle();

    return(
        <div id='Certifications' className='cert' ref={ref}>
            <div style={transitionStyle}>
                <h1 className='cert-header'>
                    <div className='cert-header-number'>
                        03
                    </div>
                    <div className='cert-title'>
                        Certification
                    </div>
                    <div className="cert-body">
                        {Certs.map((cert, index) => (
                            <FlipCard key={index} cert={cert} />
                        ))}
                    </div>
                </h1>
            </div>
        </div>
    );
}

// Define FlipCard as a proper React functional component
const FlipCard = ({ cert }) => {
    const [activeCard, setActiveCard] = useState(false);

    return (
        <div className={`card ${activeCard ? 'cardFlip' : ''}`}
            onClick={() => setActiveCard(!activeCard)}>
            <div className="card-front">
                {cert.front}
            </div>
            <div className="card-back">
                {cert.back}
            </div>
        </div>
    );
};
