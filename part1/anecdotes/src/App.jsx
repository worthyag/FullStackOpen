import { useState } from "react";

const Button = ({ handleEvent, label }) => <button onClick={handleEvent}>{label}</button>;

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];

  const votesObj = {};
  for (const anecdote of anecdotes) {
    votesObj[anecdote] = 0;
  };


  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({...votesObj});

  const nextAnecdote = () => {
    if (selected < (anecdotes.length - 1)) setSelected(selected + 1);
    else setSelected(0);
  };

  const addVote = () => {
    setVotes({
      ...votes, 
      [anecdotes[selected]]: votes[anecdotes[selected]] + 1
    });
  }

  const findAnecdotesWithMostVotes = () => {
    return Object.keys(votes).reduce((highest, anecdote) =>
      (votes[anecdote] > votes[highest]) ? anecdote : highest
    , anecdotes[0]);
  };

  return (
    <>
      <h2>Anecdote of the day</h2>
      <section>
        <p>{anecdotes[selected]}</p>
        <span>has {votes[anecdotes[selected]]} vote(s)</span>
        <div className="btns">
          <Button handleEvent={addVote} label={"Vote"} />
          <Button handleEvent={nextAnecdote} label={"Next Anecdote"} />
        </div>
      </section>
      <h2>Anecdote with the most votes</h2>
      <section>
        <p>{findAnecdotesWithMostVotes()}</p>
        <span>has {votes[findAnecdotesWithMostVotes()]} vote(s)</span>
      </section>
    </>
  );
};

export default App;


{/* <Button handleEvent={() => setSelected(Math.floor(Math.random() * 8))} label={"New Anecdote"} /> */}