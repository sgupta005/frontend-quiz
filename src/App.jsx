import { useEffect, useReducer } from 'react';

import Subjects from './components/Subjects';
import StartScreen from './components/Welcome';
import Question from './components/Question';
import FinishScreen from './components/FinishScreen';

const URL = 'http://localhost:9000/quizzes';
const initialState = {
  quizData: [],
  // loading, error, ready, active, finished
  status: 'loading',
  subject: {},
  index: 0,
  score: 0,
  answer: null,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataFetched':
      return { ...state, quizData: action.payload, status: 'ready' };
    case 'dataFailed':
      return { ...state, status: 'error' };
    case 'selectSubject':
      return { ...state, status: 'active', subject: action.payload };
    case 'submitAnswer':
      return {
        ...state,
        answer: action.payload,
        score:
          action.payload === state.subject.questions[state.index].answer
            ? state.score + 1
            : state.score,
      };
    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case 'finish':
      return {
        ...state,
        status: 'finished',
        index: 0,
        answer: null,
      };
    case 'playAgain':
      return {
        ...state,
        status: 'ready',
        subject: {},
        score: 0,
      };
    default:
      throw new Error('Action unknown');
  }
}

function App() {
  const [{ quizData, status, subject, index, answer, score }, dispatch] =
    useReducer(reducer, initialState);
  useEffect(function () {
    async function getQuizData() {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        dispatch({ type: 'dataFetched', payload: data });
      } catch (err) {
        dispatch({ type: 'dataFailed' });
      }
    }
    getQuizData();
  }, []);

  if (status === 'ready')
    return (
      <>
        <StartScreen />
        <Subjects quizData={quizData} dispatch={dispatch} />
      </>
    );
  if (status === 'active') {
    return (
      <Question
        key={subject.questions[index].question}
        subject={subject}
        index={index}
        dispatch={dispatch}
        answer={answer}
      />
    );
  }
  if (status === 'finished') {
    return <FinishScreen score={score} subject={subject} dispatch={dispatch} />;
  }
}

export default App;
