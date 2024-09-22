import React, {useState} from 'react';
import { useInView } from 'react-intersection-observer'; 
import { TextCarousel } from './Carousel'; 
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

const education = "Throughout my academic journey, I demonstrated my proficiency in utilizing a "+
"wide array of technologies effectively, from conception to deployment, crafting comprehensive "+
"full-stack applications. These experiences have deepened my technical expertise and enhanced my"+
" adaptability to various software environments. Beyond the technical aspects, my time at university"+
" was enriched by collaborating with multiple teams across dynamic settings. In these team endeavors,"+
" I frequently assumed a proactive role in organizing group activities and effectively delegating "+
"tasks. One of, if not the largest takeaway from my education was the importance of listening to "+
"and addressing my teammates' concerns with understanding and openness. This skill has not only "+
"improved our team dynamics but also significantly enhanced the quality of our collective work. "+
"By prioritizing empathy in our interactions, we were able to create a more inclusive, productive, "+
"and innovative environment."

const professional = (<div>
<h3>Security Analyst I | Transaction Network Services | Seattle, WA | 05/2024 - Present</h3>
<hr />
<br />
<ul>
  <li>•   AWS Security Assessments - Performed security assessments on AWS resources to ensure secure configurations of security groups, Kinesis
  data streams, and appropriate public Elastic IPs.</li>
  <br />
  <li>•   Software Request Reviews - Reviewed and evaluated software requests from the development team, gaining familiarity with development
  technologies, their capabilities, and potential vulnerabilities to ensure compliance with security policies.</li>
  <br />
  <li>•   Risk Management - Conducted access reviews identifying individuals with expired privileges and aggregated data on all users to optimize the
  access review process for future quarterly reviews.</li>
</ul>
<br />
<br />
<h3>Algorithms Grading Assistant | University of Washington | Tacoma, WA | 2023</h3>
<hr />
<br />
<ul>
  <li>•   Collaborated closely with Professor Chris Marriott in the TCSS 343 Algorithms course, efficiently evaluating and grading a class of 35 students</li>
  <br />
  <li>•   Software Request Reviews - Reviewed and evaluated software requests from the development team, gaining familiarity with development
  technologies, their capabilities, and potential vulnerabilities to ensure compliance with security policies.</li>
</ul>
</div>)

const skills = (<div>
<p>Many of my skill-building experiences happened throughout academic projects that challenged me to expand my understanding of various technologies. It was here that I really developed my skills in:</p>
<ul>
  <li>•   Core Languages: Java, C#, Python, JavaScript</li>
  <li>•   Development Principles: Object-Oriented and Dynamic Programming</li>
  <li>•   Data Management: SQL for database operations</li>
  <li>•   Backend Development: Understanding server-application-database interactions</li>
</ul>
<br />
<p>In addition, I also explored other topics in my free time. Most of these topics were meant to expand upon previous skills, however, I wasn’t afraid to begin learning completely new skills. These other topics include:</p>
<ul>
  <li>•   Full-Stack Development: Integrating front-end and back-end technologies</li>
  <li>•   Cloud Services: Leveraging Amazon Web Services for scalable solutions</li>
  <li>•   Web Technologies: Crafting interfaces with React, HTML, CSS</li>
  <li>•   Emerging Areas: Diving into IT Security Fundamentals and Machine Learning</li>
</ul>
</div>);

export function AboutMe() {
    //For the Carousel indeces
    const [activeIndex, setActiveIndex] = useState(0)
    
    //The text items to be displayed for each Carousel index
    const items = [personal, education, professional, skills]
    
    //For "Fade In" affect on components
    const { ref, inView } = useInView({
        threshold: 0.3, // Trigger when 10% visible
        triggerOnce: true // Trigger animation once
        // use {inView && ( <></> )} Don't forget in parent ref={ref} 
    });

//Function to style the buttons ----------------------------------------------

    function getButtonStyle(index){
        return{
            background: activeIndex === index ? 'linear-gradient(to right, magenta, rgb(63, 6, 161)' : 'transparent',
            color:'white',
            padding: '10px 10px', // Adjust padding to make the background appear "smaller"
            borderRadius: '20px', // Increase border-radius for more rounded corners
            borderColor: 'white',
            
        }
    }

//Functions to style smooth rendering once in view-------------------------------
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

//About Me -------------------------------------------------------------------

    return(
        <div id='About' className='about' ref={ref}>
            <div style={transitionStyle}>
                <h1 className='about-header'>
                    <div className='about-header-number'>
                        01
                    </div>
                    <div className='about-title'>
                        About Me
                    </div>
                </h1>
                <div className='about-content'>
                    <div className='about-body'>
                        <img src={Profile} className="about-profile"/>
                        <span className='about-text'>
                            <TextCarousel items={items} activeIndex={activeIndex}/>
                        </span>
                    </div>
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
                        <button className='about-toggle-professional'
                            style={getButtonStyle(2)}
                            onClick={() => setActiveIndex(2)}>
                                Professional
                        </button>
                        <button className='about-toggle-skills'
                            style={getButtonStyle(3)}
                            onClick={() => setActiveIndex(3)}>
                                Skills
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

