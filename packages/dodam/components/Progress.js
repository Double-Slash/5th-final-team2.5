import { useContext } from 'react';
import { ProgressBar } from '@dodam/components';
import QuizContext from '../context/QuizContext';

const Progress = () => {
  const { state } = useContext(QuizContext);
  const { questions, currentQuestion } = state;
  return <ProgressBar value={currentQuestion + 1} max={questions.length} />;
};

export default Progress;
