import { useContext } from 'react';
import AnswerItem from './AnswerItem';
import QuizContext from '../context/QuizContext';

const Answers = () => {
  const { state, dispatch } = useContext(QuizContext);
  const { currentAnswer, answerOptions } = state;
  const answerList = () =>
    answerOptions.map((element, idx) => (
      <AnswerItem
        dispatch={dispatch}
        key={idx}
        answer={element.answerOption}
        selected={currentAnswer === element.answerOption}
      />
    ));
  return <div>{answerList()}</div>;
};

export default Answers;
