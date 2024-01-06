function FeedbackButton({ btnText, onSetFeedback }) {
  return <button onClick={onSetFeedback}>{btnText}</button>;
}

export default FeedbackButton;
