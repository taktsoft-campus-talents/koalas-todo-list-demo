export function ProgressBar({ currentQuestion, numQuestions }) {
  return (
    <p>
      {currentQuestion} / {numQuestions}
    </p>
  );
}
