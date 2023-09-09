import {Statistics} from 'components/Feedback/Statistics'
import {FeedbackOptions} from 'components/Feedback/FeedbackOptions'
import {Notification} from 'components/Feedback/Notification'

export const Section = ({title, children}) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    );
}