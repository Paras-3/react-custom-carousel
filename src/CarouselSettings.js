import React from 'react';

const CarouselSettings = ({ cardsToShow, centered, onCardsToShowChange, onCenteredChange }) => {
  const handleSelectChange = (e) => {
    const selectedValue = parseInt(e.target.value, 10);
    onCardsToShowChange(selectedValue);
  };

  const handleCenteredChange = (e) => {
    const isChecked = e.target.checked;
    onCenteredChange(isChecked);
  };

  return (
    <div>
      <label htmlFor="cardsToShow">Number of Cards to Show:</label>
      <select id="cardsToShow" onChange={handleSelectChange} value={cardsToShow}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <div>
        <label htmlFor="centered">Centered Focused:</label>
        <input
          type="checkbox"
          id="centered"
          onChange={handleCenteredChange}
          checked={centered}
        />
      </div>
    </div>
  );
};

export default CarouselSettings;
