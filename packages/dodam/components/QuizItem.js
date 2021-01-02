import AnswerItem from './AnswerItem';
import { Typography } from '@dodam/components';
import { useContext } from 'react';
import QuizContext from '../context/QuizContext';

const QuizItem = () => {
  const { state, dispatch } = useContext(QuizContext);
  const { currentAnswer, currentQuestion, questions, answerOptions } = state;

  const answerList = () =>
    answerOptions.map((element, idx) => (
      <AnswerItem
        dispatch={dispatch}
        key={idx}
        answer={element.answerOption}
        selected={currentAnswer === element.answerOption}
      />
    ));
  return (
    <>
      <div className="questions">
        <Typography weight="bold" variant="h5" className="question-num">
          Q{currentQuestion + 1}
        </Typography>
        <Typography weight="bold" className="separator">
          ㅡ
        </Typography>
        <Typography align="center" variant="h4" weight="bold" className="question-text">
          {questions[currentQuestion].question}
        </Typography>
      </div>
      {answerList()}
      <style jsx>{`
        .questions {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        :global(.question-num) {
          margin-top: 40px;
          color: #ebba00;
        }
        :global(.separator) {
          color: #ebba00;
        }
        :global(.question-text) {
          margin-bottom: 32px;
          width: 240px;
          height: 80px;
          word-break: keep-all;
        }
      `}</style>
    </>
  );
};
export default QuizItem;
