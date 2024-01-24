import { useState } from "react";
import MostVoted from "./MostVoted";
import BtnNext from "./BtnNext";
import BtnVote from "./BtnVote";
import Anecdote from "./Anecdote";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const randomNum = () => {
    return Math.floor(Math.random() * anecdotes.length);
  };

  const [selected, setSelected] = useState(randomNum());
  const [previous, setPrevious] = useState(selected);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [highestVote, sethighestVote] = useState();

  const nextAnecdote = () => {
    let next = randomNum();
    while (next === previous) {
      next = randomNum();
    }
    setPrevious(selected);
    setSelected(next);
  };

  const voteForAnecdote = () => {
    const votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVotes(votesCopy);

    const highestVoteIndex = votesCopy.indexOf(Math.max(...votesCopy));
    sethighestVote(highestVoteIndex);
  };

  return (
    <>
      <Anecdote anecdotes={anecdotes} votes={votes} selected={selected} />
      <BtnVote voteForAnecdote={voteForAnecdote} />
      <BtnNext nextAnecdote={nextAnecdote} />
      {highestVote && (
        <MostVoted
          anecdotes={anecdotes}
          votes={votes}
          highestVote={highestVote}
        />
      )}
    </>
  );
};

export default App;
