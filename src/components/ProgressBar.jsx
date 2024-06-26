export function ProgressBar({ currentQuestion, numQuestions }) {
  return (
    <>
      <h2>Game progress</h2>
      <p>
        {currentQuestion} / {numQuestions}
      </p>
    </>
  );
}
