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
    const hillY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
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
                        strings:[
                            "Hello, I am Nick",
                            "I am a Problem Solver",
                            "I am a Lifelong Learner",
                            "I am a Team Player",
                            "I am a Software Engineer."
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
                        y: hillY
                }}/>
                <div className="intro-img3" 
                style={{
                    backgroundColor: "black",
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