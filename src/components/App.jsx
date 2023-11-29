import React, { useState, useEffect } from 'react';
import { FeedbackOptions } from './feedback/FeedbackOptions';
import { Statistics } from './statistics/Statistics';
import { Section } from './section/Section';
import { Notification } from './notification/Notification';
import css from './App.module.css';

const message = '';
const initialStates = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  percentage: 0,
};

export const App = () => {
  const [feedback, setFeedback] = useState({ ...initialStates });

  useEffect(() => {
    countTotalFeedback();
    countPositiveFeedbackPercentage();
  }, [feedback]);

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    setFeedback(prevState => ({ ...prevState, total: good + neutral + bad }));
  };

  const countPositiveFeedbackPercentage = () => {
    const { good, total } = feedback;
    setFeedback(prevState => ({
      ...prevState,
      percentage: Math.round((good * 100) / total),
    }));
  };

  const handleFeedback = option => {
    setFeedback(prevState => ({
      ...prevState,
      [option]: prevState[option] + 1,
    }));
  };

  return (
    <div className={css.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
        <Notification message={message} />
      </Section>

      <Statistics
        good={feedback.good}
        neutral={feedback.neutral}
        bad={feedback.bad}
        total={feedback.total}
        percentage={feedback.percentage}
      />
    </div>
  );
};
