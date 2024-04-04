import Button from './Button';

function NextButton({ dispatch, index, numQuestions }) {
  if (index + 1 < numQuestions)
    return (
      <Button onClick={() => dispatch({ type: 'nextQuestion' })}>
        Next Question
      </Button>
    );
  return (
    <Button
      onClick={() => {
        console.log('finish');
        dispatch({ type: 'finish' });
      }}
    >
      Finish
    </Button>
  );
}

export default NextButton;
