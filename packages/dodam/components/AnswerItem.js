import { SET_CURRENT_ANSWER } from '../data/actionTypes';
import { Button } from '@dodam/components';
import classNames from 'classnames';

const AnswerItem = (props) => {
  const { dispatch, answer, selected } = props;
  const classes = classNames('answer', selected && 'bg-primary');

  const handleClick = (e) => {
    dispatch({
      type: SET_CURRENT_ANSWER,
      currentAnswer: e.target.value,
    });
  };

  return (
    <div className="buttons">
      <Button outline={true} className={classes} value={answer} onClick={handleClick}>
        {answer}
      </Button>
      <style jsx>{`
        .buttons {
          display: flex;
          justify-content: center;
        }
        .buttons :global(.answer) {
          margin-bottom: 16px;
          width: 240px;
        }
      `}</style>
    </div>
  );
};

export default AnswerItem;
