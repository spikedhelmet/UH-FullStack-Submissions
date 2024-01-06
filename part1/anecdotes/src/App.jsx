import { useState } from "react";
import FeedbackButton from "./FeedbackButton";
import FeedbackMenu from "./FeedbackMenu";
import Statistics from "./Statistics";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <FeedbackMenu>
        <FeedbackButton
          btnText={"good"}
          onSetFeedback={() => setGood(good + 1)}
        />
        <FeedbackButton
          btnText={"neutral"}
          onSetFeedback={() => setNeutral(neutral + 1)}
        />
        <FeedbackButton btnText={"bad"} onSetFeedback={() => setBad(bad + 1)} />
      </FeedbackMenu>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
