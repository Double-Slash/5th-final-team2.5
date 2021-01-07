import { Typography, Button } from '@dodam/components';

import AnswerItem from './AnswerItem';

const QuizItem = (props) => {
  const { questions, answerOptions, currentQuestion, currentAnswer, onSelected, onPrev, onNext } = props;

  const isSelected = (value) => value === currentAnswer;

  const showAnswerOptions = () =>
    answerOptions.map((element, idx) => (
      <AnswerItem
        // eslint-disable-next-line react/no-array-index-key
        key={idx}
        answer={element.answerOption}
        selected={isSelected(element.answerOption)}
        onSelected={onSelected}
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
      {showAnswerOptions()}
      <div className="move-buttons">
        <Button className="prev-button" outline onClick={onPrev}>
          이전으로
        </Button>
        <Button className="next-button" outline onClick={onNext}>
          {currentQuestion + 1 < questions.length ? '다음으로' : '완료'}{' '}
        </Button>
      </div>
      <style jsx>
        {`
          .questions {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .questions :global(.question-num) {
            margin-top: 40px;
            color: #ebba00;
          }
          .questions :global(.separator) {
            color: #ebba00;
          }
          .questions :global(.question-text) {
            margin-bottom: 32px;
            width: 188px;
            height: 80px;
            word-break: keep-all;
          }
          .buttons {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .buttons :global(.answer) {
            margin-bottom: 16px;
            width: 240px;
          }
          .move-buttons {
            display: flex;
            flex-direction: row;
            margin-top: 96px;
          }
          .move-buttons :global(.prev-button) {
            flex: 1;
            margin-left: 8px;
          }
          .move-buttons :global(.next-button) {
            flex: 1;
            margin-left: 8px;
            margin-right: 8px;
          }
        `}
      </style>
    </>
  );
};
export default QuizItem;
