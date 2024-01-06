function Anecdote({ anecdotes, votes, selected }) {
  return (
    <>
      <h2>Ancedote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
    </>
  );
}

export default Anecdote;
