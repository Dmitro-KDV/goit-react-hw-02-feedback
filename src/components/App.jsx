import { Section } from 'components/Feedback/Section';
import {Statistics} from 'components/Feedback/Statistics'
import {FeedbackOptions} from 'components/Feedback/FeedbackOptions'
import {Notification} from 'components/Feedback/Notification'
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = (option) => {
    this.setState(prev => ({
        [option]: prev[option] + 1,
  }));
     
  }

  render() {

    const good = this.state.good;
    const neutral = this.state.neutral;
    const bad = this.state.bad;
    const total = good + neutral + bad;
    const positivePercentage = Math.round((good / total) * 100);
    let isShowStatistics = false;
    
    if (total > 0) {
      isShowStatistics = true;
    } 
    
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions 
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}>
          </FeedbackOptions>
        </Section>
        {isShowStatistics ? (
            <Section title=''>
              <Statistics 
                 good = {good}
                 neutral = {neutral}
                 bad = {bad}
                 total = {total}
                 positivePercentage = {positivePercentage}>
              </Statistics>
            </Section>
            )
          : (<Notification message="There is no feedback" />)
        }
      </div>
    );
  }
}
