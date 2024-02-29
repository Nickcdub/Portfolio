import React, { useState, useEffect, useRef } from 'react'
import './Carousel.css'
import img1 from '../assets/img/NLPFinalProjectPoster.svg'
import img2 from '../assets/img/RPG.svg'

export const ImageCarousel = ({items, activeIndex}) => {

    return (
        <div className='carousel'>
            <div className='inner'
                 style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                {items.map((item, index) => ( // Added index for key prop
                    <CarouselImage key={index} item={item}/>
                ))}
            </div>
        </div>
    );
};

export const TextCarousel = ({items, activeIndex}) => {
    const innerRef = useRef(null); // Ref for the inner container

    useEffect(() => {
        // Reset scroll position of the inner container
        if (!innerRef.current) {
            innerRef.current.scroll({
                top: 0,
            });
        }
    }, [activeIndex]);

    return (
        <div className='carousel'>
            <div className='inner'
                 ref={innerRef} // Apply ref here
                 style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                {items.map((item, index) => (
                    <CarouselText key={index} item={item}/> // Removed ref from here
                ))}
            </div>
        </div>
    );
}

export const ListCarousel = ({items, activeIndex}) => {
    return (
        <div className='carousel'>
            <div className='inner'
                 style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                {items.map((item, index) => ( // Added index for key prop
                    <CarouselList key={index} item={item}/>
                ))}
            </div>
        </div>
    );
}


const CarouselList = ({ item }) => { // Assuming 'item' is an array of strings
    return (
      <ul className='carousel-list'>
        {item.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    );
  }

  const CarouselText = React.forwardRef(({ item }, ref) => {
    return (
        <div className='carousel-text' ref={ref}>{item}</div>
    );
});

const CarouselImage = ({item}) => {
    return (
        <img className='carousel-img' src={item} alt="Carousel item"/> // Added alt for accessibility
    );
};
