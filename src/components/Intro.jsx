import {motion, useScroll, useTransform} from "framer-motion";
import Typewriter from 'typewriter-effect';
import React, {useRef, useEffect} from "react";
import Mt1 from '../assets/img/Mt1.svg';
import Mt2 from '../assets/img/Mt2.svg';
import Stars from '../assets/img/Stars.svg';
import Mt3 from '../assets/img/Mt3.svg';
import './Intro.css';

export function Intro(){
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const spaceY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
    const hillY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
    const starsY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["-30%", "200%"]);

    return(
        <div 
            ref={ref}
            className="intro"
        >
            <motion.h1 className="intro-text" style={{y:textY}}>
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
                            "I'm a Software Engineer."
                        ]
                    }}
                />
            </motion.h1>

            <div className="intro-img">
                <motion.div className="intro-img1" 
                style={{
                    backgroundImage: `url(${Mt1})`,
                    backgroundPosition: 'bottom',
                    backgroundSize: 'cover',
                    position: 'absolute',
                    inset: 0,
                    y: hillY
                }}/>
                <motion.div className="intro-img2" 
                style={{
                    backgroundImage: `url(${Mt2})`,
                    backgroundPosition: 'bottom',
                    backgroundSize: 'cover',
                    position: 'absolute',
                    inset: 0
                }}/>
                <motion.div className="intro-img3" 
                style={{
                    backgroundImage: `url(${Stars})`,
                    backgroundPosition: 'bottom',
                    backgroundSize: 'cover',
                    position: 'absolute',
                    inset: 0,
                    y: starsY
                }}/>
                <div className="intro-img4" 
                style={{
                    backgroundImage: `url(${Mt3})`,
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