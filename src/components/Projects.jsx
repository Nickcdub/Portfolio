import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer'; 
import { ImageCarousel, ListCarousel } from "./Carousel";
import { IoIosDownload } from "react-icons/io";
import on from '../assets/img/radio-on.svg'
import off from '../assets/img/radio-off.svg'
import right from '../assets/img/right-arrow.svg'
import left from '../assets/img/left-arrow.svg'
import download from '../assets/img/Download.svg'
import link from '../assets/img/Link.svg'
import ragChatbotDownload from '../assets/img/download-pics/RAGChatbot.png'
import img1Download from '../assets/img/download-pics/RPG.png'
import img2Download from '../assets/img/download-pics/NLPFinalProjectPoster.png'
import img3Download from '../assets/img/download-pics/EvolutionData.png'
import img4Download from '../assets/img/download-pics/SudokuSolver.png'
import img5Download from '../assets/img/download-pics/EvolvingColors.png'
import img5 from '../assets/img/EvolvingColors.svg'
import img4 from '../assets/img/SudokuSolver.svg'
import img3 from '../assets/img/EvolutionData.svg'
import img2 from '../assets/img/NLPFinalProjectPoster.svg'
import img1 from '../assets/img/RPG.svg'
import './Projects.css'

//Added projects will automatically update the page.--------------------------------------------------------------------------------------------------------------------------------------------------
const projects = [
  {
    description: [
      "• Developed a Retrieval-Augmented Generation (RAG) system that enhances large language model capabilities by integrating domain-specific document knowledge",
      "• Implemented an efficient vector-based retrieval system capable of processing and searching large documents including PDFs with 11,000+ pages",
      "• Created a responsive chat interface that provides factual responses with cited sources, ensuring accountability and traceability of information",
      "• Engineered memory-efficient processing that handles large document collections through streaming and batched operations",
      "Technologies and Frameworks: Python, Flask, ChromaDB, LangChain, Hugging Face Embeddings, HTML/CSS/JavaScript, LM Studio"
    ],
    image: ragChatbotDownload, // Using the PNG as both the image and download since SVG is not available
    download: ragChatbotDownload,
    downloadName: "RAGChatbot.png",
    link: "https://github.com/Nickcdub/My_First_RAG_Model"
  },
  {
    description: ["• Collaborated in a 4-member team in enhancing an existing venture into artificial life, evolving a virtual predator's hunting capabilities through the implementation of focal vision",
                  "• Implemented enhancements using JavaScript and utilized Python for key performance analysis, improving simulation realism in order to mimic realistic hunting conditions",
                  "• Presented findings along with data to highlight the biological prerequisite knowledge, display the computational methods behind the solution, as well as future directions within the study.",
                  "Technologies and Frameworks: JavaScript, Python, SQL, Machine Learning, Git, HTML"],
    image: img3,
    download: img3Download,
    downloadName: "ArtificialLife.png",
    link: "https://nickcdub.github.io/Evolutionary_Robotic_Hunting_Gathering_BinocularVision/"
  },
  {
    description: ["• Conducted comparative research on Convolutional Neural Networks (CNN) versus Bag-of-Words (BoW) algorithms for sentiment analysis on X (Twitter) data, focused on the ethics of AI-generated art.",
                  "• Leveraged Python and the Keras API, achieving a 20% higher accuracy rate with CNN, demonstrating its superior efficacy in distinguishing sentiment within natural language",
                  "Technologies and Frameworks: Python, Keras API, Natural Language Processing, Machine Learning, Git"],
    image: img2,
    download: img2Download,
    downloadName: "NLPFinalProjectPoster.png",
    link: "https://github.com/Nickcdub/Sentiment_Analysis_Project"
  },
  {
    description: ["• Led a team of 3 to develop an intricate Java-based dungeon crawler game, featuring randomized layouts, diverse player classes, and a variety of enemies and bosses",
                  "• Adopted Agile methodologies such as Scrum and Continuous Integration to ensure rapid iteration progress while maintaining adaptability",
                  "• Resulted in a user-friendly and engaging game experience that exceeded expectations, coupled with robust technical documentation and evenly maintained code quality through bi-weekly code reviews",
                  "Technologies and Frameworks: Java, Git, SQL, Java Swing UI, Agile Methodologies, Object Oriented Programming (OOP), Model-View-Controller (MVC), Full-Stack Development"],
    image: img1,
    download: img1Download,
    downloadName: "RPG.png",
    link: "https://github.com/Nickcdub/mOOnQuest"
  },
  {
    description: ["• Gained practical experience through the development of a rudimentary Sudoku Solver using React, which served as a foundational project to deepen personal understanding of React's fundamentals.",
                  "• Expanded upon technical skills by locally hosting an API through Python, substituting backend computations and gaining valuable experience in the construction and management of API communications.",
                  "Technologies and Frameworks: React, JavaScript, HTML, CSS, Python, Git, Artificial Life"],
    image: img4,
    download: img4Download,
    downloadName: "SudokuSolver.png",
    link: "https://nickcdub.github.io/Sudoku_Solver/"
  },
  {
    description: ["• Constructed a closed virtual ecosystem consisting of artificial plants and animals that thrive or decline based on food and room for growth",
                  "• Developed a color mutation system to allow the continuation of each respective species (plants and 'animats') through natural selection",
                  "• Served as a foundation to my understanding of Javascript frontend as well as a predecessor to my work on the artificial life vision research",
                  "Technologies and Frameworks: JavaScript, HTML, CSS, Git, Artificial Life"],
    image: img5,
    download: img5Download,
    downloadName: "EvolvingColors.png",
    link: "https://nickcdub.github.io/Evolving_Colors/"
  },
];


export function Projects() {
//For the Carousel indeces (They will share indeces)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false);


//For "Fade In" affect on components
  const { ref, inView } = useInView({
    threshold: 0.4, // Trigger when 10% visible
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

//Function for creating radio buttons-------------------------------------------------------------------------------

const renderRadioButtons = () => {
  return (
    <div className="radio-buttons-container">
      <img src={left} alt="Previous" onClick={() => setActiveIndex(activeIndex === 0 ? projects.length - 1 : activeIndex - 1)} />

      {projects.map((_, index) => (
        <img key={index}
          className="radio-button"
          onClick={() => setActiveIndex(index)}
          src={activeIndex === index ? on : off} 
          alt={`Radio button ${index + 1}`} />
      ))}

      <img src={right} alt="Next" onClick={() => setActiveIndex(activeIndex === projects.length - 1 ? 0 : activeIndex + 1)} />
    </div>
  );
};

//The Download/Link for the project when hovered over------------------------------------------------------------------------------------------

const OverlayComponent = ({ isVisible }) => {
  if (!isVisible) return null;
  const project = projects[activeIndex]

  return (
    <div className="carousel-overlay">
      <a className="carousel-download" href={project.download} download={project.downloadName}>
        <img src={download} alt="Download" />
      </a>
      <a className="carousel-link" href={project.link} target="_blank" rel="noopener noreferrer">
        <img src={link} alt="Project Link" />
      </a>
    </div>
  );
};

//Project HTML -----------------------------------------------------------------------------------------------------

  return(
    <div id='Projects' className='project' ref={ref}>
      <div style={transitionStyle}>
    
        <h1 className='project-header'>
          <div className='project-header-number'>
            02
          </div>
          <div className='project-title'>
            Projects
          </div>
        </h1>

        <div className="project-body">
          <div className="project-body-presenter">
            <div className="project-body-image"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}>
              <ImageCarousel items={projects.map(project => project.image)} activeIndex={activeIndex}/>
              <OverlayComponent isVisible={isHovered} />
            </div>
            {renderRadioButtons()}
            
          </div>
          <div className="project-body-desc">
            <ListCarousel items={projects.map(project => project.description)} activeIndex={activeIndex}/>
          </div>
        </div>
      </div>
    </div>
  );
}