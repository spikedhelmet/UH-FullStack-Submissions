function MostVoted({ anecdotes, votes, highestVote }) {
  return (
    <>
      <h2>Anecdote with the most votes</h2>
      <p>{anecdotes[highestVote]}</p>
      <p>- has {votes[highestVote]} votes</p>
    </>
  );
}

export default MostVoted;
