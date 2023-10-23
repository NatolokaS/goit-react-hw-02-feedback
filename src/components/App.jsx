import { Component } from 'react';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
  });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((val, number) => 
    val + number, 0)
  
  };
  countPositiveFeedbackPercentage =() =>{
      return Math.round((this.state.good/this.countTotalFeedback())*100);
    
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 16,
          color: '#010101'
        }}
      >
        <Section
          state={this.state}
          onLeaveFeedback={this.onLeaveFeedback}
          countTotalFeedback={this.countTotalFeedback()}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}/>
      </div>
    )
  }
}