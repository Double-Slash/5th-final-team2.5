import { useContext } from 'react';
import QuizContext from '../context/QuizContext';

const Question = () => {
  const { state } = useContext(QuizContext);
  const { currentQuestion, questions } = state;
  return (
    <div className="questions">
      <div className="question-num">Q{currentQuestion + 1}</div>
      <div className="separator">ㅡ</div>
      <div className="question-text">{questions[currentQuestion].question}</div>
      <style jsx>
        {`
          .questions {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .question-num {
            margin-top: 45px;
            font-weight: bold;
            font-size: 20px;
            color: #ebba00;
          }
          .separator {
            font-weight: bold;
            color: #ebba00;
          }
          .question-text {
            margin-bottom: 40px;
            text-align: center;
            font-weight: bold;
            font-size: 24px;
            width: 240px;
            height: 80px;
            word-break: keep-all;
          }
        `}
      </style>
    </div>
  );
};

export default Question;
