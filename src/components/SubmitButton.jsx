import Button from './Button';

function SubmitButton({ selectedOption, dispatch }) {
  return (
    <Button
      onClick={() => {
        if (!selectedOption) return;
        dispatch({ type: 'submitAnswer', payload: selectedOption });
      }}
    >
      Submit
    </Button>
  );
}

export default SubmitButton;
