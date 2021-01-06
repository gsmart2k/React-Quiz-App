import React, { useState } from "react";

const QuestionBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionBox">
      <div>{question}</div>
      {answer.map((text, index) => (
        <button
          className="btn btn-primary p-2 m-2"
          key={index}
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};
export default QuestionBox;
