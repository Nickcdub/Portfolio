import React, {useState} from 'react';
import { useInView } from 'react-intersection-observer'; 
import Profile from '../assets/img/Profile.svg'
//For rendering as components come in view
import './AboutMe.css'

const personal = "Hello, my name is Nick, I am a passionate problem solver and aspiring Software "
+"Engineer. I began solving problems through software"
+" after discovering the tediousness of balancing chemical equations in high school chemistry."
+" From there, I didn’t wait for the opportunity to strike me, I decided that in class or not, "
+"I wanted to learn more about leveraging software tools and languages to solve problems. Since "
+"then, I have graduated from the University of Washington with a Bachelor's of Science in Computer "
+"Science and Systems. I’ve learned so much since that first print(“Hello World!”) "
+"and I am excited to find an opportunity to put my knowledge towards solving meaningful problems"+
" (beyond high school chemistry)."

const education = "Education"

const skills = "Skills"

export function AboutMe() {
    //For the Carousel indeces
    const [activeIndex, setActiveIndex] = useState(0)
    
    //The text items to be displayed for each Carousel index
    const items = [personal, personal, personal]
    
    //For "Fade In" affect on components
    const { ref, inView } = useInView({
        threshold: 0.5, // Trigger when 10% visible
        triggerOnce: true // Trigger animation once
        // use {inView && ( <></> )} Don't forget in parent ref={ref} 
      });


//Carousel ---------------------------------------------------------------

      const Carousel = () => {
        return(
            <div className='carousel' ref={ref}>
                {inView && (
                <div className='carousel-inner'
                style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                     {items.map((item, index) => (
                        <div className="carousel-item" key={index}>
                            {item}
                        </div>
                    ))}
                </div>
                )}
            </div>
        );
    }

//Function to style the buttons ----------------------------------------------

    function getButtonStyle(index){
        return{
            background: activeIndex === index ? 'linear-gradient(to right, blue, magenta)' : 'transparent',
            color: activeIndex === index ? 'white' : 'initial',
            padding: '10px 10px', // Adjust padding to make the background appear "smaller"
            borderRadius: '20px', // Increase border-radius for more rounded corners
            borderColor: 'white',
            
        }
    }

//Functions to style smooth rendering once in view
    function hiddenStyle() {
        return {
            opacity: '0',
             transform: 'translateY(70px)',
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

//About Me -------------------------------------------------------------------

    return(
        <div id='About' className='about' ref={ref}>
            <div style={transitionStyle}>
            <h1 className='about-header'>
                    <>
                        <div className='about-header-number'>
                            01
                        </div>
                        <div className='about-title'>
                            About Me
                        </div>
                    </>
            </h1>
            <div className='about-body' ref={ref}>
                {inView && (<img src={Profile} className="about-profile"/>)}
                <span className='about-text'>
                    {Carousel()}
                </span>
            </div>
            {inView && (
            <div className='about-toggle'>
                <button className='about-toggle-personal'
                    style={getButtonStyle(0)}
                    onClick={() => setActiveIndex(0)}>
                        Personal
                </button>
                <button className='about-toggle-education'
                    style={getButtonStyle(1)}
                    onClick={() => setActiveIndex(1)}>
                        Education
                </button>
                <button className='about-toggle-skills'
                    style={getButtonStyle(2)}
                    onClick={() => setActiveIndex(2)}>
                        Skills
                </button>
            </div>
            )}
            </div>
        </div>
    );
}

