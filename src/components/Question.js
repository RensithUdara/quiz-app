import React from 'react';

function Question({ questionData, handleAnswerOptionClick }) {
  return (
    <div className="question-section">
      <h2>{questionData.question}</h2>
      <div className="options">
        {questionData.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswerOptionClick(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
