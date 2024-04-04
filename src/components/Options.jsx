function Options({ hasAnswered, answer, question, setSelectedOption }) {
  return (
    <div>
      {question.options.map((option) => (
        <button
          key={option}
          className={`block ${
            (hasAnswered && option === answer) ||
            (hasAnswered && option === question.answer)
              ? option === question.answer
                ? 'bg-green-500'
                : 'bg-red-500'
              : ''
          }`}
          onClick={() => setSelectedOption(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
