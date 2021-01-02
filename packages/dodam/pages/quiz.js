import { useReducer } from 'react';
import { ProgressBar } from '@dodam/components';
import QuizContext from '../context/QuizContext';
import quizReducer from '../data/quizReducer';
import QuizItem from '@/components/QuizItem';
import { Button } from '@dodam/components';
import * as ActionTypes from '../data/actionTypes';

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
    answerOption: '예',
  },
  {
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

const quiz = () => {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { currentQuestion, currentAnswer, answers, showResults } = state;
  const question = questions[currentQuestion];
  const answer = { questionId: question.id, answerSelected: currentAnswer };

  const prevButton = () => {
    dispatch({ type: ActionTypes.PREV_QUESTION });
  };

  const nextButton = () => {
    if (!currentAnswer) {
      alert('답안을 선택해주세요');
      return;
    }
    dispatch({ type: ActionTypes.SUBMIT_ANSWER, answer });
    dispatch({ type: ActionTypes.NEXT_QUESTION });
  };

  const finishButton = () => {
    if (confirm('제출하시겠습니까?')) {
      dispatch({ type: ActionTypes.SET_ANSWERS, answer });
      dispatch({ type: ActionTypes.SHOW_RESULTS, showResults: true });
    } else {
      return;
    }
  };

  const renderNextButton = () => {
    if (currentQuestion + 1 < questions.length) {
      return (
        <Button className="next-button" outline={true} onClick={nextButton}>
          다음으로
        </Button>
      );
    }
    return (
      <Button className="next-button" outline={true} onClick={finishButton}>
        완료
      </Button>
    );
  };

  //콘솔창에 선택한 답안들 출력
  if (showResults) {
    console.log('선택한 답안: ', answers);
  }

  return (
    <div className="main-container">
      <QuizContext.Provider value={{ state, dispatch }}>
        <ProgressBar value={currentQuestion + 1} max={questions.length} />
        <QuizItem />
        <div className="buttons">
          <Button className="prev-button" outline={true} onClick={prevButton}>
            이전으로
          </Button>
          {renderNextButton()}
        </div>
      </QuizContext.Provider>
      <style jsx>{`
        .main-container {
          margin: 24px 24px 0px;
        }
        .buttons {
          display: flex;
          flex-direction: row;
          margin-top: 96px;
        }
        :global(.prev-button) {
          flex: 1;
          margin-left: 8px;
        }
        :global(.next-button) {
          flex: 1;
          margin-left: 8px;
          margin-right: 8px;
        }
      `}</style>
    </div>
  );
};

export default quiz;
