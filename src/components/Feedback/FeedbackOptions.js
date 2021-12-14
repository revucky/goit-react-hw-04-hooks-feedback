import React from "react";
import "./Buttons.css";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button
        className="Button "
        id="good"
        type="button"
        onClick={onLeaveFeedback}
      >
        good
      </button>
      <button
        className="Button btn"
        id="neutral"
        type="button"
        onClick={onLeaveFeedback}
      >
        neutral
      </button>
      <button
        className="Button"
        id="bad"
        type="button"
        onClick={onLeaveFeedback}
      >
        bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
