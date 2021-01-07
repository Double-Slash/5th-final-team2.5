import { useState } from 'react';
import { ProgressBar } from '@dodam/components';
import QuizItem from '@/components/QuizItem';

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
    answerOption: 'O',
  },
  {
    answerOption: 'X',
  },
];
const quiz = () => {
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const question = questions[currentQuestion];
  const answer = { questionId: question.id, answerSelected: currentAnswer };

  const onSubmit = () => {
    if (confirm('제출하시겠습니까?')) {
      setAnswers([...answers, answer]);
      console.log(answers);
    }
  };

  const onPrev = () => {
    setCurrentQuestion(currentQuestion - 1 >= 0 ? currentQuestion - 1 : 0);
  };

  const onNext = () => {
    if (!currentAnswer) {
      alert('답안을 선택해주세요');
      return;
    }
    setCurrentQuestion(currentQuestion + 1 < questions.length ? currentQuestion + 1 : currentQuestion);
    setAnswers([...answers, answer]);
    setCurrentAnswer('');
    if (currentQuestion + 1 === questions.length) {
      onSubmit();
    }
  };

  const onSelected = (e) => {
    setCurrentAnswer(e.target.value);
  };

  return (
    <div className="main-container">
      <ProgressBar value={currentQuestion + 1} max={questions.length} />
      <QuizItem
        questions={questions}
        currentQuestion={currentQuestion}
        currentAnswer={currentAnswer}
        answerOptions={answerOptions}
        onSelected={onSelected}
        onNext={onNext}
        onPrev={onPrev}
      />
      <style jsx>
        {`
          .main-container {
            margin: 24px 24px 0px;
          }
        `}
      </style>
    </div>
  );
};
export default quiz;
