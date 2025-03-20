import {motion, useScroll, useTransform} from "framer-motion";
import Typewriter from 'typewriter-effect';
import React, {useRef, useEffect} from "react";
import Mt3 from '../assets/img/Mt3.svg';
import City from '../assets/img/Seattle.svg'
import './Intro.css';

export function Intro(){
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })


    const spaceY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
    const cityY = useTransform(scrollYProgress, [0, 1], ["100%", "20%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["-30%", "200%"]);
    
    return(
        <div 
            ref={ref}
            className="intro"
            id='Intro'
        >
            <motion.h1 className="intro-text" style={{
                y:textY,
                }}>
                <Typewriter 
                    options={{
                        autoStart: true,
                        loop: true,
                        delay: 40,
                        strings: [
                            "Hello, my name is Nick",
                            "It's nice to meet you!",
                            "Welcome to my Portfolio!",
                            "Please take a look around!",
                            "Drop an email and say hello!"
                        ]              
                    }}
                />
            </motion.h1>

            <div className="intro-img">
                <div className="intro-img1"
                    style={{
                        backgroundImage: `url(${City})`,
                        backgroundPosition: 'bottom',
                        backgroundSize: 'cover',
                        position: 'absolute',
                        inset: 0,
                        y: cityY
                }}/>
                <div className="intro-img3" 
                style={{
                    /*backgroundColor: "red",*/
                    backgroundPosition: 'bottom',
                    backgroundSize: 'cover',
                    position: 'absolute',
                    inset: 0,
                    y: spaceY
                }}/>
            </div>

        </div>
    )
}