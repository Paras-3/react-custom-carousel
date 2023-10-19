import React, { useState } from 'react';
import './Carousel.css';

const CentredFocus = ({ data, cardsToShow, centered }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    if (currentIndex === 0) {
      return; 
    }
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const nextSlide = () => {
    if (currentIndex === data.length - 1) {
      return; 
    }
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const visibleCards = [];
  const currentIndexOffset = centered ? Math.floor(cardsToShow / 2) : 0;

  for (let i = 0; i < cardsToShow; i++) {
    const index = (currentIndex + i - currentIndexOffset + data.length) % data.length;
    const card = data[index];
    visibleCards.push(card);
  }

  return (
    <div className="carousel-container">
      <div className={`arrow left ${currentIndex === 0 ? 'disabled' : ''}`} onClick={prevSlide}>
        &lt;
      </div>
      <div className={`carousel ${centered ? 'centered' : ''}`}>
        {visibleCards.map((item, index) => (
          <div
            key={index}
            className={`carousel-card ${index === currentIndexOffset ? 'center' : ''} ${
              centered ? 'blur' : ''
            }`}
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className={`arrow right ${currentIndex === data.length - 1 ? 'disabled' : ''}`} onClick={nextSlide}>
        &gt;
      </div>
    </div>
  );
};

export default CentredFocus;