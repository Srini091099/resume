import React from 'react';
import '../style/letterhover.css';

export default function LetterHover() {
  const handleLetterHover = (event) => {
    event.target.classList.add('letter-hover');
  };

  const handleLetterLeave = (event) => {
    event.target.classList.remove('letter-hover');
  };

  return (
    <div className="letter-container">
      <h1 className="hoverable-text" onMouseEnter={handleLetterHover} onMouseLeave={handleLetterLeave}>
        Hover over me!
      </h1>
    </div>
  );
}
