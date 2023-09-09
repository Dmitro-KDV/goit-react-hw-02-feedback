import {Section} from 'components/Feedback/Section'
import { Component } from 'react'

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handleClickGood = () => 
      this.setState((prev) => ({
          good: prev.good + 1,
      }));
  handleClickNeutral = () => 
      this.setState((prev) => ({
          neutral: prev.neutral + 1,
      }));    
  handleClickBad = () => 
      this.setState((prev) => ({
          bad: prev.bad + 1,
      }));   


  render() {
    const { good, neutral, bad } = this.state;
    const options = {
        good: good,
        neutral: neutral,
        bad: bad,
        total: 0,
        positivePercentage: 0,
        isShowStatistics: false,
    }

    options.total = options.good + options.neutral + options.bad;    
    options.positivePercentage = Math.round(((options.good) / (options.total)) * 100);
    options.total > 0 ? options.isShowStatistics = true : options.isShowStatistics = false;

      return (
          <div>
              <Section title="Please leave feedback" onLeaveFeedback={this} options={options}/>
          </div>
      );
  }
};