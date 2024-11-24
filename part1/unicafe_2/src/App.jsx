import { useState } from "react";

const Button = ({ onClick, label }) => {
  return (
    <button onClick={onClick}>{label}</button>
  );
};

const Feedback = ({good, neutral, bad}) => {
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button label="good" onClick={good} />
      <Button label="neutral" onClick={neutral} />
      <Button label="bad" onClick={bad} />
    </div>
  );
};

const Stat = ({ label, stat }) => {
  return (
    <p>{label} {stat}</p>
  )
};

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h1>Statistics</h1>
      <Stat label="good" stat={good} />
      <Stat label="neutral" stat={neutral} />
      <Stat label="bad" stat={bad} />
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
        good={handleGood}
        neutral={handleNeutral}
        bad={handleBad}
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
