import Button from './Button';

function FinishScreen({ subject, score, dispatch }) {
  const numQuestions = subject.questions.length;
  return (
    <div>
      <h1>{subject.title}</h1>
      <p>Quiz completed You scored...</p>
      <div>{`${score} out of ${numQuestions}`}</div>
      <Button onClick={() => dispatch({ type: 'playAgain' })}>
        Play Again
      </Button>
    </div>
  );
}

export default FinishScreen;
