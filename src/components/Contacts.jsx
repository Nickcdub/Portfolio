import React, {useState, useRef} from "react";
import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedin } from "react-icons/fa";
import { BsChatTextFill } from "react-icons/bs";
import './Contacts.css';

export function Contacts() {
//For email services----------------------------------------------------------------------------------------------
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_fz2i7n9', 'template_xp4lmar', form.current, {
            publicKey: 's_ZagL9DtEGBZK2TZ',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };



     //For "Fade In" affect on components
     const { ref, inView } = useInView({
        threshold: 0.5, // Trigger when 10% visible
        triggerOnce: true // Trigger animation once
    // use {inView && ( <></> )} Don't forget in parent ref={ref} 
    });

//Functions to style smooth rendering once in view------------------------------------------------------------------------------------------------------------------
    
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
        <div id="Contacts" className="contact" ref={ref}>
            <div style={transitionStyle}>
                <h1 className='contact-header'>
                    <div className='contact-header-number'>
                        04
                    </div>
                    <div className='contact-title'>
                        Contact
                    </div>
                </h1>
                <div className="contact-body">
                    <div className="contact-container">
                        {/** Contact Options */}
                        <div className="contact-options">
                            <article className="contact-option">
                                <MdOutlineEmail className="contact-option-icon"/>
                                <h4>Email</h4>
                                <h5>nickcdub@gmail.com</h5>
                                <a href="mailto:nickcdub@gmail.com" target="_blank">Send an Message</a>
                            </article>
                            <article className="contact-option">
                                <FaLinkedin className="contact-option-icon"/>
                                <h4>LinkedIn</h4>
                                <h5>nicholas-curwood</h5>
                                <a href="https://www.linkedin.com/in/nicholas-curwood-3a447322a/" target="_blank">View LinkedIn Profile</a>
                            </article>
                            <article className="contact-option">
                                <BsChatTextFill className="contact-option-icon"/>
                                <h4>SMS</h4>
                                <h5>+18589005573</h5>
                                <a href="sms:+18589005573" target="_blank">Send a Text</a>
                            </article>
                        </div>
                        {/**End of Contact Options */}
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name='name' placeholder="Your Full Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                            <textarea name="message" cols="30" rows="7" placeholder="Your Message" required></textarea>
                            <button type="submit" className="btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}