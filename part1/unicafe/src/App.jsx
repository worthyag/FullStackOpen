import { useState } from 'react';

const Button = ({ handleState, label, id }) => {
  return (
    <button id={id} onClick={handleState}>{label}</button>
  );
};

const StatisticLine = ({ stat, statLabel }) => {
  return (
    <p className={statLabel}>
      <span>
        {statLabel[0].toUpperCase() + statLabel.slice(1)}:
      </span> {stat}
    </p>
  );
};

const GiveFeedback = (props) => {
  const {setGood, setNeutral, setBad} = props;
  const {good, neutral, bad} = props;
  return (
    <section id="feedback-section">
      <h2>Give Feedback</h2>
      <div className="feedback">
        <Button id={"goodBtn"} handleState={() => setGood(good + 1)} label={"Good"} />
        <Button id={"neutralBtn"} handleState={() => setNeutral(neutral + 1)} label={"Neutral"} />
        <Button id={"badBtn"} handleState={() => setBad(bad + 1)} label={"Bad"} />
      </div>
    </section>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <section id="statistics-section">
      <h2>Statistics</h2>
      <div className="statistics">
        <p>Click the buttons to give feedback!</p>
      </div>
      </section>
    );
  }

  return (
    <section id="statistics-section">
    <h2>Statistics</h2>
    <div className="statistics">
      <StatisticLine stat={good} statLabel={"good"} />
      <StatisticLine stat={neutral} statLabel={"neutral"} />
      <StatisticLine stat={bad} statLabel={"bad"} />
      <StatisticLine stat={good + neutral + bad} statLabel={"all"} />
      <StatisticLine 
        stat={(good + (bad * -1))/(good + neutral + bad)} 
        statLabel={"avg"} 
      />
      <StatisticLine 
        stat={(Math.round(((good/(good + neutral + bad)) * 100) * 100) / 100) + '%'} 
        statLabel={"positive"} 
      />
    </div>
    </section>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  return (
    <>
      <h1>UniCafe</h1>
      <GiveFeedback
       good={good} setGood={setGood}
       neutral={neutral} setNeutral={setNeutral}
       bad={bad} setBad={setBad}
      />
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad}
      />
    </>
  )
}

export default App
