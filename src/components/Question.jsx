import { useState } from 'react';
import NextButton from './NextButton';
import Options from './Options';
import SubmitButton from './SubmitButton';
import Progress from './Progress';

function Question({ subject, index, dispatch, answer }) {
  const [selectedOption, setSelectedOption] = useState('');

  const numQuestions = subject.questions.length;
  const question = subject.questions[index];
  const hasAnswered = answer !== null;
  return (
    <div>
      <p>{subject.title}</p>
      <p>
        Question {index + 1} of {subject.questions.length}
      </p>
      <p>{question.question}</p>
      <Options
        question={question}
        answer={answer}
        hasAnswered={hasAnswered}
        setSelectedOption={setSelectedOption}
      />
      <Progress numQuestions={numQuestions} index={index} />
      {answer ? (
        <NextButton
          index={index}
          numQuestions={numQuestions}
          dispatch={dispatch}
        />
      ) : (
        <SubmitButton selectedOption={selectedOption} dispatch={dispatch} />
      )}
    </div>
  );
}

export default Question;
