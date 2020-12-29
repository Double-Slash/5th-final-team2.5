import { SET_CURRENT_ANSWER } from '../data/actionTypes';
import { Button } from '@dodam/components';

const AnswerItem = (props) => {
  let classes = ['answer'];
  const handleClick = (e) => {
    props.dispatch({
      type: SET_CURRENT_ANSWER,
      currentAnswer: e.target.value,
    });
  };

  if (props.selected) {
    classes.push('selected');
  }
  return (
    <div className="buttons">
      <Button outline="true" className={classes.join(' ')} value={props.answer} onClick={handleClick}>
        {props.answer}
      </Button>
      <style jsx global>{`
        .buttons {
          display: flex;
          justify-content: center;
        }
        .answer {
          margin-bottom: 15px;
          width: 240px;
        }
        .answer.selected {
          background-color: #ebba00;
        }
      `}</style>
    </div>
  );
};

export default AnswerItem;
