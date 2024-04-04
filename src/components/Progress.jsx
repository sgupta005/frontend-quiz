function Progress({ index, numQuestions }) {
  return (
    <div>
      <progress max={numQuestions} value={index + 1}></progress>
    </div>
  );
}

export default Progress;
