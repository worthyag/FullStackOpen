import { useState } from "react";

const Button = ({ onClick, label }) => {
  return (
    <button onClick={onClick}>{label}</button>
  );
};

const Feedback = ({onGood, onNeutral, onBad}) => {
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button label="good" onClick={onGood} />
      <Button label="neutral" onClick={onNeutral} />
      <Button label="bad" onClick={onBad} />
    </div>
  );
};

const Stat = ({ label, stat }) => {
  return (
    <tr><td>{label}</td><td>{stat}</td></tr>
  )
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const avg = (good + (bad * -1)) / all;
  const pos = (good / all) * 100;

  if (all > 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <Stat label="good" stat={good} />
            <Stat label="neutral" stat={neutral} />
            <Stat label="bad" stat={bad} />
            <Stat label="all" stat={all} />
            <Stat label="average" stat={avg} />
            <Stat label="positive" stat={`${pos}%`} />
          </tbody>
        </table>
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <p>No feedback given.</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Feedback
        onGood={handleGood}
        onNeutral={handleNeutral}
        onBad={handleBad}
      />
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad} 
      />
    </div>
  );
};

export default App;
