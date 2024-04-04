import Subject from './Subject';

function Subjects({ quizData, dispatch }) {
  return quizData.map((subject) => (
    <Subject subject={subject} key={subject.title} dispatch={dispatch} />
  ));
}

export default Subjects;
