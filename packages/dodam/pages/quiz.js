import { useReducer } from 'react';
import Progress from '../components/Progress';
import Question from '../components/Question';
import Answers from '../components/Answers';
import QuizContext from '../context/QuizContext';
import quizReducer from '../data/quizReducer';
import MoveButtons from '@/components/MoveButtons';

const quiz = () => {
  const questions = [
    {
      id: 1,
      question: '활동적인 것을 좋아한다',
    },
    {
      id: 2,
      question: '캠퍼스 밖에 나가는 것을 선호한다',
    },
    {
      id: 3,
      question: '술자리를 좋아한다',
    },
    {
      id: 4,
      question: '많은 사람들과 어울리고 싶다',
    },
    {
      id: 5,
      question: '인지도가 높은 동아리를 선호한다',
    },
    {
      id: 6,
      question: '멤버들의 학번이 다양해도 상관없다',
    },
  ];
  const answerOptions = [
    {
      id: 1,
      answerOption: '예',
    },
    {
      id: 2,
      answerOption: '아니오',
    },
  ];

  const initialState = {
    questions,
    answerOptions,
    currentQuestion: 0,
    currentAnswer: '',
    answers: [],
    showResults: false,
  };

  const [state, dispatch] = useReducer(quizReducer, initialState);
  return (
    <div className="main-container">
      <QuizContext.Provider value={{ state, dispatch }}>
        <Progress />
        <Question />
        <Answers />
        <MoveButtons />
      </QuizContext.Provider>
      <style jsx>{`
        .main-container {
          margin: 25px 12px 0px;
        }
      `}</style>
    </div>
  );
};

export default quiz;
