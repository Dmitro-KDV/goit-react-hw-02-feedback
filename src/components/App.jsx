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
    const object = {
        good: good,
        neutral: neutral,
        bad: bad,
        total: 0,
        positive: 0,
        isShowStatistics: false,
    }

    object.total  = object.good + object.neutral + object.bad;
    object.positive = Math.round(((object.good) / (object.total)) * 100);
    object.total > 0 ? object.isShowStatistics = true : object.isShowStatistics = false;

      return (
          <div>
              <Section title="Please leave feedback" objectThis={this} object={object}/>
          </div>
      );
  }
};
