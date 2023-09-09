import {Statistics} from 'components/Feedback/Statistics'
import {FeedbackOptions} from 'components/Feedback/FeedbackOptions'
import {Notification} from 'components/Feedback/Notification'

export const Section = ({title, onLeaveFeedback, options}) => {
    return (
        <div>
            <h2>{title}</h2>
            <FeedbackOptions 
                ClickGood = {onLeaveFeedback.handleClickGood}
                ClickNeutral = {onLeaveFeedback.handleClickNeutral}
                ClickBad = {onLeaveFeedback.handleClickBad}/>
                
            {options.isShowStatistics ? <Statistics stats={options}/>: 
                                             <Notification message="There is no feedback" />}
        </div>
    );
}