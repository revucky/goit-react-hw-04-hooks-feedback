import React from "react";
import PropTypes from "prop-types";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "../../services/Statistics";
import Notification from "../../services/Notification";
import Section from "../../services/Section";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (e) => {
    const name = e.target.id;
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback()
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleClick} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
