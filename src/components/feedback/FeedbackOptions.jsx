import { Component } from 'react';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;

        return (
            <div>
                {options.map(option => (
                    <button key={option} type='button' name={option} onClick={() => onLeaveFeedback(option)}>
                        {option}
                    </button>
                ))}
            </div>
        )
    }
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};