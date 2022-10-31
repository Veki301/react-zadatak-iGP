import React from 'react';

const Steps = ({ totalSteps, currentStep }) => {
  const getSteps = () => {
    let steps = [];
    for (let i = 0; i < totalSteps; i++) {
      const step = (
        <div
          key={i}
          className={`circle-passive ${i == currentStep && 'circle-active'}`}
        >
          {i}
        </div>
      );
      steps.push(step);
    }
    return steps;
  };
  return (
    <div className="progressBar-container">
      <div className="progress-container">
        <div
          className={`current-progress current-progress-step${currentStep}`}
        />
        {getSteps().forEach((step) => step)}
      </div>
    </div>
  );
};

export default Steps;
