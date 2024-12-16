import React from 'react';

const ResultOutput = ({ result }) => {
  return (
    <div className="result-block">
      <strong>Результат:</strong>
      <div>{result}</div>
    </div>
  );
};

export default ResultOutput;
