import {Feedback} from './FeedbackOptions.stiled';

export const FeedbackOptions = ({ClickGood, ClickNeutral, ClickBad}) => {
    return ( 
        <div>
            <Feedback onClick={ClickGood} className="good">Good</Feedback>
            <Feedback onClick={ClickNeutral} className="neutral">Neutral</Feedback>
            <Feedback onClick={ClickBad} className="bad">Bad</Feedback>
        </div>
    );
}