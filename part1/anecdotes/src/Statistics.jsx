import StatisticLine from "./StatisticLine";

function Statistics({ good, neutral, bad }) {
  const allFeedback = good + neutral + bad;
  const avgFeedback = (allFeedback / 3).toFixed(2);
  const positivePercentage = ((good / allFeedback) * 100).toFixed(2) + "%";

  return (
    <>
      <h2>Statistics</h2>
      {allFeedback !== 0 ? (
        <table>
          <tbody>
            <StatisticLine text={"Good"} value={good} />
            <StatisticLine text={"Neutral"} value={neutral} />
            <StatisticLine text={"Bad"} value={bad} />
            <StatisticLine text={"All"} value={allFeedback} />
            <StatisticLine text={"Average"} value={avgFeedback} />
            <StatisticLine text={"Positive"} value={positivePercentage} />
          </tbody>
        </table>
      ) : (
        "No feedback given"
      )}
    </>
  );
}

export default Statistics;
