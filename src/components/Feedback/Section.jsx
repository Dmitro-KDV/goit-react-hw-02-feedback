import {Statistics} from 'components/Feedback/Statistics'
import {FeedbackOptions} from 'components/Feedback/FeedbackOptions'
import {Notification} from 'components/Feedback/Notification'

export const Section = ({title, objectThis, object}) => {
    return (
        <div>
            <h2>{title}</h2>
            <FeedbackOptions 
                ClickGood = {objectThis.handleClickGood}
                ClickNeutral = {objectThis.handleClickNeutral}
                ClickBad = {objectThis.handleClickBad}/>
                
            {object.isShowStatistics ? <Statistics stats={object}/>: 
                                             <Notification message="There is no feedback" />}
        </div>
    );
}