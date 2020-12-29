import { useContext } from 'react';
import { Button } from '@dodam/components';
import QuizContext from '../context/QuizContext';
import { SET_ANSWERS, SET_CURRENT_ANSWER, SHOW_RESULTS, NEXT_QUESTION, PREV_QUESTION } from '../data/actionTypes';

const MoveButtons = () => {
  const { state, dispatch } = useContext(QuizContext);
  const { currentQuestion, questions, currentAnswer, answers, showResults } = state;
  const question = questions[currentQuestion];
  const answer = { questionId: question.id, answerSelected: currentAnswer };

  const prevButton = () => {
    dispatch({ type: PREV_QUESTION, currentQuestion: currentQuestion });
  };

  const nextButton = () => {
    if (!currentAnswer) {
      alert('답안을 선택해주세요');
      return;
    }
    dispatch({ type: SET_ANSWERS, answer });
    dispatch({ type: SET_CURRENT_ANSWER, currentAnswer: '' });

    if (currentQuestion + 1 < questions.length) {
      dispatch({ type: NEXT_QUESTION, currentQuestion: currentQuestion });
      return;
    }
  };

  const finishButton = () => {
    dispatch({ type: SET_ANSWERS, answer });
    alert('제출하시겠습니까?');
    dispatch({ type: SHOW_RESULTS, showResults: true });
  };

  const renderNextButton = () => {
    if (currentQuestion + 1 < questions.length) {
      return (
        <Button className="next-button" outline="true" onClick={nextButton}>
          다음으로
        </Button>
      );
    }
    return (
      <Button className="next-button" outline="true" onClick={finishButton}>
        완료
      </Button>
    );
  };

  //콘솔창에 선택한 답안들 출력
  if (showResults) {
    console.log('선택한 답안: ', answers);
  }

  return (
    <div className="buttons">
      <Button className="prev-button" outline="true" onClick={prevButton}>
        이전으로
      </Button>
      {renderNextButton()}
      <style jsx>
        {`
          .buttons {
            display: flex;
            flex-direction: row;
            margin-top: 110px;
          }
          :global(.prev-button) {
            flex: 1;
            margin-left: 12px;
          }
          :global(.next-button) {
            flex: 1;
            margin-left: 12px;
            margin-right: 12px;
          }
        `}
      </style>
    </div>
  );
};

export default MoveButtons;
