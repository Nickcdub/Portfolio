import React from 'react';
import Typewriter from 'typewriter-effect';
import './AboutMe.css'

const text1 = 
"Hello! I am Nicholas Curwood, a recent Computer Science graduate and aspiring Software Engineer. Growing up, I always enjoyed problem-solving, whether it involved tackling mathematical challenges or diving into a game of Sudoku; imagining logical solutions to complex problems was always an immensely gratifying experience. In time, I developed a passion for coding by implementing a rudimentary Python stoichiometry calculator for a high school chemistry class. After sharing it with some of my classmates, I discovered the unique satisfaction of getting to construct a solution to help myself and others overcome a problem."

const text2 =
"Studying computer science at the University of Washington, I was presented with many opportunities to grow my passion in software development. I applied various technologies, frameworks, and techniques such as Java, JavaScript, C#, Python, SQL, React, Agile practices, among others. I had the privilege of collaborating with diverse teams, where we adeptly employed agile methodologies to reach and occasionally exceed our ambitious objectives. Some of my accomplishments include:"

const list1 =
"Leading a team of three in developing a full-stack Java dungeon adventure game. We utilized the MVC"+
" architectural framework, used SQL for our database, and maintained version control with Git"

const list2 =
"Collaborating with a team of three to enhance a venture into artificial life. Employing JavaScript,"+
" HTML, and Python, we implemented and logged data to investigate the impact of binary vision on"+
" artificial predators"

const list3 =
"Applying Python to interact with the Keras API to research the effectiveness of Convolutional Neural"+
" Networks(CNN) vs. Bag of Words(BoW) for sentiment analysis. I recorded a 20% increase in effective"+
" identification for CNN over BoW"

const text3 =
"Immediately after graduation, I decided to pursue my AWS Cloud Practitioner Certification. At the time I knew that cloud was a great resource for deploying applications with agility to a global user base, but I wanted to learn a little more about the various services and business model. Once I had achieved my Cloud Practitioner Cert., I began to study for my CompTIA Security+ Certification. With cyberthreats becoming more prevalent within the digital world, knowledge of threats, vulnerabilities, and mitigation steps are an increasingly essential skill to maintain within all facets of the development process."

const text4 =
"Since achieving my Security+ and Cloud Practitioner Certs., I have continued to work on personal projects as well as dive into new topics surrounding emerging technologies. I hope to one day have the opportunity to use all that I’ve learned to make significant contributions towards meaningful goals in a dynamic setting."

export function AboutMe() {
    const blueColor = '#509DF9'//This hex color is for the color blue 
    const orangeColor = 'rgb(250, 106, 29)'


    return(
        <div id='About' className='about'>
            <h2 className='about-header'>
                {component('<','h1','>', orangeColor)}
                <div className='about-title'>
                    {textTyper("About Me",100)}
                </div>
                {component('</','h1','>', orangeColor)}
            </h2>
            <div className='about-body'>
                {component('<','span','>', orangeColor)}
                <span className='about-text1'>
                    {textTyper(text1,1)}
                </span>
                {component('</','span','>', orangeColor)}
                {component('<','span','>', orangeColor)}
                <span className='about-text2'>
                    {textTyper(text2,1)}
                </span>
                <div className='about-list'>
                    {component('<','ul','>', orangeColor)}
                    <ul className='about-text-list' style={{paddingLeft: '30px'}}>
                        <li>{textTyper(list1,1)}</li>
                        <li>{textTyper(list2,1)}</li>
                        <li>{textTyper(list3,1)}</li>
                    </ul>
                    {component('</','ul','>', orangeColor)}
                </div>
                {component('</','span','>', orangeColor)}
                {component('<','span','>', orangeColor)}
                <span className='about-text1'>
                    {textTyper(text3,1)}
                </span>
                {component('</','span','>', orangeColor)}
                {component('<','span','>', orangeColor)}
                <span className='about-text1'>
                    {textTyper(text4,1)}
                </span>
                {component('</','span','>', orangeColor)}

            </div>
        </div>
    );
}

//This 
function textTyper(text, delay){//Delay refers to speed, lower = faster
    return(
        <Typewriter
            onInit={(Typewriter) => {
            //Use <br /> for my new lines (\n)
                Typewriter
                .typeString(text)
                .start();
            }}
            options={{
                delay: delay,
            }}
        />
    );
}

function component(start, body, end, color){
    return (
        <div style={{
            display: 'flex'
        }}>
          {/* Render the less than sign */}
          <span className="angle-brackets">{start}</span>
          {/* Render the span text in blue */}
          <span className="span-text" style={{color: color, textShadow: "0 0 10px "+color}}>{body}</span>
          {/* Render the greater than sign */}
          <span className="angle-brackets">{end}</span>
        </div>
      );
}

