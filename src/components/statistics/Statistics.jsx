import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, percentage }) =>
  total === 0 ? (
    <p>There is no feedback</p>
  ) : (
    <>
      <h3>Statistics:</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {percentage}%</p>
    </>
  );

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
};
