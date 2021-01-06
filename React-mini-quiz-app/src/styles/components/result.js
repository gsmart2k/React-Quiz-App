import React, { Component } from "react";

const Result = ({ score, playAgain }) => (
  <div className="text-center">
    <div className="score">You Scored {score} </div>
    <button onClick={playAgain} className="pl-again">
      playAgain
    </button>
  </div>
);

export default Result;
