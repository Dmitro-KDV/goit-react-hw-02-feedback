import {Feedback} from './FeedbackOptions.stiled';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return ( 
        
        <div>
            {options.map(option => (<Feedback onClick={()=>{onLeaveFeedback(option)}} className='neutral'>{option} </Feedback>))}
            {/* <Feedback onClick={ClickGood} className="good">Good</Feedback>
            <Feedback onClick={ClickNeutral} className="neutral">Neutral</Feedback>
            <Feedback onClick={ClickBad} className="bad">Bad</Feedback> */}
        </div>
    );
}