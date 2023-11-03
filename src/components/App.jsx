import { Component } from 'react';
import { FeedbackOptions } from './feedback/FeedbackOptions.jsx';
import { Statistics } from "./statistics/Statistics.jsx";
import { Section } from "./section/Section.jsx";
import { Notification } from "./notification/Notification.jsx";
import css from "./App.module.css"


const initialStates = {
  good: 0, neutral: 0, bad: 0, total: 0, percentage: 0
}
export class App extends Component {
 
  state = { ...initialStates};

  countTotalFeedback = () => {
    this.setState(state => {
      return { total: state.good + state.neutral + state.bad };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState(state => {
      return {
        percentage: Math.round((state.good * 100) / state.total),
      };
    });
  };

  handleFeedback = option => {
    // prevState represents the previous state object of the component
    this.setState(state => ({
      // used to create a new shallow copy of the previous state object
      ...state,
      // key in the state object by one
      [option]: state[option] + 1
    }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  render() {
    return (
      <div className={css.wrapper} >
      <Section
        title={'Please leave feedback'}>
        <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={this.handleFeedback}
        />
        <Notification
        message={this.message}
        />
      </Section>
        
<Statistics
      good={this.state.good} 
      neutral={this.state.neutral} 
      bad={this.state.bad} 
      total={this.state.total} 
      percentage={this.state.percentage}       
        />
  
      </div>
    );
  }
}