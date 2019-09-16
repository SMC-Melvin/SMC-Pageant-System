import React from 'react';
const ScoreBoard = ({ maxScore, score, onScoreChange }) => {
  const scoreList = Array.from(
    { length: maxScore },
    (value, index) => index + 1
  );
  const newScore = score || {
    id: 0,
    value: 0
  };
  return (
    <div className="score-board">
      {scoreList.map(scoreValue => (
        <div
          key={scoreValue}
          className={`score-board-item${
            scoreValue === newScore.value ? ' active' : ''
          }`}
          onClick={() => onScoreChange({ ...newScore, value: scoreValue })}
        >
          {scoreValue}
        </div>
      ))}
    </div>
  );
};

export default ScoreBoard;
