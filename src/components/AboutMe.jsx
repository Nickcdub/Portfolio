import React, {useState} from 'react';
import { useInView } from 'react-intersection-observer'; 
import { TextCarousel } from './Carousel'; 
import Profile from '../assets/img/Profile.svg'
//For rendering as components come in view
import './AboutMe.css'

const personal = "Hello, my name is Nick, I’m a curious problem solver with a passion for technology, "
+"engineering, and security. I first discovered my interest in software when I decided to automate "
+"the tedious process of balancing chemical equations in high school chemistry. From there, I didn’t "
+"wait for the opportunity to strike me, I decided that in class or not, I wanted to learn more about "
+"how I could leverage software to solve problems. Since then, I’ve earned a Bachelor of Science in "
+"Computer Science and Systems from the University of Washington and gained hands-on experience in "
+"both software development and cybersecurity. Whether I’m building applications or strengthening "
+"systems against risk, I enjoy working at the intersection of engineering and security — creating "
+"solutions that are not only functional but also resilient.";

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

const professional = (
  <div>
    <h3>Security Analyst I | Transaction Network Services | Seattle, WA | 05/2024 - Present</h3>
    <hr />
    <br />
    <p>
      In 2024, I joined Transaction Network Services as a Security Analyst I, where I focus on assessing enterprise software,
      managing risk, and supporting compliance initiatives across multiple frameworks. My work combines analytical thinking,
      secure system evaluation, and collaboration across engineering and compliance teams.
    </p>
    <br />
    <ul>
      <li>• Reviewed 300+ enterprise-wide software requests, ensuring compliance with internal security policies and identifying potential third-party risks.</li>
      <br />
      <li>• Authored TNS’ first AI Governance Policy to address emerging risks from generative AI and guide secure adoption practices.</li>
      <br />
      <li>• Aggregated and reconciled access control data across systems to support audits and align with NIST 800-53 Rev. 5, ISO 27001, and PCI DSS standards.</li>
      <br />
      <li>• Conducted malware analysis and threat detection in CrowdStrike sandbox environments, identifying communication-based attack vectors.</li>
      <br />
      <li>• Managed file integrity monitoring with Tripwire and maintained incident and risk tracking through Salesforce to ensure timely mitigation.</li>
      <br />
      <li>• Designed and launched phishing simulation campaigns in KnowBe4 to measure and improve employee security awareness.</li>
    </ul>

    <br />
    <br />

    <h3>Software Development Intern | Computing For All | Seattle, WA | 06/2025 - 08/2025</h3>
    <hr />
    <br />
    <p>
      As a Software Development Intern, I contributed to the design and implementation of a full-stack web application aimed
      at supporting independent living. I collaborated with a small team of developers to build secure, user-friendly features
      and improve development workflows through agile practices.
    </p>
    <br />
    <ul>
      <li>• Developed and integrated secure user authentication with HTTPS/TLS to protect user data and ensure safe communication.</li>
      <br />
      <li>• Coordinated team efforts by reviewing code contributions, resolving blockers, and helping manage sprint objectives.</li>
      <br />
      <li>• Presented the completed application to a panel of peers, highlighting design decisions, architecture, and implementation details.</li>
    </ul>
  </div>
);


const skills = (
  <div>
    <p>
      Over the course of my academic and professional experience, I’ve built a well-rounded technical foundation spanning software development, cybersecurity, and cloud infrastructure. 
      Many of my skills were developed through hands-on projects and professional roles that challenged me to think critically about how technology can be built and secured effectively.
    </p>
    <br />
    <ul>
      <li>•   Programming & Automation: Proficient in Java, Python, JavaScript, and C#, with experience applying code to automate workflows and enhance system reliability.</li>
      <li>•   Security & Compliance: Knowledge of NIST 800-53, ISO 27001, and PCI DSS frameworks; experienced in risk management, access control reviews, and file integrity monitoring.</li>
      <li>•   Cloud & Infrastructure: Familiar with AWS services (S3, EC2, Route 53, CloudFront) and principles of scalable, secure cloud design.</li>
      <li>•   Data & Systems: Understanding of SQL/NoSQL databases, data management, and system interactions between applications and backend services.</li>
      <li>•   Collaboration & Process: Experienced in Agile development, ticketing systems, and coordinating with cross-functional teams to deliver secure and reliable solutions.</li>
    </ul>
    <br />
    <p>
      Beyond formal training, I enjoy exploring new technologies and staying current with industry trends in areas such as secure software development, 
      emerging AI applications, and cybersecurity operations. My goal is to continue developing solutions that merge performance, scalability, and security.
    </p>
  </div>
);


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

