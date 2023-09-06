
export const Statistics = ({stats}) => {
    return ( 
        <div>
            <h3>Statistics</h3>
            <p>Good: <span>{stats.good}</span></p>
            <p>Neutral: <span>{stats.neutral}</span></p>
            <p>Bad: <span>{stats.bad}</span></p>
            <p>Total: <span>{stats.total}</span></p>
            <p>Positive feedback: <span>{stats.positive} %</span></p>
        </div>
    );
}