import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "react-intersection-observer";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsChatTextFill } from "react-icons/bs";
import "./Contacts.css";

export function Contacts() {
  // Form reference for email services
  const form = useRef();
  const [buttonText, setButtonText] = useState("Send Message");
  const [isSending, setIsSending] = useState(false);

  // Intersection Observer for fade-in effect
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true); // Prevent multiple clicks
    setButtonText("Sending...");

    emailjs
      .sendForm("service_fz2i7n9", "template_xp4lmar", form.current, "s_ZagL9DtEGBZK2TZ")
      .then(
        () => {
          setButtonText("Message Sent!");
          console.log("SUCCESS!");

          setTimeout(() => {
            setButtonText("Send Message");
            setIsSending(false); // Allow another submission
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setButtonText("Failed to Send");

          setTimeout(() => {
            setButtonText("Send Message")
            setIsSending(false);
          }, 3000);
        }
      );

    e.target.reset();
  };

  // Functions for smooth fade-in effect
  const transitionStyle = {
    opacity: inView ? "1" : "0",
    transform: inView ? "translateY(0)" : "translateY(100px)",
    transition: "opacity 1.1s ease-out, transform 1.1s ease-out",
  };

  return (
    <div id="Contacts" className="contact" ref={ref}>
      <div style={transitionStyle}>
        <h1 className="contact-header">
          <div className="contact-header-number">04</div>
          <div className="contact-title">Contact</div>
        </h1>
        <div className="contact-body">
          <div className="contact-container">
            {/** Contact Options */}
            <div className="contact-options">
              <article className="contact-option">
                <MdOutlineEmail className="contact-option-icon" />
                <h4>Email</h4>
                <h5>nickcdub@gmail.com</h5>
                <a href="mailto:nickcdub@gmail.com" target="_blank" rel="noopener noreferrer">
                  Send a Message
                </a>
              </article>
              <article className="contact-option">
                <FaLinkedin className="contact-option-icon" />
                <h4>LinkedIn</h4>
                <h5>nicholas-curwood</h5>
                <a href="https://www.linkedin.com/in/nicholas-curwood-3a447322a/" target="_blank" rel="noopener noreferrer">
                  View LinkedIn Profile
                </a>
              </article>
              <article className="contact-option">
                <BsChatTextFill className="contact-option-icon" />
                <h4>SMS</h4>
                <h5>+18589005573</h5>
                <a href="sms:+18589005573" target="_blank" rel="noopener noreferrer">
                  Send a Text
                </a>
              </article>
            </div>
            {/** End of Contact Options */}

            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Your Full Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" cols="30" rows="7" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn-primary" disabled={isSending}>
                {buttonText}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
