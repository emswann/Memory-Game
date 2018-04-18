import React from "react";

const Score = props => (
  <div>
    <span>Score: {props.score}</span>
    <span> | </span>
    <span>Top Score: {props.topScore}</span>
  </div>
);

export default Score;