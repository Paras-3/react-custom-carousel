import React, { useState } from 'react';
import './Carousel.css';

const Carousel = ({ data, cardsToShow}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        if (currentIndex !== 0) {
            setCurrentIndex((prevIndex) => (prevIndex - 1));
        }
    };

    const nextSlide = () => {
        if (currentIndex + 1 < subarrays.length) {
            setCurrentIndex((prevIndex) => (prevIndex + 1));
        }
    };

    const subarrays = [];
    const q = Math.floor(data.length / cardsToShow);
    const r = Math.floor(data.length % cardsToShow);
    const p = cardsToShow - r;

    for (let i = 0; i < cardsToShow * q; i += cardsToShow) {
        let subarray = data.slice(i, i + cardsToShow);
        subarrays.push(subarray);
    }

    if (r !== 0) {
        let subarray = data.slice(cardsToShow * q - p, data.length);
        subarrays.push(subarray);
    }

    const isLastSet = currentIndex === subarrays.length - 1;
    const visibleCards = subarrays[currentIndex] || [];

    return (
        <div className="carousel-container">
            <div className={`arrow left ${currentIndex === 0 ? 'disabled' : ''}`} onClick={prevSlide}>
                &lt;
            </div>
            <div className="carousel">
                {visibleCards.map((item, index) => {
                    return (
                        <div key={index} className="carousel-card">
                            <img src={item.image} alt={item.title} />
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    );
                })}
            </div>
            <div className={`arrow right ${isLastSet ? 'disabled' : ''}`} onClick={isLastSet ? null : nextSlide}>
                &gt;
            </div>
        </div>
    );
};

export default Carousel;
