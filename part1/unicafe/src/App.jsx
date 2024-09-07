import { useState } from 'react';

const Button = ({ handleState, label, id }) => {
  return (
    <button id={id} onClick={handleState}>{label}</button>
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
        <p className="good"><span>Good:</span> {good}</p>
        <p className="neutral"><span>Neutral:</span> {neutral}</p>
        <p className="bad"><span>Bad:</span> {bad}</p>
        <p className="all"><span>All:</span> {good + neutral + bad}</p>
        <p>Click the buttons to give feedback!</p>
      </div>
      </section>
    );
  }

  return (
    <section id="statistics-section">
    <h2>Statistics</h2>
    <div className="statistics">
      <p className="good"><span>Good:</span> {good}</p>
      <p className="neutral"><span>Neutral:</span> {neutral}</p>
      <p className="bad"><span>Bad:</span> {bad}</p>
      <p className="all"><span>All:</span> {good + neutral + bad}</p>
      <p className="avg"><span>Avg:</span> {(good + (bad * -1))/(good + neutral + bad)}</p>
      <p className="pos"><span>Positive:</span> {Math.round(((good/(good + neutral + bad)) * 100) * 100) / 100}%</p>
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
