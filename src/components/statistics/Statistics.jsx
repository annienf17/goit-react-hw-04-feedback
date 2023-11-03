import { Component } from 'react'
import PropTypes from 'prop-types';

export class Statistics extends Component {
    render() {
        const { good, neutral, bad, total, percentage } = this.props;
        return (
            total === 0 ? `There is no feedback` 
            :
            <>
            <h3>Statistics:</h3>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {percentage}%</p>
            </>       
        );
}
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    percentage: PropTypes.number,
  };